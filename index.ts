import { registerDecorator, ValidationOptions } from "class-validator";
import { ComparisonConstraint, ComparisonOperator } from "./validators/comparison.decorator";
import { IsValidDateConstraint } from "./validators/is-valid-date.decorator";
import { IsValidIdentificationCodeConstraint } from "./validators/is-valid-identification-code.decorator";
import { IsValidIdentificationNumberConstraint } from "./validators/is-valid-identification-number.decorator";
import { ArrayMinSizeConstraint } from "./validators/array-min-size.decorator";
import { IsDecimalConstraint } from "./validators/is-decimal.decorator";
import { ArithmeticComparisonConstraint, ArithmeticComparisonOperator } from "./validators/arithmetic-comparison.decorator";
import { IsValidUbigeoConstraint } from "./validators/is-valid-ubigeo.decorator";

export function Comparison(
    anotherProperty: string,
    operator: ComparisonOperator,
    condition?: Function,
    validationOptions?: ValidationOptions,
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [anotherProperty, operator, condition],
            validator: ComparisonConstraint,
        });
    };
}

export function ArithmeticComparison(
    value: number,
    operator: ArithmeticComparisonOperator,
    condition?: Function,
    validationOptions?: ValidationOptions,
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [value, operator, condition],
            validator: ArithmeticComparisonConstraint,
        });
    };
}

export function IsValidDate(
    validationOptions?: ValidationOptions,
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidDateConstraint,
        });
    };
}

export function IsValidIdentificationCode(
    validationOptions?: ValidationOptions,
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidIdentificationCodeConstraint,
        });
    };
}

export function IsValidIdentificationNumber(
    identificationCodeProperty: string,
    validationOptions?: ValidationOptions,
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [identificationCodeProperty],
            validator: IsValidIdentificationNumberConstraint,
        });
    };
}

export function IsValidUbigeo(
    validationOptions?: ValidationOptions,
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidUbigeoConstraint,
        });
    };
}

export function ArrayMinSize(
    minSize: number,
    condition?: Function,
    validationOptions?: ValidationOptions,
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [minSize, condition],
            validator: ArrayMinSizeConstraint,
        });
    };
}

export function IsDecimal(
    maxDecimalPlaces: number,
    validationOptions?: ValidationOptions,
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [maxDecimalPlaces],
            validator: IsDecimalConstraint,
        });
    };
}