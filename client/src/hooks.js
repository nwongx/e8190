import { useState, useEffect } from "react";

export const useFormData = (
  inputs,
  onSubmit,
) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData({
      onSubmit,
      inputs
    })

  }, [inputs, onSubmit])

  return formData;
}