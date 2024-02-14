import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint()
export class FnComparisonConstraint
  implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [when, comparison] = args.constraints;
    const result = when ? when(args.object as any) : true;

    if (result) {
      if (value !== null && value !== undefined) {
        return comparison(value, args.object as any);
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}

