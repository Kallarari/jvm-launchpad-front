import '@testing-library/jest-dom'
import { beforeEach, expect } from 'vitest';
import {
  buildToHaveStyleRule,
  resetStyleSheet,
  type ToHaveStyleRuleMatchers,
} from 'vitest-styled-components';

beforeEach(resetStyleSheet);
expect.extend({ toHaveStyleRule: buildToHaveStyleRule(expect) });

declare module 'vitest' {
  interface Assertion<T = any> extends ToHaveStyleRuleMatchers {}
  interface AsymmetricMatchersContaining extends ToHaveStyleRuleMatchers {}
}