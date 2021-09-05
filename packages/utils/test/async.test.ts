import { expect, test } from '@jest/globals'
import { getTopics } from '../src/index';
import { response } from './inteface'

test('async', async () => {
  const res: response = await getTopics();
  const { data } = res;
  
  expect(data).not.toBeUndefined()
  expect(data.success).toBeTruthy()

  // await expect(getTopics()).resolves.toHaveProperty('success');
  // const resolves = await expect(getTopics()).resolves
})