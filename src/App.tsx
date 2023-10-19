import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components";
import { TITLE } from "./constats";
import { useTelegram } from "./hooks";
import { SubmitHandler } from "react-hook-form";
import { IFormInputs } from "./types";

function App() {
  const [error, seterror] = useState<any>(null);
  const tg = useTelegram();

  useEffect(() => {
    tg.MainButton.show();
    tg.MainButton.setParams({ text: "Создать", is_active: true });
    tg.onEvent("mainButtonClicked", onSubmit);

    return () => {
      tg.offEvent("mainButtonClicked", onSubmit);
    };
  }, []);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    try {
      tg.sendData(JSON.stringify(data));
      tg.close();
    } catch (error) {
      seterror(error);
    }
  };
  return (
    <>
      <h1 style={{ marginBottom: 30 }}>{TITLE}</h1>
      {error ? (
        <p style={{ color: "red", marginBottom: 30 }}>Что-то пошло не так</p>
      ) : null}
      <Form onSubmit={onSubmit} />
    </>
  );
}

export default App;
