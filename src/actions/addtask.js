export const addTask = ( task ) => {
    console.log(task);
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

// export default {addTask, deleteTask};