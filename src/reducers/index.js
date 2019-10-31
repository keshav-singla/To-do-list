import {combineReducers} from 'redux'

const taskreducer = (state= [] , action) => {
    console.log(action);
    
    switch(action.type){
        // THIS CASE WILL ADD TASK
        case 'ADDTASK':
            return state.concat(action.payload);

        // THIS CASE WILL DELETE A TASK
        case 'DELETETASK':
            console.log(state);
            console.log(action.payload);
            console.log('hello');

            state = state.slice();
            state = state.filter(x => x !== action.payload);
            console.log(state)
            return state;
            
        default:
            return state;
    }
},

reducers = combineReducers({tasks:taskreducer})

export default reducers;