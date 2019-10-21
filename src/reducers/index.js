import {combineReducers} from 'redux'

const taskreducer = (state= [] , action) => {
    
    switch(action.type){
        case 'ADDTASK':
            state = state.concat(action.payload);
            break;
        
        case 'DELETETASK':
            state= state.slice();
            state.splice(action.payload,1);
            break;

        default:
            return state;
    }
},

reducers = combineReducers({ tasks:taskreducer })

export default reducers;