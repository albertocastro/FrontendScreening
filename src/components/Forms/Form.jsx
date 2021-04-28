import React, { Fragment } from "react";
import { getInput } from "./helpers";

const Form = ({ data, form, onChange,onInvalid }) => {
  return (
    <div>
      
      {Object.keys(form).map((section,i) => (
        <div key={i} className="section">
          <div className="sectionName">{section}</div>

          <div className="inputs">
            {form[section].map((input,i) => (
                <div key={i}>

                    {
                        getInput({
                            ...input,
                            value:data[input.id],
                            onChange,
                            onInvalid,
                            data
                        })
                    }
                </div>
            ))}
          </div>
        </div>
      ))}
      <div className="controls">

      <button className="btn">Submit</button>
      </div>
    </div>
  );
};

export default Form;
