import { generate } from 'swagger-to-typescript-interface';

generate(`${process.env.API_URL}/openapi.json`, `./src/types.ts`);
