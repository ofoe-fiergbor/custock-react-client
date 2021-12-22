import React from "react";
import { useFormikContext } from "formik";

const Input = ({ label = "Label", type = "text", name, value }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { handleBlur, handleChange } = useFormikContext();

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group">
        <input
          name={name}
          type={showPassword ? "text" : type}
          value={value}
          onBlur={handleBlur}
          onChange={handleChange}
          className="form-control"
        />
        {type === "password" && (
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="input-group-text"
            id="inputGroupPrepend"
          >
            !
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;

/*
form type ==> | 'button'
| 'checkbox'
| 'color'
| 'date'
| 'datetime-local'
| 'email'
| 'file'
| 'hidden'
| 'image'
| 'month'
| 'number'
| 'password'
| 'radio'
| 'range'
| 'reset'
| 'search'
| 'submit'
| 'tel'
| 'text'
| 'time'
| 'url'
| 'week'

*/
