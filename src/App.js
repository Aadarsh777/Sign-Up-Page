import React, { useState } from "react";
import "./App.css"

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [borderEmail, setBorderEmail] = useState("")
  const [borderPassword, setBorderPassword] = useState("")
  const [pEmail, setPEmail] = useState("")
  const [pPassword, setPPassword] = useState("")

  function handleChange(event){
    return setEmail(event.target.value)
  }

  function handleChange2(event) {
    return setPassword(event.target.value)
  }

  function handleSubmit(event) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(event);
    event.preventDefault();
    if (event.target[0].defaultValue.length <= 0 || !re.test(event.target[0].defaultValue)){
      setBorderEmail("2px solid #ff0000");
      setPEmail("❗ email must be in format abc@gmail.com")
    }else if (event.target[1].value.length < 8) {
      setBorderPassword("2px solid #ff0000");
      setPPassword("❗ password must be of 8 characters")
    }
  }

  return (
    <div className="App">
      <div className="sign_up">
        <h1 className="heading">SignUp Page</h1>
          <form onSubmit={handleSubmit} className="app_form">
            <input style={{border: borderEmail}} onChange={handleChange} className="app_input" type="text" placeholder="Email" value={email} />
            <p className="invalid_email">{pEmail}</p>
            <input style={{border: borderPassword}} onChange={handleChange2} className="app_input" type="password" placeholder="Password" value={password} />
            <p className="invalid_password">{pPassword}</p>
            <button className="app_button" type="submit">Submit</button>
          </form>
      </div>
    </div>
  );
}

export default App;
