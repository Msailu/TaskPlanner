/** Code added for task6 */
/**The Below function accepts the input parameters and builds dynamic HTML String   */
function createTaskHtml(id,taskName,taskDesc,assignedTo,dueDate,status){
    const html=`<div class="col-auto mb-3" data-task-id=${id}>
                    <div class="card border-secondary mb-3" style="width: 18rem;">
                        <div class="card-header"><h5>${taskName}</h5></div>
                        <div class="card-body">
                            <p class="card-text " ><strong> Description : </strong>${taskDesc}</p>
                            <p class="card-text "><strong>Assigned To:</strong> ${assignedTo}</p>
                            <p class="card-text"><strong>Due Date:</strong>  ${dueDate}</p>
                            <p> <span class="badge ${status ==='TO DO' ? 'badge-danger' :'badge-success'}">${status}</span></p>
                            <a href="#" class="btn btn-primary">Edit</a>
                            <a href="#" class="btn btn-primary done-button ${status ==='TO DO' ? 'visible' : 'invisible'} ">Mark As Done</a>
                            <a href="#" class="btn btn-primary delete-button">Delete</a>
                        </div>
                    </div>
                </div>`;
              //console.log(html);
            return html;

} // end of createTaskHtml
 /** Code added for task6 ends here*/
 
 //export class TaskManager{ --- this line is required for the code to work in browser
   // module.exports= class TaskManager{  //this line is required for the code to work with npm mocha
   class TaskManager{   
    constructor(currentId){
        this.tasks = [];
        this.currentId=0;

    } //end of constructor
    /* Method to accept form inputs and add to array*/
    addTask(taskName,taskDesc,assignedTo,dueDate,status){
        const task={
        Id:this.currentId++,
        name:taskName,
        description:taskDesc,
        assignedTo:assignedTo,
        dueDate:dueDate,
        status:status,
         
        };//task obj; 
        this.tasks.push(task);
        console.log(task);
    } //end of add task method

    deleteTask(taskId){
        let newTasks = [];
        //loop over the tasks
        console.log('--------------------------------------');
        console.log("Length Of the array before deletion");
        console.log(this.tasks.length);
        for(let i=0;i<this.tasks.length;i++){
            
           
           
            let task=this.tasks[i];
            console.log(JSON.stringify(this.tasks[i]) +'...'+i +'....'+JSON.stringify(task));
            console.log('comapre')
            console.log(task.Id +'....'+taskId);
            if(task.Id !== taskId){
                newTasks.push(task);
            }
    
        }//end of for loop
        console.log('checking for new tasklength');
        console.log(newTasks.length);
        console.log(newTasks);
       
        this.tasks=newTasks;
      
        // taskManager.save();
        // taskManager.render();
    }

    /**The below method renders the task to html page */
    render(){

        // debugger;
          const tasksHtmlList=[];
          console.log(`in render ...number of tasks is ${this.tasks.length}`);
  
          //looping over the tasks and preparing the html string to be displayed in html"
          for(let i=0 ;i<this.tasks.length;i++)
          {
             //fetches each task from the list of tasks and stores in a variable
              const task =this.tasks[i];
  
              // formatting the date as we getting in yyyy-mm-dd format
              const date =new Date(task.dueDate);
              const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  
              //preparing html string format
              const taskHtml = createTaskHtml(task.Id, task.name, task.description, task.assignedTo, formattedDate, task.status);
              tasksHtmlList.push(taskHtml);
              console.log('task html is..') ; 
              console.log(tasksHtmlList);
            
             
          } //end of for loop
           // Set the inner html of the tasksList on the page
           const tasksHtml = tasksHtmlList.join('\n');
           const tasksList = document.querySelector('#tasksList');
           tasksList.innerHTML = tasksHtml;
    }//end of render methd
    
    getTaskById(taskId ){
        // // Create a variable to store the found task
        let foundTask ;
            console.log('in getTaskById...');
            console.log(taskId);
        // Loop over the tasks and find the task with the id passed as a parameter
        for(let i=0 ;i<this.tasks.length;i++){

             // Get the current task in the loop
            const task=this.tasks[i];
            console.log('in for');
            console.log(this.tasks[i]);
            // Check if its the right task by comparing the task's id to the id passed as a parameter
            if (task.Id===taskId){
                foundTask=task;

            }

        } //end of for loop
        
        console.log(' returning foundTask...');
        console.log(foundTask);
        return foundTask;
    }//end of getTaskById() method
    // Code added for task 8 --13-Jan-2021
    //Adding the task to localStorage
    save(){
        
        let tasksJson=JSON.stringify(this.tasks);
        console.log('tasksJson.....save method');
        console.log(tasksJson);
        localStorage.setItem('tasks',tasksJson);
        console.log('insave------------------------------------');
        console.log(this.tasks);
        let currentId=String(this.currentId);
        localStorage.setItem('currentId',currentId);

    }// end of save method

    //Code added for task 8 on  --13-Jan-2021
    //Adding them to task array
    load(){
       
        
        if (localStorage.getItem('tasks'))
        {
           
            const tasksJson= localStorage.getItem('tasks');
            this.tasks=JSON.parse(tasksJson);
        }
            if(localStorage.getItem('currentId'))
            {
               const currentId=localStorage.getItem('currentId');
                this.currentId=Number(currentId);
            }
       

    }//end of load
    //Code added for task 9 on --13-Jan-2021
    
    

    // Code added for task 8 --13-Jan-2021
    save(){
       
        let tasksJson=JSON.stringify(this.tasks);
        console.log('tasksJson.....');
        console.log(tasksJson);
        localStorage.setItem('tasks',tasksJson);

        //let currentId=String(this.currentId);
        let currentId=this.currentId.toString();
        localStorage.setItem('currentId',currentId);

    }// end of save method

}//end Od TaskManager Class




