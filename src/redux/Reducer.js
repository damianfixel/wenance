import { HANDLE_CHANGE, LOADING_OFF, LOADING_ON} from './Actions'

const initialState = {
    valueToShowInReadComponent: undefined,
    loading: false,
    currentLoader: 0.
}

function WithReduxState(state = initialState, action) {
    switch (action.type) {
        case HANDLE_CHANGE: {
            return {
                ...state,
                valueToShowInReadComponent: action.value
            }
        }
        case LOADING_ON: {
            return {
                ...state,
                loading: true,
                currentLoader: state.currentLoader + 1
            }
        }

        case LOADING_OFF: {
            let currentLoader = state.currentLoader - 1
            let loading = currentLoader !== 0

            return {
                ...state,
                loading: loading,
                currentLoader: currentLoader
            }
        }

        default:
            return state
    }
}

export default WithReduxState
