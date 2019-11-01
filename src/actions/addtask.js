// ACTION TO BE PERFORMED ACCORDING TO THEIR TYPE

export const addTask = ( task ) => {
    return {
        type : 'ADDTASK',
        payload : task
    };
}

export const deleteTask = ( taskId ) =>{
    console.log(taskId);
    return{
        type: 'DELETETASK',
        payload : taskId
        
    };
}

export const checkTask = (task) =>{
    return{
        type: 'CHECKTASK',
        payload: task
    }
}