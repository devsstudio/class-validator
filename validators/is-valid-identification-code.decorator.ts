import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { validateCode } from '@devs-studio/sunat/dist/table/table-2';

@ValidatorConstraint({ async: true })
export class IsValidIdentificationCodeConstraint
  implements ValidatorConstraintInterface {
  validate(identification_code: any, args: ValidationArguments) {
    if (identification_code) {
      return validateCode(identification_code);
    } else {
      return true;
    }
  }

  defaultMessage(args: ValidationArguments) {
    const identification_code = (args.object as any)[args.property];
    // here you can provide default error message if validation failed
    return `${args.property} '${identification_code}' is not valid`;
  }
}

