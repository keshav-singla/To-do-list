import {combineReducers} from 'redux'

const taskreducer = (state= [] , action) => {
    console.log(action);

    switch(action.type){
        // THIS CASE WILL CHECKTASK and then ADDTASK       
            case 'ADDTASK':
            console.log(action.payload);
            return state.concat(action.payload);
            
        // THIS CASE WILL DELETE A TASK
        case 'DELETETASK':

            state = state.slice();
            state = state.filter(x => x !== action.payload);
            console.log(state)
            return state;

        // THIS CASE WILL CHANGE THE STATUS OF TASK
        case 'TASKDONE':
            console.log(state);
            
            return state;
            
        default:
            return state;
    }
},

reducers = combineReducers({tasks:taskreducer})

export default reducers;