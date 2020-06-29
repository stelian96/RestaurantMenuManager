import { useFormikContext, Field, ErrorMessage, getIn } from "formik";
import React from "react";
import "./InputFields.css";

interface InputFieldsProps {
  type: string;
  name: string;
  label: string;
  displayAs?: string;
}

export function InputFields({type, name, label, displayAs }: InputFieldsProps) {
  const props = useFormikContext();
  const error = getIn(props.errors, name);
  const touched = getIn(props.touched, name);
  let classes = displayAs === "textarea" ? "materialize-textarea " : "";
  classes += error && touched ? "invalid" : "valid";
  return (
    <div className="input-field">
      <label
        className={error && touched ? "active field-error" : "active"}
        htmlFor={name}
      >
        {label}
      </label>
      <Field type={type} as={displayAs} className={classes} name={name} />
      <ErrorMessage className="field-error" name={name} component="div" />
    </div>
  );
}
