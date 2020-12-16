
 export class TaskManager{
    constructor(currentId){
        this.tasks = [];
        this.currentId=0;

    } //end of constructor
    /* Method to accept form inputs and add to array*/
    addTask(taskName,taskDesc,assignedTo,dueDate){
        const task={
        Id:this.currentId++,
        name:taskName,
        description:taskDesc,
        assignedTo:assignedTo,
        dueDate:dueDate,
        status:'TODO',
         
        };//task obj; 
        this.tasks.push(task);
        console.log(task);
    } //end of add task method
    

}//end Od TaskManager Class



