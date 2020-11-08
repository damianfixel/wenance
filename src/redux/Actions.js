import { getPeople } from '../services/peopleServices'

export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const SEND_INFO_OK = 'SEND_INFO_OK'
export const API_ERROR = 'API_ERROR'
export const LOADING_ON = 'LOADING_ON'
export const LOADING_OFF = 'LOADING_OFF'


export function loadingOn() {
    return function (dispatch) {
        dispatch({ type: LOADING_ON })
    }
}

export function loadingOff() {
    return function (dispatch) {
        dispatch({ type: LOADING_OFF })
    }
}


export function handleChange(value) {
    return function (dispatch) {
        // maybe you want to use some data from the redux state
        // const { valueToShowInReadComponent } = getState().withReduxState;
        dispatch({ type: HANDLE_CHANGE, value: value })
    }
}

export function callApi() {
    return async function (dispatch) {
        const { data, error } = await getPeople()
        console.log('todo ok');
        // remember to see AxiosConfig to understand who is who
        if (data) {
            // Do some stuff with data and (almost always) dispatch actions
            dispatch({
                type: SEND_INFO_OK,
                value: data
            })
        } else {
            // handle the error
            dispatch({
                type: API_ERROR,
                value: error
            })
        }
    }
}
