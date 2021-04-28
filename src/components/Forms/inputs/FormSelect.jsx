import { useState,useEffect} from "react";

const FormSelect = ({ label, sourceList,data,dependencies, id, ...rest }) => {
    const [hide, setHide] = useState(false);
    const handlerChange = (e) => {
    const {
      target: { value, id },
    } = e;
    const newValue = sourceList[value];
    rest.onChange(id, newValue);
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

    if (hide) return null;

  return (
    <div className="baseInput">
      <label>{label}</label>

      <select
        id={id}
        value={sourceList.indexOf(rest.value)}
        onChange={handlerChange}
      >
        <option key="null" value={null}>
          Select an Option
        </option>
        {sourceList.map((option, i) => {
          if (option.name && option.code)
            return (
              <option key={option.code} value={i}>
                {option.name}
              </option>
            );

          return (
            <option key={option} value={i}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
