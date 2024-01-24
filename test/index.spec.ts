import { describe, expect, it } from 'vitest';

describe('index', () => {
  describe('swagger-generate-demo', () => {
    it('should something', async () => {
      const url = 'http://localhost:8080/openapi.json';
      expect(typeof url).toBe('string');
    });
  });
});
