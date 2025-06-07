export const AddTask = ({ taskList, setTaskList, task, setTask }) =>
{
  
 const handleSubmit = (e) =>
  {
   e.preventDefault();

   if(task.id) {
     const date = new Date();
     const updatedTaskList = taskList.map(todo => (
       task.id === todo.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo
       
       
     ))

     setTaskList(updatedTaskList);
     setTask({});
   } else {
    const date = new Date();
    console.log(date);
 
    const newTaskList = { id: date.getTime(), name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` };
 
    setTaskList([...taskList, newTaskList]);
    setTask({});
   }

  
   

  }
  return (
    <section className="addTask">

      <form onSubmit={handleSubmit}>
        <input type="text" name='task' value={task.name || ""} autoComplete="off" placeholder="Add Task..." onChange={(e) => setTask({...task, name:e.target.value})} />
        <button type="submit">{ task.id ? "Update" : "Add"}</button>
      </form>

    </section>
  )
}


