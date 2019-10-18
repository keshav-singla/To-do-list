export const addTask = ( task ) => {
    return {
        type : 'ADDTASK',
        payload : task
    }
},

deleteTask = ( taskId ) =>{
    return{
        type: 'DELETETASK',
        payload : taskId
    }
}