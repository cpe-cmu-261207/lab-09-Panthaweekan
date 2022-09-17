import { useEffect, useState } from "react";
import Todo from "../components/Todolist";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [todolist, setTodo] = useState([]);

  useEffect(() => {
    const todosStr = localStorage.getItem("react-todos");
    if (!todosStr) setTodo([]);
    else setTodo(JSON.parse(todosStr));
  }, []);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodos();
  }, [todolist]);

  const saveTodos = () => {
    const todosStr = JSON.stringify(todolist);
    localStorage.setItem("react-todos", todosStr);
  };

  const deleteTodo = (idx) => {
    todolist.splice(idx, 1);
    const newTodolist = [...todolist];
    setTodo(newTodolist);
  };

  const markTodo = (idx) => {
    todolist[idx].completed = !todolist[idx].completed;
    setTodo([...todolist]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    let temp = todolist[idx];
    todolist[idx] = todolist[idx - 1];
    todolist[idx - 1] = temp;
    setTodo([...todolist]);
  };

  const moveDown = (idx) => {
    if (idx === todolist.length - 1) return;
    let temp = todolist[idx];
    todolist[idx] = todolist[idx + 1];
    todolist[idx + 1] = temp;
    setTodo([...todolist]);
  };

  const addTodo = (data, completed) => {
    setTodo([{ data: data, completed: completed }, ...todolist]);
  };

  const onKeyUpCheck = (event) => {
    if (event.key !== "Enter") return;
    if (event.target.value === "") {
      alert("Todo cannot be empty");
      return;
    }
    addTodo(event.target.value, false);
    event.target.value = "";
  };

  return (
    <div
      style={{
        backgroundColor: "#BD0000",
        textalign: "center",
        maxwidth: "750px",
      }}
      className="vstack mx-auto gap-2 rounded -3 p-3 align-items-center justify-content-center"
    >
      <Navbar />
      {/* Entire App container (required for centering) */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "white" }}
        className="mx-auto vstack gap-2 border border -2 rounded -3 p-3 "
      >
        {/* App header */}
        <p className="display-4 text-center fst-italic m-4">
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>
        {/* Input */}
        <input
          className="form-control mb-1 fs-4"
          placeholder="insert todo here..."
          onKeyUp={onKeyUpCheck}
        />
        {/* Todos */}
        {todolist.map((element, id) => (
          <Todo
            title={element.data}
            completed={element.completed}
            key={id}
            onMoveUp={() => moveUp(id)}
            onMoveDown={() => moveDown(id)}
            onDelete={() => deleteTodo(id)}
            onMark={() => markTodo(id)}
          />
        ))}

        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">All ({todolist.length}) </span>
          <span className="text-warning">
            Pending ({todolist.filter((elem) => elem.completed == false).length}
            ){" "}
          </span>
          <span className="text-success">
            Completed (
            {todolist.filter((elem) => elem.completed == true).length})
          </span>
        </p>

        {/* Made by section */}
        <p className="text-center mt-3 ">
          made by Panthaweekan Somngam 640612093
        </p>
      </div>
      <Footer />
    </div>
  );
}
