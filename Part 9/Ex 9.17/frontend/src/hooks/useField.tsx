import { useState } from "react";
const useField = (type: string, select?: string[]) => {
  const [value, setValue] = useState(select ? select[0] : "");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const options: JSX.Element[] | undefined = select?.map((o, i) => (
    <option value={o} key={i}>
      {o}
    </option>
  ));

  return select
    ? {
        value,
        onChange,
        options,
      }
    : {
        type,
        value,
        onChange,
      };
};

export default useField;
