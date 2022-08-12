/*
 * @Author: wangzhisen
 * @Date: 2022-08-12 19:03:36
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-08-12 19:06:39
 *
 * 实现useToggle Hook
 */

import { useCallback, useState } from 'react';

export default function useToggle(iniState = false) {
  const [state, setState] = useState(iniState);

  const toggle = useCallback(() => {
    setState((prevState: boolean) => !prevState);
  }, []);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(true);
  }, []);

  return [state, { setTrue, setFalse, toggle }];
}
