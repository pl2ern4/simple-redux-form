import {constant} from './actions';

const initialState = {
    customerList: [],
    customerContact:[]
};

export const rootReducer = (state=initialState, action) => { 
    switch(action.type){
        case constant.FETCHING_RESULT:
            return { ...state,
                isFetching:true,
                isError:false
            };
        
        case constant.SHOW_ERROR:
            return { ...state,
                isFetching:false,
                isError:true,
                error:action.error
            };
        case constant.CLEAR_ERROR:
            return {
                ...state,
                isError:false,
                error:null
            }
        case constant.FETCHED_RESULT:
            return { ...state,
                isFetching:false,
                isError:false,
                ...action.payload||[]  
            };    
        
        case constant.RESET_STATE:
            return {
                ...state,
                isFetching:false,
                isError:false,
                status: constant.QUOTE,
                resultQuote:{}
            };
        default:
            return {...state};
        
    }
}
