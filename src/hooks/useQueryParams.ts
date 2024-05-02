import { useSearchParams } from 'next/navigation';
import type { ZodTypeAny } from 'zod';

import { parseSearchParams } from '@/utils';

export const useQueryParams = <Schema extends ZodTypeAny>(schema?: Schema) => {
  const params = useSearchParams();
  return parseSearchParams(params, schema);
};
