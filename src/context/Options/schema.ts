import type { TypeOf } from 'zod';
import { z } from 'zod';

export const optionsSchema = z.object({
  lower: z.coerce.boolean().optional().default(true),
  upper: z.coerce.boolean().optional().default(true),
  numeric: z.coerce.boolean().optional().default(true),
  special: z.coerce.boolean().optional().default(true),
  length: z.coerce.number().optional().default(16),
});

export type Options = TypeOf<typeof optionsSchema>;
