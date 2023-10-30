import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

export enum ArithmeticComparisonOperator {
  GREATER = "GREATER",
  LESS = "LESS",
  GREATER_OR_EQUAL = "GREATER_OR_EQUAL",
  LESS_OR_EQUAL = "LESS_OR_EQUAL",
  EQUAL = "EQUAL",
  NOT_EQUAL = "NOT_EQUAL",
}

@ValidatorConstraint()
export class ArithmeticComparisonConstraint
  implements ValidatorConstraintInterface {
  validate(leftOperand: any, args: ValidationArguments) {
    const [value, operator, condition] = args.constraints;
    const result = condition ? condition(args.object as any) : true;

    if (result) {
      if (leftOperand !== null && leftOperand !== undefined) {
        return this.compare(leftOperand, value, operator);
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  compare(left: any, right: any, operator: ArithmeticComparisonOperator) {
    switch (operator) {
      case ArithmeticComparisonOperator.GREATER:
        return left > right;
      case ArithmeticComparisonOperator.LESS:
        return left < right;
      case ArithmeticComparisonOperator.GREATER_OR_EQUAL:
        return left >= right;
      case ArithmeticComparisonOperator.LESS_OR_EQUAL:
        return left <= right;
      case ArithmeticComparisonOperator.EQUAL:
        return left == right;
      case ArithmeticComparisonOperator.NOT_EQUAL:
        return left != right;
      default:
        return true;
    }
  }

  defaultMessage(args: ValidationArguments) {
    const [value, operator] = args.constraints;

    switch (operator) {
      case ArithmeticComparisonOperator.GREATER:
        return `${args.property} should be greater than ${value}`;
      case ArithmeticComparisonOperator.LESS:
        return `${args.property} should be less than ${value}`;
      case ArithmeticComparisonOperator.GREATER_OR_EQUAL:
        return `${args.property} should be greater or equal than ${value}`;
      case ArithmeticComparisonOperator.LESS_OR_EQUAL:
        return `${args.property} should be less or equal than ${value}`;
      case ArithmeticComparisonOperator.EQUAL:
        return `${args.property} should be equal than ${value}`;
      case ArithmeticComparisonOperator.NOT_EQUAL:
        return `${args.property} should not be equal than ${value}`;
      default:
        return '';
    }
  }
}

