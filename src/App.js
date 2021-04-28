import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Forms/Form";
import form from "./data/data";
function App() {
  const [formState, setFormState] = useState(null);
  const [invalidFormState, setInvalidFormState] = useState({});
  useEffect(() => {
    // setFormState({})
    let newFormState = {};
    Object.keys(form).map((section) => {
      form[section].map((input) => (newFormState[input.id] = ""));
    });
    setFormState(newFormState);
  }, []);
  const handlerChange = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };
  const handlerInvalid = (id, isInvalid) => {
    let newInvalidForm = { ...invalidFormState };
    if (isInvalid) {
      newInvalidForm[id] = true;
    } else if (newInvalidForm[id]) {
      delete newInvalidForm[id];
    }
    setInvalidFormState(newInvalidForm);
  };
  if (!formState) return <div>Loading</div>;

  const remaining = Object.keys(formState).reduce(
    (a, b) => (!formState[b] ? a + 1 : a),
    0
  ) + Object.keys(invalidFormState).length
  return (
    <div className="App">
      <pre>
        {remaining}
        {JSON.stringify(formState)}
      </pre>
      <Form
        data={formState}
        form={form}
        onChange={handlerChange}
        onInvalid={handlerInvalid}
      />
    </div>
  );
}

export default App;
