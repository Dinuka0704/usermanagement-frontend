import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  // const [count, setCount] = useState(0);

  return (
    <div>
      <header className="App-header">
        <h1>Welcome to User Management</h1>
        <button className="users-button" onClick={() => navigate("./users")}>Users</button>
      </header>
    </div>
  );
}

export default App;
