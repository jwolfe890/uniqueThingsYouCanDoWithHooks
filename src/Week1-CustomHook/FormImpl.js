import React, { useEffect } from "react";
import { useForm } from "./useForm";

function FormImpl() {
  const [values, handleChange] = useForm({ email: "", password: "" });

  useEffect(() => {
    console.log("render");

    return () => {
      console.log("wont run");
    };
  }, []);

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormImpl;
