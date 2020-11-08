import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    actionToTest,
    getPeopleAction,
    HANDLE_CHANGE,
    INFO_OK,
    INFO_ERROR
} from '../Actions'
import * as service from '../../services/peopleServices'

jest.mock('../../services/peopleServices', () => ({
    getPeople: jest.fn(() => Promise.resolve({ data: true }))
}))

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('asimple ctions', () => {
    beforeEach(() => service.getPeople.mockReset())

    it('should create an action to handle a change', () => {
        const store = mockStore()
        service.getPeople.mockResolvedValue({ data: true })

        const text = 'Handling Change'
        const expectedAction = {
            type: HANDLE_CHANGE,
            value: text
        }

        store.dispatch(actionToTest(text))

        const [currentAction /* , ...rest */] = store.getActions()

        expect(store.getActions().length).toEqual(1)
        expect(currentAction).toEqual(expectedAction)
    })
})

describe('async actions', () => {
    it('fetch service success', () => {
        const expectedActions = [{ type: INFO_OK, value: true }]
        const store = mockStore({ actualPage: 1 })

        return store.dispatch(getPeopleAction()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('fetch service rejected', () => {
        service.getPeople.mockResolvedValue({ error: true })

        const expectedActions = [{ type: INFO_ERROR, value: true }]
        const store = mockStore({ actualPage: 1 })

        return store.dispatch(getPeopleAction()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
