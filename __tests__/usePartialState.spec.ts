/*
 * @Author: wangzhisen 
 * @Date: 2022-08-12 18:30:46 
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-08-12 18:36:48
 */

import { renderHook, act } from "@testing-library/react-hooks";
import { usePartialState } from '../src'

describe("测试usePartialState", () => {
    it("测试入参state", () => {
        const { result } = renderHook(() => usePartialState({ name: "xiaoming", age: 25 }))
        const { name, age } = result.current[0]
        expect(name).toBe("xiaoming")
        expect(age).toBe(25)
    })

    it("测试setState调用", () => {
        const { result } = renderHook(() => usePartialState({ name: "xiaoming", age: 25 }))
        act(() => {
            const setState = result.current[1]
            setState({ age: 26 })
        })

        expect(result.current[0].name).toBe("xiaoming")
        expect(result.current[0].age).toBe(26)

    })
})