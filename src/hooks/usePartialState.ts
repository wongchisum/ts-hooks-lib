/*
 * @Author: wangzhisen
 * @Date: 2022-08-12 18:35:29
 * @Last Modified by:   wangzhisen
 * @Last Modified time: 2022-08-12 18:35:29
 */

import { useState } from 'react';

export default function usePartialState<
  T extends Record<string | number, unknown>
>(initValue: T): [T, (value: Partial<T>) => void] {
  const [state, setState] = useState(initValue);

  function handleChange(partialValue: Partial<T>) {
    setState(currentState => ({ ...currentState, ...partialValue }));
  }

  return [state, handleChange];
}
