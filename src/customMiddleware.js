import { change, untouch, actionTypes } from 'redux-form';

const customMiddleware= ({ dispatch }) => next => action => {
    if (action.type === actionTypes.UNREGISTER_FIELD) {
        dispatch(change(action.meta.form, action.payload.name, null));
        dispatch(untouch(action.payload.name));
    }
    if (action.type === actionTypes.REGISTER_FIELD && (action.payload.name).indexOf('isActive')>-1) { 
        dispatch(change(action.meta.form, action.payload.name, 0));
    }
    next(action);
};

/*
Custom Middleware add for redux-form.

Issue: On updation of fields , values in state was not getting reset.
Solution: On getting new field registration reset the form state.

*/

export default customMiddleware;
