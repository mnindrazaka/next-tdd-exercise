import React from "react";

type Todo = {
  title: string;
};

type TodoApiResponse = {
  data: Todo[];
};

export function TodoApiScreen() {
  const [inputTodo, setInputTodo] = React.useState("");
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/api/todos")
      .then((res) => res.json())
      .then(({ data }: TodoApiResponse) => setTodos(data));
  }, []);

  const handleSubmit = () => {
    fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: inputTodo }),
    })
      .then(() => {
        setInputTodo("");
        return fetch("http://localhost:3000/api/todos");
      })
      .then((res) => res.json())
      .then(({ data }: TodoApiResponse) => setTodos(data));
  };

  const handleDelete = (index: number) => {
    fetch(`http://localhost:3000/api/todos/${index}`, {
      method: "DELETE",
    })
      .then(() => {
        return fetch("http://localhost:3000/api/todos");
      })
      .then((res) => res.json())
      .then(({ data }: TodoApiResponse) => setTodos(data));
  };

  return (
    <div>
      <label>
        todo
        <input
          type="text"
          value={inputTodo}
          onChange={(event) => setInputTodo(event.target.value)}
        />
      </label>

      <button onClick={handleSubmit}>submit</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <p>{todo.title}</p>
            <button onClick={() => handleDelete(index)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
