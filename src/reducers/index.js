import {combineReducers} from 'redux'

const taskreducer = (state= [] , action) => {
    console.log(action);
    
    switch(action.type){
        // THIS CASE WILL ADD TASK
        case 'ADDTASK':
            return state.concat(action.payload);
        
        // THIS CASE WILL DELETE A TASK    
        case 'DELETETASK':
            console.log(action.payload);
            
            state= state.slice();
            state.splice(action.payload,1);
            return state;
            
        default:
            return state;
    }
},

reducers = combineReducers({tasks:taskreducer})

export default reducers;