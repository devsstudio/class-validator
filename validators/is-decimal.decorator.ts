import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

export interface IsDecimalValidationOptions {
  maxDecimalPlaces: 2
}

@ValidatorConstraint()
export class IsDecimalConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    var numberValue = Number(value);
    const [maxDecimalPlaces] = args.constraints;

    if (isNaN(numberValue)) {
      return false;
    }

    var stringDecimals = numberValue.toString().split('.', 2)[1] || "";
    return stringDecimals.length <= maxDecimalPlaces;
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `${args.property} should be a valid decimal number`;
  }
}