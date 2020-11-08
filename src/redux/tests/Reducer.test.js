import MyReduxState from '../Reducer'

import { HANDLE_CHANGE } from '../Actions'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(MyReduxState(undefined, {})).toEqual({
            forTestPorpuse: undefined
        })
    })

    it('should handle HANDLE_CHANGE', () => {
        expect(
            MyReduxState([], {
                type: HANDLE_CHANGE,
                value: true
            })
        ).toEqual({
            forTestPorpuse: true
        })
    })
})

// this is an example. here we can test all our cases in reducer
