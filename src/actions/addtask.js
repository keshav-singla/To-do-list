// ACTION TO BE PERFORMED ACCORDING TO THEIR TYPE

export const addTask = ( task ) => {
    console.log(task);
    
    return {
        type : 'ADDTASK',
        payload: task   
    };
}

export const taskDone = (taskId) => {
    return{
        type : 'TASKDONE',
        payload : taskId
    }
}

export const deleteTask = ( taskId ) =>{
    console.log(taskId);
    return{
        type: 'DELETETASK',
        payload : taskId
    };
}

