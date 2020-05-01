import * as React from 'react';

import { Field } from 'formik';
import { FormGroup, Input, Label } from 'reactstrap';

import FormFeedbackComponent from '../formFeedbackComponent';

export interface TextFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onChange?: any;
  label: string;
  disabled?: boolean;
  errors?: any;
  touched?: any;
  type?: 'text' | 'password';
  isTagRequired: boolean;
  onBlur?: (event: any) => any;
}

const TextFieldComponent = (props: TextFieldProps) => {
  const {
    name,
    placeholder,
    value,
    onChange,
    label,
    disabled,
    errors,
    touched,
    type,
    isTagRequired,
    onBlur,
  } = props;

  return (
    <FormGroup className="floating-label-input mt-3">
      <Input
        type={type || 'text'}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? onChange : () => {}}
        onBlur={onBlur ? onBlur : () => {}}
        disabled={disabled || false}
        invalid={(errors && errors[name] && touched && touched[name]) || false}
        tag={isTagRequired ? Field : null}
      />
      <FormFeedbackComponent
        errors={errors && errors[name]}
        touched={touched && touched[name]}
      />

      <Label className="form-label" for={name}>
        {label}
      </Label>
    </FormGroup>
  );
};

export default TextFieldComponent;
