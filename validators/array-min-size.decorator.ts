import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint()
export class ArrayMinSizeConstraint
  implements ValidatorConstraintInterface {
  validate(list: any[], args: ValidationArguments) {

    const [minSize, condition] = args.constraints;
    var result: boolean = condition ? condition(args.object as any) : true;

    if (list && result) {
      return list.length >= minSize;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    const [minSize] = args.constraints;

    return `${args.property} should contains at least ${minSize} elements`;
  }
}