import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { validateUbigeo } from '@devs-studio/sunat/dist/table/table-13';

@ValidatorConstraint({ async: true })
export class IsValidUbigeoConstraint
  implements ValidatorConstraintInterface {
  validate(ubigeo: any, args: ValidationArguments) {

    if (ubigeo) {
      return validateUbigeo(ubigeo);
    } else {
      return true;
    }
  }

  defaultMessage(args: ValidationArguments) {

    const ubigeo = (args.object as any)[args.property];

    // here you can provide default error message if validation failed
    return `${args.property} '${ubigeo}' is not valid ubigeo`;
  }
}