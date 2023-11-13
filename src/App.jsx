import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { user, users } from "./constants";

const nome = "Dário Alves";

const App = () => {
  return (
    <div>
      <h1 className="shreck">
        Veterinário principal: <br /> {user.name}
      </h1>
      <Button />
      <div>
        <h3>Todos os veterinários: </h3>

        {users.map((user) => (
          <p key={user.email}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
