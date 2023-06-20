import { useReducer } from "react";
import "./App.css";
import "./Theme.css";
const initialToolse = {
  name: "baker dnl",
  age: 28,
  startCount: 0,
  theme: "light",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };

    case "CHANGE_COUNT":
      return { ...state, startCount: action.newValue };

    case "CHANGE_COLOR":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

function App() {
  const [allData, dispatch] = useReducer(reducer, initialToolse);
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <div className={`App ${allData.theme} `}>
      <button
        style={{ marginBottom: "44px" }}
        onClick={() => {
          dispatch({
            type: "CHANGE_COLOR",
            newValue: allData.theme == "light" ? "dark" : "light",
          });
        }}
      >
        toggle theme
      </button>

      <div
        onChange={() => {
          dispatch({
            type: "CHANGE_COLOR",
            newValue: allData.theme == "light" ? "dark" : "light",
          });
        }}
        className="btn-container"
      >
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button
          style={{ marginRight: "26px" }}
          onClick={() => {
            dispatch({ type: "CHANGE_COLOR", newValue: "dark" });
          }}
        >
          dark
        </button>
        <button
          style={{ marginRight: "26px" }}
          onClick={() => {
            dispatch({ type: "CHANGE_COLOR", newValue: "red" });
          }}
        >
          red
        </button>
        <button
          style={{ marginRight: "26px" }}
          onClick={() => {
            dispatch({ type: "CHANGE_COLOR", newValue: "orange" });
          }}
        >
          orange
        </button>
        <button
          style={{ marginRight: "26px" }}
          onClick={() => {
            dispatch({ type: "CHANGE_COLOR", newValue: "blue" });
          }}
        >
          blue
        </button>
      </div>

      <h1>count is {allData.startCount} </h1>
      <button
        onClick={() => {
          dispatch({
            type: "CHANGE_COUNT",
            newValue: (allData.startCount += 10),
          });
        }}
      >
        click me
      </button>

      <h1>my name is {allData.name} </h1>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_NAME", newValue: "khaled dnl" });
        }}
      >
        click me
      </button>

      <h2>my age is {allData.age} </h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_AGE", newValue: 33 });
        }}
      >
        click me
      </button>
    </div>
  );
}

export default App;
