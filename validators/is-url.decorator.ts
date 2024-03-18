import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  isURL
} from 'class-validator';

export interface IsUrlValidationOptions {
  maxDecimalPlaces: 2
}

@ValidatorConstraint()
export class IsUrlConstraint implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    return isURL(value.replace(/\s/g, '%20'));
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `${args.property} should be a valid url`;
  }
}