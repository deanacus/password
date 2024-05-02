import type { TypeOf, ZodTypeAny } from 'zod';

type ParseSearchParams = <Schema extends ZodTypeAny>(
  params: URLSearchParams,
  schema?: Schema,
) => Schema extends ZodTypeAny ? TypeOf<Schema> : Record<string, unknown>;

type ParsedValue = string | number | boolean | ParsedValue[];

const trueStrings = ['true', 'yes', 'y'];
const boolStrings = [trueStrings, 'false', 'no', 'n'].flat();

const coerceToBool = (val: string) => {
  const parsed = boolStrings.includes(val.toLowerCase());
  return parsed ? trueStrings.includes(val.toLowerCase()) : undefined;
};

const coerceToNum = (val: string) => {
  const parsed = parseFloat(val);
  return `${parsed}` === val ? parsed : undefined;
};

const parseValue = (value: string | string[]): ParsedValue => {
  if (Array.isArray(value)) {
    return value.length === 1 ? parseValue(value[0]) : value.map(parseValue);
  }
  return coerceToNum(value) ?? coerceToBool(value) ?? value;
};

export const parseSearchParams: ParseSearchParams = (params, schema) => {
  const output: Record<string, unknown> = {};
  for (const key of params.keys()) {
    output[key] = parseValue(params.getAll(key));
  }
  return schema ? schema.parse(output) : output;
};
