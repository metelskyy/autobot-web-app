import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components";
import { TITLE } from "./constats";
import { useTelegram } from "./hooks";
import { SubmitHandler } from "react-hook-form";
import { IFormInputs } from "./types";

function App() {
  const [error, seterror] = useState(false);
  const tg = useTelegram();

  useEffect(() => {
    tg.MainButton.show();
    tg.MainButton.setParams({ text: "Создать", is_active: true });
    tg.MainButton.onClick(onSubmit);
  }, []);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    try {
      tg.sendData(data);
      tg.close();
    } catch (error) {
      seterror(true);
    }
  };
  return (
    <>
      <h1 style={{ marginBottom: 30 }}>{TITLE}</h1>
      {error && (
        <p style={{ color: "red", marginBottom: 30 }}>Что-то пошло не так</p>
      )}
      <Form onSubmit={onSubmit} />
    </>
  );
}

export default App;
