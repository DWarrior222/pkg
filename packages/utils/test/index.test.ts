import { expect, test } from '@jest/globals'
import { sum, getTopics, arrayIncludes, gen } from '../src/index'
import { response } from '../src/inteface'

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

// test('replaceAll', () => {
//   expect(replaceAll()).toBe('q=query string parameters')
// })

// test('promiseAny', async () => {
//   const data = await promiseAny();
//   expect(data).toBe(111);
// })

test('async', async () => {
  const res: response = await getTopics();
  const { data } = res;
  expect(data).not.toBeUndefined()
  expect(data.success).toBeTruthy()
})

test('generator', () => {
  expect(typeof gen()).toBe('object')
  expect(gen()).toHaveProperty('next');
})

test('arrayIncludes', () => {
  expect(arrayIncludes()).toBeFalsy();
})