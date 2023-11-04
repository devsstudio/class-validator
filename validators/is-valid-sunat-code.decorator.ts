import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { validateDocumentCode } from '@devs-studio/sunat/dist/annex/annex-5';

@ValidatorConstraint({ async: true })
export class IsValidSunatCodeConstraint
  implements ValidatorConstraintInterface
{
  validate(sunat_code: any, args: ValidationArguments) {
    const [fileCodeProperty] = args.constraints;
    const file_code = (args.object as any)[fileCodeProperty];

    if (sunat_code) {
      return validateDocumentCode(file_code, sunat_code);
    } else {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    const [fileCodeProperty] = args.constraints;

    const sunat_code = (args.object as any)[args.property];
    const file_code = (args.object as any)[fileCodeProperty];

    // here you can provide default error message if validation failed
    return `${args.property} '${sunat_code}' is not valid for file '${file_code}'`;
  }
}