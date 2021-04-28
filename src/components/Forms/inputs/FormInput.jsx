import { useEffect, useState } from "react";

const FormInput = ({
  label,
  id,
  dependencies,
  onInvalid,
  definition,
  data,
  mask,
  ...rest
}) => {
  const { value = "", onChange } = rest;
  const [hide, setHide] = useState(false);
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    if (!value) {
      onChange(id, "");
    }
  }, []);
  const handlerChange = (e) => {
    const {
      target: { id, value },
    } = e;
    onChange(id, value);
  };
  useEffect(() => {
    if (dependencies) {
      let result = true;
      Object.keys(dependencies).map((dependency) => {
        if (result === false) return null;
        if (dependencies[dependency] instanceof Function) {
          result = !!dependencies[dependency](data[dependency]);
        } else {
          result = data[dependency] === dependencies[dependency];
        }
      });
      setHide(!result);
    }
  }, [data]);
  const handlerBlur = () => {
    if (mask && rest.value) {
      setIsValid(rest.value.match(mask));
      onInvalid(id, true);
    }
  };
  if (hide) return null;

  return (
    <div className={`baseInput ${isValid ? "" : "invalid"}`} title={definition}>
      <label>
        {label} {!isValid && "!"}
      </label>

      <input
        id={id}
        key={id}
        {...rest}
        onChange={handlerChange}
        onBlur={handlerBlur}
      />
    </div>
  );
};

export default FormInput;
