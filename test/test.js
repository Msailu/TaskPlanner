const assert = require("assert");
const { Console } = require("console");
const TaskManager = require("../js/taskManager.js");




describe('TaskManager',() =>{
    describe('addTask',() =>{
        it('add task to the task array',() =>{
                //SETUP
         const taskManager= new TaskManager();
         //Execute
         let initialTasksLength=taskManager.tasks.length;
         
         taskManager.addTask("cooking","Laddooooo","Sailaja","2021-01-14","to do");
         let newTasksLength=taskManager.tasks.length;
         //Verify
          
          assert.ok(initialTasksLength<newTasksLength);
          console.log("************************************************");
    
        });

        it('tests if the id is increamented for the new task added',() => {
            //SETUP
            const taskManager= new TaskManager();
            
            //Execute
            taskManager.addTask("cooking","Laddooooo","Sailaja","2021-01-14","to do");
            const firstTaskId=taskManager.tasks[0].Id;
            taskManager.addTask("work","TaskManagemnt","Sailaja","2021-01-14","to do");
            let expectedTaskId=firstTaskId+1;
            const newTaskId=taskManager.tasks[1].Id;
            //Verify
            console.log(newTaskId+'.........'+expectedTaskId )
            assert.ok(newTaskId,expectedTaskId);
            console.log('************************************************');
            
        });

        it("selects the right id a randomly selected task", function () {
            const taskManager = new TaskManager(0);

            taskManager.addTask("TaskManagerApp","UnitTestCases","XXXX","2021-01-15","to do");
            taskManager.addTask("TaskManagerApp","DeleteTask","QQQQQ","2021-01-15","to do");
            taskManager.addTask("TaskManagerApp","Update Task","EEEEE","2021-01-15","to do");
            taskManager.addTask("Asyn Activity","PendingLis","DDDDD","2021-01-15","to do");
            taskManager.addTask("Asyn Activity","Pending List1","DDDDD","2021-01-15","to do");
                       
            console.log(taskManager.tasks.length);
            
            let random = Math.round(Math.random() * 5);
            let randomId = random;
            let result = taskManager.getTaskById(random);
        
            console.log(randomId);
            assert.ok(randomId === result.Id);
            console.log('************************************************');
          });
    
    });

});



describe('TaskManager', () => {
     it('Check if the task is Deleted', () => {
         //SETUP
         const taskManager= new TaskManager();
        taskManager.addTask("cooking","Laddooooo","Sailaja","2021-01-14","to do");
        taskManager.addTask("Unit Testing","getTaskById","Sailaja and Meera","2021-01-15","to do");

         let initialTasksLength=taskManager.tasks.length;
        //Execute
        if (taskManager.tasks.length>0){
            taskManager.deleteTask(taskManager.tasks.length-1);
        }   
        let newTasksLength=taskManager.tasks.length;
        //Verify
         
         assert.ok(initialTasksLength>newTasksLength);  
         console.log('************************************************');
     });

     
});
describe('TaskManager', () => {

     it('displays the task, given the id of the task', () => {
        
         //SETUP
         const taskManager= new TaskManager();

        taskManager.addTask("cooking","Laddooooo","Sailaja","2021-01-14","to do");
        taskManager.addTask("Unit Testing","getTaskById","Sailaja and Meera","2021-01-15","to do");

        let expectedTask ={
            Id: 1,
            name: 'Unit Testing',
            description: 'getTaskById',
            assignedTo: 'Sailaja and Meera',
            dueDate: '2021-01-15',
            status: 'to do'
          }
          
        let actualTask= taskManager.getTaskById(1);
        console.log(actualTask);
        console.log(expectedTask);
       
        // let actualTask=actualTask.Id;
        //Verify
         
         assert.deepStrictEqual(actualTask,expectedTask);
         console.log('************************************************');
     });

   
});