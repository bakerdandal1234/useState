import { useState } from "react";
import "./App.css";
import './Theme.css'

function App() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("baker dnl");
  let [age, setAge] = useState(28);
  let [theme,setTheme]=useState("")
  const changeAge = () => setCount(count++);
  return (
    <div className={`App ${theme}`}>
      <button style={{marginBottom:"44px"}} onClick={() => {
  setTheme(theme==""? "dark":"")
}}>toggle theme</button>



<div onChange={() => {
  setTheme(theme==""? "dark":"")
}} className="btn-container">
  <i className="fa fa-sun-o" aria-hidden="true" />
  <label className="switch btn-color-mode-switch">
    <input type="checkbox" name="color_mode" id="color_mode" defaultValue={1} />
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
<button style={{marginRight:"26px"}} onClick={() => {
  setTheme("dark")
}}>dark</button>
<button style={{marginRight:"26px"}} onClick={() => {
  setTheme("red")
}}>red</button>
<button style={{marginRight:"26px"}} onClick={() => {
  setTheme("orange")
}}>orange</button>
<button style={{marginRight:"26px"}} onClick={() => {
  setTheme("blue")
}}>blue</button></div>
      <h1>count is {count}</h1>
      <button onClick={changeAge}>click me</button>
      <h1>my name is {name}</h1>
      <button
        onClick={() => {
          setName("zakariya dnl");
        }}
      >
        click me
      </button>
      <h2>my age is {age}</h2>
      <button
        onClick={() => {
          setAge(33);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default App;
