const { renderHook, act } = require('@testing-library/react-hooks');
const useFetch = require('./useFetch');

describe('useIncrement hook', () => {
    test('hook should increment value correctly', () => {
        const {result: customHook} = renderHook(() => useFetch());
        const {current: [data, status, fetch]} = customHook;

        const fakePromise = Promise.resolve();

        expect(data).toBe(null);
        expect(status).toBe(null)

        act(() => fetch());

        await act(() => fakePromise);

        const {current: [fetchData, fetchStatus, ]} = customHook;

        expect(fetchData).toBe('data');
        expect(fetchStatus).toBe('success')
    })
})  