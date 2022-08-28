import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValue, setValues] = useState('');

  const reset = () => {
    setValues('');
  };

  const handleInputChangeName = ({ target }) => {
    setValues({
      ...formValue,
      [target.name]: target.value,
    });
  };

  return { formValue, handleInputChangeName, reset };
};
