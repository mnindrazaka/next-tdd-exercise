import React from "react";

export function TodoScreen() {
  const [inputTodo, setInputTodo] = React.useState("");
  const [todos, setTodos] = React.useState<string[]>([]);

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

      <button
        onClick={() => {
          setTodos((prev) => [...prev, inputTodo]);
          setInputTodo("");
        }}
      >
        submit
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <p>{todo}</p>
            <button
              onClick={() =>
                setTodos((prev) =>
                  prev.filter((_, currentIndex) => currentIndex !== index)
                )
              }
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
