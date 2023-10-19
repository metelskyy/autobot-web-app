import Select from "react-select";
import { BRANDS_OPTIONS, CITIES_OPTIONS } from "../../constats";
import { useForm, SubmitHandler } from "react-hook-form";
import { Fields, IFormInputs } from "../../types";

interface Props {
  onSubmit: SubmitHandler<IFormInputs>;
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const { handleSubmit, setValue } = useForm<IFormInputs>({
    defaultValues: { city: "", brand: "" },
  });

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
