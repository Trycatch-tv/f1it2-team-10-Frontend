import { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const database = [
      {
        username: "user1",
        password: "pass1",
        nombre: "user1",
        fecha: "01/01/2023",
        hora: "10:50",
        duracion: "1",
        detalles: "incompleted"
      },
      {
        username: "user2",
        password: "pass2",
        nombre: "user2",
        fecha: "02/01/2023",
        hora: "11:50",
        duracion: "2",
        detalles: "completed"
      }
    ];
  
    const errors = {
      uname: "Invalid username",
      pass: "Invalid password"
    };
  
    const handleSignIn = (event) => {
      event.preventDefault();
  
      const { uname, pass } = event.target.elements;
  
      const userData = database.find((user) => user.username === uname.value);
  
      if (userData) {
        if (userData.password !== pass.value) {
          setErrorMessages({ pass: errors.pass });
        } else {
          setIsLoggedIn(true);
          navigate("/menu");
        }
      } else {
        setErrorMessages({ uname: errors.uname });
      }
    };
  
    const renderErrorMessage = (name) =>
      name in errorMessages && <div className="error">{errorMessages[name]}</div>;
  
    const renderLogin = (
      <div className="form">
        <form onSubmit={handleSignIn}>
          <div className="input-container">
            <label htmlFor="uname">Username </label>
            <input type="text" name="uname" id="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label htmlFor="pass">Password </label>
            <input type="password" name="pass" id="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <button type="submit" className="ov-btn-grow-ellipse">Sign In</button>
          </div>
        </form>
      </div>
    );
  
    if (!isLoggedIn) {
      return (
        <div className="app">
          <div className="login-form">
            <div className="title">LogIn</div>
            {renderLogin}
          </div>
        </div>
      );
    }
}
    
export default Login;
