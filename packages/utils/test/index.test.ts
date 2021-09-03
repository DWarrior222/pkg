import { expect, test } from '@jest/globals'
import { sum } from '../src/index'

test('sum1', () => {
  expect(sum(2, 2)).toBe(4);
})

test('sum2', () => {
  expect(sum(2, 2)).not.toBe(6)
})

test('sum3', () => {
  expect(sum(0, 1)).toBe(1)
})

test('sum4', () => {
  expect(sum(undefined, 1)).toBe(NaN)
})