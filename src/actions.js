import * as services from './services';

export const constant = {
    FETCHED_RESULT : 'FETCHED_RESULT',
    FETCHING_RESULT : 'FETCHING_RESULT',
    SHOW_ERROR: 'SHOW_ERROR',
    RESULT : 'RESULT',
    RESET_STATE : 'RESET_STATE',
    CLEAR_ERROR : 'CLEAR_ERROR'
}

const loadFetching = (payload) => {
    return {
        type: constant.FETCHING_RESULT,
        ...payload
    }
}

const loadResult = payload => {
    return {
        type: constant.FETCHED_RESULT,
        payload
    }
}

const loadError = error => {
    return {
        type: constant.SHOW_ERROR,
        ...error
    }
}

export const handleErrorClick = payload => {
    return dispatch =>{
        dispatch({
            type: constant.CLEAR_ERROR
        })
    }
}

export const resetStateAction = () => {
    return {
        type: constant.RESET_STATE,
    }
}

export const submitAction = payload =>{
    return dispatch=>{
        dispatch(loadFetching());
        services.submitForm({...payload})
        .then(result=>{
            dispatch(loadResult({...result}));
        })
        .catch(error=> dispatch(loadError(error)));
    }
}

export function getCustomerAction(payload){
    return dispatch=>{
        dispatch(loadFetching({customerList:[]}));
        services.getCustomerService(payload)
        .then(result=>{
            dispatch(loadResult({...result}));
        })
        .catch(error=> dispatch(loadError(error)));        
    }
}

export function createNewUserAction (payload){
    return dispatch=>{
        dispatch(loadFetching());
        services.createNewUserService({...payload,key:'isCreatedUser'})
        .then(result=>{
            dispatch(loadResult({...result}));
        })
        .catch(error=> dispatch(loadError(error)));        
    }
}

export function deleteSelectedUserAction(payload){
    return dispatch=>{
        dispatch(loadFetching());
        services.deleteSelectedUserService({id:payload,key:'isCustomerDeleted'})
        .then(result=>{
            if(result.isCustomerDeleted && result.isCustomerDeleted.ok===0){
                dispatch(loadError({error:"Couldn't delete user. This might happen if user is already not found or server Error !!"}));
            }else{
                dispatch(loadResult({...result,customerContact:[]}));
            }
        })
        .catch(error=> dispatch(loadError(error)))
    }
}