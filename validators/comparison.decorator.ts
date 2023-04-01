import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

export enum ComparisonOperator {
  GREATER = "GREATER",
  LESS = "LESS",
  GREATER_OR_EQUAL = "GREATER_OR_EQUAL",
  LESS_OR_EQUAL = "LESS_OR_EQUAL",
  EQUAL = "EQUAL",
  NOT_EQUAL = "NOT_EQUAL",
}

@ValidatorConstraint({ async: true })
export class ComparisonConstraint
  implements ValidatorConstraintInterface {
  validate(leftOperand: any, args: ValidationArguments) {
    const [anotherProperty, operator] = args.constraints;
    const rightperand = (args.object as any)[anotherProperty];

    if (leftOperand) {
      return this.compare(leftOperand, rightperand, operator);
    } else {
      return false;
    }
  }

  compare(left: any, right: any, operator: ComparisonOperator) {
    switch (operator) {
      case ComparisonOperator.GREATER:
        return left > right;
      case ComparisonOperator.LESS:
        return left < right;
      case ComparisonOperator.GREATER_OR_EQUAL:
        return left >= right;
      case ComparisonOperator.LESS_OR_EQUAL:
        return left <= right;
      case ComparisonOperator.EQUAL:
        return left == right;
      case ComparisonOperator.NOT_EQUAL:
        return left != right;
      default:
        return true;
    }
  }

  defaultMessage(args: ValidationArguments) {
    const [anotherProperty, operator] = args.constraints;

    switch (operator) {
      case ComparisonOperator.GREATER:
        return `${args.property} should be greater than '${anotherProperty}'`;
      case ComparisonOperator.LESS:
        return `${args.property} should be less than '${anotherProperty}'`;
      case ComparisonOperator.GREATER_OR_EQUAL:
        return `${args.property} should be greater or equal than '${anotherProperty}'`;
      case ComparisonOperator.LESS_OR_EQUAL:
        return `${args.property} should be less or equal than '${anotherProperty}'`;
      case ComparisonOperator.EQUAL:
        return `${args.property} should be equal than '${anotherProperty}'`;
      case ComparisonOperator.NOT_EQUAL:
        return `${args.property} should not be equal than '${anotherProperty}'`;
      default:
        return '';
    }
  }
}

