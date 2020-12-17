/** Code added for task6 */
/**The Below function accepts the input parameters and builds dynamic HTML String   */
function createTaskHtml(taskName,taskDesc,assignedTo,dueDate,status){
    const html=`<div class="col-auto mb-3">
                    <div class="card border-secondary mb-3" style="width: 18rem;">
                        <div class="card-header"><h5>${taskName}</h5></div>
                        <div class="card-body">
                            <p class="card-text " ><strong> Description : </strong>${taskDesc}</p>
                            <p class="card-text "><strong>Assigned To:</strong> ${assignedTo}</p>
                            <p class="card-text"><strong>Due Date:</strong> ${dueDate}</p>
                            <p> <span class="badge badge-primary">${status}</span></p>
                            <a href="#" class="btn btn-primary">Edit</a>
                        </div>
                    </div>
                </div>`;
              //console.log(html);
            return html;

} // end of createTaskHtml
 /** Code added for task6 ends here*/
 
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
              const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
              tasksHtmlList.push(taskHtml);
              console.log('task html is..') ; 
              console.log(tasksHtmlList);
            
              // Set the inner html of the tasksList on the page
              const tasksHtml = tasksHtmlList.join('\n');
              const tasksList = document.querySelector('#tasksList');
              tasksList.innerHTML = tasksHtml;
          } //end of for loop
    }//end of render methd
    

}//end Od TaskManager Class



