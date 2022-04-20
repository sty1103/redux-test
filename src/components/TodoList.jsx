export default function TodoList({ todos }) {
  return (
    <>
      <ul>
        {todos.map((todo, index) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </>
  )
}

