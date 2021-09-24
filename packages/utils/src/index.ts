import axios from 'axios'
import { response, o } from './inteface'

const n = 1;
console.log(n);

console.log(window, document);

/**
 * @param  {number} v1
 * @param  {number} v2
 * @returns {number}
 */
export function sum(v1: number, v2: number): number {
  console.log(v1, v2);
  return v1 + v2;
}

export async function getTopics(): Promise<response> {
  return await axios.get('https://cnodejs.org/api/v1/topics')
}

export function replaceAll(): string {
  const str = 'q=query+string+parameters';
  const res = str.replaceAll('+', ' ');
  return res;
}

export async function promiseAny() {
  return await Promise.any([
    Promise.resolve(111),
    Promise.reject(2),
    Promise.resolve(3),
  ]);
}

export function optionalOperator() {
  const obj: o = { arr: [] }
  return obj.arr.length ?? 1;
}

export function budget() {
  const budget = 1_000_000_000_000
  return budget === 10 ** 12
}

export function testClass() {
  class StaticClassFeatures {
    static staticField = 'staticField';
  
    static callPrivateMethods() {
      StaticClassFeatures.#privateMethods();
    }
  
    static logPrivateField() {
      console.log(StaticClassFeatures.#privateField);
    }
  
    static #privateMethods() {
      console.log('privateMethods');
    }
  
    static #privateField = 'privateField';
  }
  
  console.log(StaticClassFeatures.staticField);
  StaticClassFeatures.logPrivateField()
  StaticClassFeatures.callPrivateMethods();
}

export function arrayIncludes() {
  return [1, 2, 3, 4].includes(5);
}

export function gen() {
  function *gen() {
    yield 1
  }
  return  gen()
}