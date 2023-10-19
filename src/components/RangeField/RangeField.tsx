import { Fields, Option } from "../../types";
import s from "./styles.module.css";
import Select from "react-select";

interface Props {
  onChange: (name: Fields, field: Option | null) => void;
  nameFrom: Fields;
  nameTo: Fields;
  placeholders?: {
    from: string;
    to: string;
  };
  options: Option[];
}

export const RangeField: React.FC<Props> = ({
  onChange,
  nameFrom,
  nameTo,
  placeholders,
  options,
}) => {
  return (
    <div className={s.container}>
      <Select
        placeholder={placeholders?.from}
        className={s.select}
        required
        isSearchable
        name={nameFrom}
        options={options}
        onChange={(field) => onChange(nameFrom, field)}
      />

      <Select
        placeholder={placeholders?.to}
        className={s.select}
        required
        isSearchable
        name={nameTo}
        options={[options[0], ...options.slice(1).reverse()]}
        onChange={(field) => onChange(nameTo, field)}
      />
    </div>
  );
};
