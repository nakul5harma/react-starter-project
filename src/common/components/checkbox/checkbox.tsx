import * as React from 'react';
import { CustomInput } from 'reactstrap';

interface Props {
  id: string;
  label: string;
  isChecked?: boolean;
  onChange: (item: any) => any;
}

export const CheckBox = (props: Props) => {
  return (
    <React.Fragment>
      <CustomInput
        type="checkbox"
        id={props.id}
        label={props.label}
        inline
        checked={props.isChecked}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
};
