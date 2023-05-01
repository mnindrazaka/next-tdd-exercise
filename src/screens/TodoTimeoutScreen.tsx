import React from "react";

export function TodoTimeoutScreen() {
  const [inputTodo, setInputTodo] = React.useState("");
  const [todos, setTodos] = React.useState<string[]>([]);

  const handleSubmit = () => {
    setTimeout(() => {
      setTodos((prev) => [...prev, inputTodo]);
      setInputTodo("");
    }, 500);
  };

  const handleDelete = (index: number) => {
    setTimeout(() => {
      setTodos((prev) =>
        prev.filter((_, currentIndex) => currentIndex !== index)
      );
    }, 500);
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
            <p>{todo}</p>
            <button onClick={() => handleDelete(index)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
