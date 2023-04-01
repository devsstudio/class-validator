import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { validateNumber } from '@devs-studio/sunat/dist/table/table-2';

@ValidatorConstraint({ async: true })
export class IsValidIdentificationNumberConstraint
  implements ValidatorConstraintInterface {
  validate(identification_number: any, args: ValidationArguments) {
    const [identificationCodeProperty] = args.constraints;
    const identification_code = (args.object as any)[identificationCodeProperty];

    if (identification_number) {
      return validateNumber(identification_code, identification_number);
    } else {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    const [identificationCodeProperty] = args.constraints;

    const identification_number = (args.object as any)[args.property];
    const identification_code = (args.object as any)[identificationCodeProperty];

    // here you can provide default error message if validation failed
    return `${args.property} '${identification_number}' is not valid for identification code '${identification_code}'`;
  }
}