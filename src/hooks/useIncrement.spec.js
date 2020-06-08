const { renderHook, act } = require('@testing-library/react-hooks');
const useIncrement = require('./useIncrement');

describe('useIncrement hook', () => {
    test('hook should increment value correctly', () => {
        const {result: customHook} = renderHook(() => useIncrement());
        const {current: [count, increment]} = customHook;

        expect(count).toBe(0);

        act(() => increment());

        const {current: [countPlusOne, ]} = customHook;

        expect(countPlusOne).toBe(1);

        act(() => increment());

        const {current: [countPlusTwo, ]} = customHook;

        expect(countPlusTwo).toBe(2);
    })
})