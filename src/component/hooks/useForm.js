import React, { useState } from "react";

const handleOnChange = ({ e, form, setForm }) => {
  let { name, value } = e.target;

  setForm({
    ...form,
    [name]: value,
  });
};

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  return {
    form,
    setForm,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};

export default useForm;
