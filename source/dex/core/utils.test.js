import { describe, it, expect } from 'vitest';
import { escapeHtml } from './utils.js';

describe('utils.js', () => {
  describe('escapeHtml', () => {
    it('should return the same string if no special characters are present', () => {
      expect(escapeHtml('Hello World')).toBe('Hello World');
    });

    it('should escape &', () => {
      expect(escapeHtml('Tom & Jerry')).toBe('Tom &amp; Jerry');
    });

    it('should escape < and >', () => {
      expect(escapeHtml('<script>')).toBe('&lt;script&gt;');
    });

    it('should escape double quotes', () => {
      expect(escapeHtml('He said "Hello"')).toBe('He said &quot;Hello&quot;');
    });

    it('should escape single quotes', () => {
      expect(escapeHtml("It's me")).toBe('It&#039;s me');
    });

    it('should handle null or undefined', () => {
      expect(escapeHtml(null)).toBe(null);
      expect(escapeHtml(undefined)).toBe(undefined);
    });

    it('should escape mixed characters', () => {
      expect(escapeHtml('<div class="test">Bob\'s & Alice\'s</div>')).toBe(
        '&lt;div class=&quot;test&quot;&gt;Bob&#039;s &amp; Alice&#039;s&lt;/div&gt;'
      );
    });
  });
});
