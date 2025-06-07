
export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  // const tasks = [
  //   { id: 1001, name: 'Task A', time: "2:09:01 AM 9/14/2030" },
  //   { id: 1002, name: 'Task B', time: "2:09:01 AM 9/14/2030" },
  //   { id: 1003, name: 'Task C', time: "2:09:01 AM 9/14/2030" },
  //   { id: 1004, name: 'Task D', time: "2:09:01 AM 9/14/2030" }
  // ]

  const handleEdit = (id) =>
  {
    const selectedTask = taskList.find(todo => (todo.id === id));
    setTask(selectedTask);
    
  }

  const handleDelete = (id) => {
    setTaskList(taskList.filter(todo => todo.id !== id))
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>

        <button className="clearAll">Clear All</button>
      </div> 

      <ul>
       
        {taskList.map((task) => (

          <li key={ task.id}>
              <p>
                <span className='name'>{task.name}</span>
                <span className='time'>{task.time}</span>
              </p>

              <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
              <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
            </li>
        ))}

       
      </ul>
   </section>
  )
}

