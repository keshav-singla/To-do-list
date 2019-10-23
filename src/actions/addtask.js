// ACTION TO BE PERFORMED ACCORDING TO THEIR TYPE

export const addTask = ( task ) => {
    return {
        type : 'ADDTASK',
        payload : task
    };
}

export const deleteTask = ( taskId ) =>{
    return{
        type: 'DELETETASK',
        payload : taskId
    };
}