import * as React from 'react';

export interface FormFeedbackProps {
  errors: string;
  touched: boolean;
}

const FormFeedbackComponent = (props: FormFeedbackProps) => {
  const { errors, touched } = props;

  return errors && touched ? (
    <div className="input-feedback">{errors}</div>
  ) : null;
};

export default FormFeedbackComponent;
