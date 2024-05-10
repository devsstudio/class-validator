import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  isNumber,
  isInt,
  isDecimal,
  isString,
  isNumberString,
  isBoolean,
  isBooleanString,
  isArray,
  isAlphanumeric,
  isDate,
  isDateString,
} from 'class-validator';

@ValidatorConstraint()
export class IsValidTypeConstraint
  implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [type] = args.constraints;

    if (value) {
      switch (type) {
        case 'number':
          return isNumber(value) || isNumberString(value);
        case 'int':
          return isInt(value * 1)
        case 'decimal':
          return isDecimal(value);
        case 'string':
          return isString(value);
        case 'boolean':
          return isBoolean(value) || isBooleanString(value);
        case 'array':
          return isArray(value);
        case 'alphanumeric':
          return isAlphanumeric(value);
        case 'date':
          return isDate(value) || isDateString(value);
        default:
          return false;
      }

    } else {
      return true;
    }
  }


  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `${args.property} has an invalid value`;
  }
}

