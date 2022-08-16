import { useRef } from "react";
import {useStore, actions} from "./store";


function App() {
  const [state, dispatch] = useStore();
  const {todo, todos} = state;
  const refInput = useRef();

  const handleAdd = () =>{
    dispatch(actions.addToDo(todo));
    dispatch(actions.setToDo(''));
    refInput.current.focus();
  };

  return (
    <div>
      <input
        ref={refInput}
        value={todo}
        placeholder= "Enter to do ..."
        onChange={(e) => dispatch(actions.setToDo(e.target.value))}
      />
      <button onClick={handleAdd}>Add to do</button>
      {
        todos.map((todo, index) => {
          return <li key={index}>{todo}</li>
        }
        )
      }
    </div>
  )
}

export default App;
