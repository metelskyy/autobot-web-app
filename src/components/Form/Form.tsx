import { useEffect } from "react";
import Select from "react-select";
import { BRANDS_OPTIONS, CITIES_OPTIONS } from "../../constats";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTelegram } from "../../hooks";

interface IFormInputs {
  city: string;
  brand: string;
}

type Fields = keyof IFormInputs;

export const Form = () => {
  const { handleSubmit, setValue } = useForm<IFormInputs>({
    defaultValues: { city: "", brand: "" },
  });

  const tg = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({ text: "Создать" });
    tg.MainButton.onClick(onSubmit);
  }, []);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    tg.sendData(data);
  };

  const onChange = (
    name: Fields,
    field: {
      value: string;
      label: string;
    } | null
  ) => {
    if (!field) return;
    setValue(name, field.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        required
        autoFocus
        isSearchable
        name="city"
        options={CITIES_OPTIONS}
        onChange={(field) => onChange("city", field)}
      />
      <Select
        required
        isSearchable
        name="brand"
        options={BRANDS_OPTIONS}
        onChange={(field) => onChange("brand", field)}
      />
    </form>
  );
};
