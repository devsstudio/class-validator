import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { validateCorrelative } from '@devs-studio/sunat/dist/annex/annex-5';

@ValidatorConstraint({ async: true })
export class IsValidCorrelativeConstraint
  implements ValidatorConstraintInterface {
  validate(correlative: any, args: ValidationArguments) {
    const [fileCodeProperty, sunatCodeProperty, isElectronicProperty] =
      args.constraints;
    const file_code = (args.object as any)[fileCodeProperty];
    const sunat_code = (args.object as any)[sunatCodeProperty];
    const is_electronic = (args.object as any)[isElectronicProperty];

    if (correlative) {
      return validateCorrelative(
        file_code,
        sunat_code,
        correlative,
        is_electronic,
      );
    } else {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    const [fileCodeProperty, sunatCodeProperty, isElectronicProperty] =
      args.constraints;
    const file_code = (args.object as any)[fileCodeProperty];
    const sunat_code = (args.object as any)[sunatCodeProperty];
    const correlative = (args.object as any)[args.property];
    const is_electronic = (args.object as any)[isElectronicProperty];
    // here you can provide default error message if validation failed
    return `${args.property} '${correlative}' is not valid for sunat code '${sunat_code}' and file '${file_code}' when electronic is '${is_electronic}'`;
  }
}
