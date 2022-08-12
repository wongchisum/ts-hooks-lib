/*
 * @Author: wangzhisen
 * @Date: 2022-08-12 16:55:45
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-08-12 17:04:40
 */
import { useState } from 'react';
type ValueType<T> = () => T | T;

export default function usePartialState<
  T extends Record<string | number, unknown>
>(initValue: ValueType<T>) {
  const [state, setState] = useState(initValue?.());

  function handleChange(partialValue: Partial<T>) {
    setState(currentState => ({ ...currentState, partialValue }));
  }

  return [state, handleChange];
}
