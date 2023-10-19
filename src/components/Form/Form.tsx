import {
  BRANDS_OPTIONS,
  CITIES_OPTIONS,
  PLACEHOLDERS,
  PRICE_OPTIONS,
  YEARS_OPTIONS,
} from "../../constats";
import { useForm, SubmitHandler } from "react-hook-form";
import { Fields, IFormInputs, Option } from "../../types";
import Select from "react-select";
import s from "./styles.module.css";
import { useState } from "react";
import { BRANDS_MODELS } from "../../data";
import { RangeField } from "..";

interface Props {
  onSubmit: SubmitHandler<IFormInputs>;
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const [modelOptions, setmodelOptions] = useState<Option[]>([]);
  const { handleSubmit, setValue } = useForm<IFormInputs>({
    defaultValues: { city: "", brand: "" },
  });
  const onChange = (name: Fields, field: Option | null) => {
    if (!field) return;

    setValue(name, field.value);

    if (name === "brand")
      setmodelOptions([
        { label: "Все модели", value: "" },
        ...BRANDS_MODELS[field.value].map((item) => ({
          label: item,
          value: item,
        })),
      ]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        placeholder={PLACEHOLDERS.city}
        className={s.select}
        required
        autoFocus
        isSearchable
        name="city"
        options={CITIES_OPTIONS}
        onChange={(field) => onChange("city", field)}
      />
      <Select
        placeholder={PLACEHOLDERS.brand}
        className={s.select}
        required
        isSearchable
        name="brand"
        options={BRANDS_OPTIONS}
        onChange={(field) => onChange("brand", field)}
      />
      <Select
        placeholder={PLACEHOLDERS.model}
        className={s.select}
        required
        isSearchable
        name="model"
        options={modelOptions}
        onChange={(field) => onChange("model", field)}
      />

      <RangeField
        onChange={onChange}
        nameFrom="yearFrom"
        nameTo="yearTo"
        options={YEARS_OPTIONS}
        placeholders={{ from: PLACEHOLDERS.yearFrom, to: PLACEHOLDERS.yearTo }}
      />

      <RangeField
        onChange={onChange}
        nameFrom="priceFrom"
        nameTo="priceTo"
        options={PRICE_OPTIONS}
        placeholders={{
          from: PLACEHOLDERS.priceFrom,
          to: PLACEHOLDERS.priceTo,
        }}
      />

      <button
        type="submit"
        style={{
          padding: 10,
          borderRadius: 50,
          width: "100%",
          cursor: "pointer",
        }}
      >
        Создать поиск
      </button>
    </form>
  );
};
