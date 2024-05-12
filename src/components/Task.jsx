import { useState } from "react";

const Task = () => {
  const [todo, setTodo] = useState([]);
  const date = new Date();
  const [input, setInput] = useState({title: "", description: ""});
  const [editID, setEditID] = useState(0);

  const addHandler = () => {
    const arrtodo = {
      id: Math.random() * 20,
      title: input.title,
      description: input.description,
      createdDate: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
    };
    setTodo([...todo, arrtodo]);
    setInput({title: '', description: ''})
    // console.log(arrtodo)  
  };

  const deleteHandler = (id) => {
    const deltodo = todo.filter((todos) => todos.id !== id)
    setTodo(deltodo);
  }

  const editHandler = (task) => {
    setEditID(task.id);
    setInput({...input, title: task.title, description: task.description});
  }

  const saveHandler = () => {
    const save = todo.map ( (todo) => editID === todo.id ? 
          {...todo, title: input.title, description: input.description, createdDate: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} 
                : todo )
    setEditID(0);
    setTodo(save);
    setInput({title: '', description: ''})
  //   console.log(save);
  }

  return (
    <>
       <div className="max-w-xl mx-auto py-8">
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Title"
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        <input
          type="text"
          className="w-full mt-2 px-3 py-2 border rounded-md"
          placeholder="Description"
          value={input.description}
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
        {editID ? (
          <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded-md" onClick={saveHandler}>
            Save
          </button>
        ) : (
          <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded-md" onClick={addHandler}>
            Add
          </button>
        )}
      </div>

     <ul>
        {todo.map((task) => (
          <li key={task.id} className="flex items-center justify-between border-b py-2">
            <div>
              <p className="font-semibold">{task.title}</p>
              <p className="text-gray-500">{task.description}</p>
              <p className="text-xs text-gray-400">{task.createdDate}</p>
            </div>
            <div>
              <button className="bg-blue-700 text-white px-3 py-1 rounded-md mr-2" onClick={() => editHandler(task)}>
                Edit
              </button>
              <button className="bg-red-700 text-white px-3 py-1 rounded-md" onClick={() => deleteHandler(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
     </div>

    </>
  );
};

export default Task;
