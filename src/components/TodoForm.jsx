 import { useRef } from 'react';
 
 export default function TodoForm({ add }) {
  const inputRef = useRef();

  return (
    <>
    <input ref={inputRef} />
    <button onClick={click}>추가</button>
    </>
  );

  function click() {
   add(inputRef.current.value);
  }
}