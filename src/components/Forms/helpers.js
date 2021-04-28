import { FormCheckBox, FormInput, FormSelect } from "./inputs";
const supportedTypes = {
  INPUT: "text",
  CHECKBOX: "checkbox",
  SELECT: "select",
  NUMBER: "number",
};

export const getInput = (input) => {
  const { INPUT, CHECKBOX, SELECT,NUMBER } = supportedTypes;
  switch (input.type) {
    case INPUT: {
      return <FormInput {...input} />;
    }
    case CHECKBOX: {
      return <FormCheckBox {...input} />;
    }
    case SELECT: {
      return <FormSelect {...input} />;
    }
    case NUMBER: {
      return <FormInput {...input} />;
    }
    default: {
      return <div>No Component supported {input.type}</div>;
    }
  }
};
