import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import moment from 'moment';

@ValidatorConstraint({ async: true })
export class IsValidDateConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    return moment(value, "YYYY-MM-DD", true).isValid();
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `${args.property} should be a valid YYYY-MM-DD date`;
  }
}