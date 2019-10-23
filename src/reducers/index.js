import {combineReducers} from 'redux'

const taskreducer = (state= [] , action) => {
    console.log(action);
    
    switch(action.type){
        case 'ADDTASK':
            // state = state.concat(action.payload);
            // return action.payload;
            return state.concat(action.payload);
        
        case 'DELETETASK':
            // state= state.slice();
            return state.splice(action.payload,1);

        default:
            return state;
    }
},

reducers = combineReducers({ tasks:taskreducer })

export default reducers;