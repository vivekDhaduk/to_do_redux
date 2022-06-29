import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TODO,
  REMOVE_ALL_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  UNCOMPLETE_TODO,
  DELETE_COMPLETED_TODO,
} from "./Actions";

function App() {
  const data = useSelector((state) => {
    return state.todolist.todos;
  });
  const completeddata = useSelector((state) => {
    return state.todolist.completed_todos;
  });
  // console.log(completeddata);
  const [todo, setTodo] = useState();
  const [updatebtn, setUpdatebtn] = useState(false);
  const [updateid, setUpadateid] = useState();
  const [completed, setCompleted] = useState(true);
  const dispatch = useDispatch();

  function addTodod() {
    const id = Date.now().toString();

    const items = {
      id: id,
      item: todo,
    };

    dispatch(ADD_TODO(items));
    setTodo("");
  }

  function removeall() {
    dispatch(REMOVE_ALL_TODO());
  }

  function deletetodo(id) {
    dispatch(DELETE_TODO(id));
  }
  function deletecompletedtodo(id) {
    dispatch(DELETE_COMPLETED_TODO(id));
  }

  function edittodo(id, item) {
    setUpadateid(id);
    setTodo(item);
    setUpdatebtn(true);
  }
  function updatetodo() {
    const updateditems = {
      id: updateid,
      item: todo,
    };
    // console.log("clicked");
    // console.log(updateditems);
    setTodo("");
    setUpdatebtn(false);
    dispatch(EDIT_TODO(updateditems));
  }

  function completetodo(id, item) {
    const completedtodo = {
      id: id,
      item: item,
    };
    dispatch(COMPLETE_TODO(completedtodo));
  }
  function uncompletetodo(id, item) {
    const uncompletedtodo = {
      id: id,
      item: item,
    };
    dispatch(UNCOMPLETE_TODO(uncompletedtodo));
  }

  return (
    <div className="App">
      <div className="bird-container bird-container--one">
        <div className="bird bird--one"></div>
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two"></div>
      </div>

      <div className="bird-container bird-container--three">
        <div className="bird bird--three"></div>
      </div>

      <div className="bird-container bird-container--four">
        <div className="bird bird--four"></div>
      </div>
      <div className="container">
        <div className="inserttodo">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          {updatebtn ? (
            <button className="button" onClick={updatetodo}>
              Update
            </button>
          ) : (
            <button className="button" onClick={addTodod}>
              <i className="fa fa-plus"></i> Add
            </button>
          )}
        </div>
        <div className="list">
          <ul>
            {data.map((t) => {
              return (
                <li key={t.id}>
                  <input
                    type="checkbox"
                    onClick={() => {
                      completetodo(t.id, t.item);
                    }}
                  />
                  <h3 className="todos">{t.item} </h3>

                  <button
                    className="button"
                    onClick={() => {
                      edittodo(t.id, t.item);
                    }}
                  >
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </button>
                  <button
                    className="buttondelete"
                    onClick={() => {
                      deletetodo(t.id);
                    }}
                  >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="remove">
          <div >
            <button onClick={removeall} className="button">
              <i className="fa fa-trash-o" aria-hidden="true"></i> All
            </button>
          </div>
          <div className="butoongropu">
            {completed ? (
              <button
                className="button"
                onClick={() => {
                  setCompleted(false);
                }}
              >
                hidecompleted
              </button>
            ) : (
              <button
                className="button"
                onClick={() => {
                  setCompleted(true);
                }}
              >
                showcompleted
              </button>
            )}
          </div>
        </div>
        {completed ? (
          <div className="completed">
            <ul>
              {completeddata.map((c) => {
                return (
                  <li key={c.id}>
                    <input
                      type="checkbox"
                      defaultChecked
                      onClick={() => {
                        uncompletetodo(c.id, c.item);
                      }}
                    />
                    <h3
                      className="completedtodos"
                      style={{ textDecoration: "line-through" }}
                    >
                      {c.item}
                    </h3>
                    <button
                      className="button"
                      onClick={() => {
                        deletecompletedtodo(c.id);
                      }}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
