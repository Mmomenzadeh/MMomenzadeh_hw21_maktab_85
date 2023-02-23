import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app"> 
      {showModal ? <Modal setShowModal={setShowModal}/> : null}
      <Form />
      <ContactList setShowModal={setShowModal} />
    </div>
  );
}

export default App;
