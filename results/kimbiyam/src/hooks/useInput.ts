import { ChangeEvent, useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  return [value, onChange] as const;
};

export default useInput;
