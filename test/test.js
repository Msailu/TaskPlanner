const assert = require("assert");
const { Console } = require("console");
const TaskManager = require("../js/taskManager.js");




describe('TaskManager',() =>{
    describe('addTask',() =>{
        it('Test 1 : Add task to the task array',() =>{
                //SETUP
         const taskManager= new TaskManager();
         //Execute
         let initialTasksLength=taskManager.tasks.length;
         
         taskManager.addTask("cooking","Laddooooo","Sailaja","2021-01-14","to do");
         let newTasksLength=taskManager.tasks.length;
         //Verify
          console.log('initialTasksLength.....'+initialTasksLength);
          console.log('newTasksLength.....'+newTasksLength);
          assert.ok(initialTasksLength<newTasksLength);
          console.log("************************************************");
    
        });

        it('Test 2. Tests if the id is increamented for the new task added',() => {
            //SETUP
            const taskManager= new TaskManager();
            
            //Execute
            taskManager.addTask("TASK PLANNER","Create Task Form using Modal","Sailaja","2021-01-14","to do");
            const firstTaskId=taskManager.tasks[0].Id;
            console.log('existing Task....')
            console.log(taskManager.tasks[0]);
            taskManager.addTask("work","TaskManagemnt","Sailaja","2021-01-14","to do");
            console.log('New Task....') ;
            console.log(taskManager.tasks[1]);
            let expectedTaskId=firstTaskId;
            const newTaskId=taskManager.tasks[1].Id;
            //Verify
           // console.log(''+newTaskId+'.........'+expectedTaskId )
            assert.ok(newTaskId,expectedTaskId);
            console.log('************************************************');
            
        });

        it(" Test 3. Displays the task, given the id of the task'", function () {
            const taskManager = new TaskManager(0);

            taskManager.addTask("TaskManagerApp","UnitTestCases","X","2021-01-15","to do");
            taskManager.addTask("TaskManagerApp","DeleteTask","Y","2021-01-15","to do");
            taskManager.addTask("TaskManagerApp","Update Task","Z","2021-01-15","to do");
            taskManager.addTask("Asyn Activity","PendingLis","M","2021-01-15","to do");
            taskManager.addTask("Asyn Activity","Pending List1","R","2021-01-15","to do");
            console.log(taskManager.tasks);           
         //   console.log(taskManager.tasks.length);
            
            let random = Math.round(Math.random() * 5);
            let randomId = random;
            let result = taskManager.getTaskById(random);
        
             console.log('ramdon id generated is .....'+randomId);
             console.log( 'Corresponding Task....');
             console.log(taskManager.getTaskById(random));
            assert.ok(randomId === result.Id);
            console.log('************************************************');
          });
    
    });

});



describe('TaskManager', () => {
     it('Test 4 . Check if the task is Deleted', () => {
         //SETUP
         const taskManager= new TaskManager();
        taskManager.addTask("cooking","Laddooooo","Sailaja","2021-01-14","to do");
        taskManager.addTask("Unit Testing","getTaskById","Sailaja and Meera","2021-01-15","to do");
        console.log('TaskList Before deletion');
        console.log(taskManager.tasks);
         let initialTasksLength=taskManager.tasks.length;
        //Execute
        if (taskManager.tasks.length>0){
            taskManager.deleteTask(taskManager.tasks.length-1);
        }   
        console.log('TaskList After deletion');
        console.log(taskManager.tasks);
        let newTasksLength=taskManager.tasks.length;
        //Verify
         
         assert.ok(initialTasksLength>newTasksLength);  
         console.log('************************************************');
     });

     
});
