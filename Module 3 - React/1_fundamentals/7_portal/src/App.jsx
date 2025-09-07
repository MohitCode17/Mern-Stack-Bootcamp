import { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <h1>React Portals Example</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default App;
