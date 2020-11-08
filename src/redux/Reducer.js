import { DELETE_USER } from './Actions'
import { INFO_OK, INFO_ERROR, LOADING_OFF, LOADING_ON, HANDLE_CHANGE} from './Actions'

const initialState = {
    people: {
        count: 0,
        next: '',
        previous: '',
        results: [],
    },
    actualPage: 1,
    loading: false,
    error: '',
    forTestPorpuse: false
}

function MyReduxState(state = initialState, action) {
    switch (action.type) {
        case INFO_OK: {
            let newPeople = (action.value)
            
            console.log('NEW PEOPLE: ', newPeople)
            return {
                ...state,
                actualPage: state.actualPage + 1, 
                people: {
                    ...newPeople,
                    results: state.people.results.concat(action.value.results)
                }

            }
        }
        case INFO_ERROR: {
            return {
                ...state,
                error: action.value
            }
        }
        case HANDLE_CHANGE: {
            return {
                ...state,
                forTestPorpuse: action.value
            }
        }

        case DELETE_USER: {
            return {
                ...state,
                people: {
                    ...state.people,
                    results: action.value
                }
            }
        }
        case LOADING_ON: {
            return {
                ...state,
                loading: true,
            }
        }

        case LOADING_OFF: {
            let loading = !state.loading

            return {
                ...state,
                loading: loading,
            }
        }

        default:
            return state
    }
}

export default MyReduxState
