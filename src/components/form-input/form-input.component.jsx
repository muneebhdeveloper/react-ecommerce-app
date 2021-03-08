import React from "react";
import "./form-input.styles.scss";

const FormInput = (label, handleChange, ...otherProps) => (
  <div className="form-group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
        label ? (<label></label>)
    }
  </div>
);
