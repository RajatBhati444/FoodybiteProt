import {useState} from 'react';

function useForm() {
  const [form, setForm] = useState({});

  function updateForm(key, value) {
    const tempForm = {...form};
    tempForm[key] = value;
    setForm(tempForm);
  }

  return {form, updateForm, setForm};
}

export default useForm;
