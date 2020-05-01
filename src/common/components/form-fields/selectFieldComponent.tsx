import * as React from 'react';

import { FormGroup, Input, Label } from 'reactstrap';

export interface SelectFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onChange?: any;
  label: string;
  disabled?: boolean;
  options: string[];
}

const SelectFieldComponent = (props: SelectFieldProps) => {
  const {
    name,
    placeholder,
    value,
    onChange,
    label,
    disabled,
    options,
  } = props;

  return (
    <FormGroup className="floating-label-input mt-0">
      <Label for={name}>{label}</Label>
      <Input
        type="select"
        name={name}
        id={name}
        placeholder={placeholder}
        disabled={disabled || false}
        value={value}
        onChange={onChange ? onChange : () => {}}
      >
        {options.map((option: string) => {
          return <option key={option}>{option}</option>;
        })}
      </Input>
    </FormGroup>
  );
};

export default SelectFieldComponent;
