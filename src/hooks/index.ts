import { useEffect } from "react";

export function useTelegram() {
  //@ts-ignore
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.expand();
  }, []);

  return tg;
}
