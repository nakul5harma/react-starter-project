import * as React from 'react';

import { Input, Label, FormGroup, FormFeedback } from 'reactstrap';

interface Props {
  id: string;
  label: string;
  type?: string;
  className?: string;
  placeholder: string;
  onChange?: any;
  value?: string;
  style?: any;
  name?: string;
  isInvalid?: boolean;
}

export const TextInput = (props: Props) => {
  return (
    <React.Fragment>
      <FormGroup className="floating-label-input mb-2">
        <Input
          type="text"
          name="name"
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
          invalid={props.isInvalid}
          value={props.value}
        />

        <Label className="form-label" for="name">
          {props.label}
        </Label>

        {props.isInvalid && (
          <FormFeedback>{props.label} is Mandatory</FormFeedback>
        )}
      </FormGroup>
    </React.Fragment>
  );
};
