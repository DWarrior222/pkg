import axios from 'axios'
import { response } from '../test/inteface'

export function sum(v1: number, v2: number): number {
  console.log(v1, v2);
  return v1 + v2;
}

export async function getTopics(): Promise<response> {
  return await axios.get('https://cnodejs.org/api/v1/topics')
}