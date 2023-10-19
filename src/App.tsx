import "./App.css";
import { Form } from "./components";
import { TITLE } from "./constats";

function App() {
  return (
    <>
      <h1 style={{ marginBottom: 30 }}>{TITLE}</h1>
      <Form />
    </>
  );
}

export default App;
