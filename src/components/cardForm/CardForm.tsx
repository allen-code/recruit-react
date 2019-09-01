import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withFormik, FormikProps, Form, Field } from 'formik';
import * as Yup from 'yup';


/***************
 *   HELPERS   *
 ***************/
const log = console.log;

/***************
 *  INTERFACE  *
 ***************/
interface CardFormValueProps {
  ccCardNumber?: string;
  cvc?: string;
  expiryDate?: any;
};

interface CardFormInitialValueProps {
  ccCardNumber?: string;
  cvc?: string;
  expiryDate?: any;
};

const CardForm = ({
        values,
        errors,
        handleChange
    }: FormikProps<CardFormValueProps>) => {
    return (
      <Form>
        <h2>Please fill in credit card details</h2>
        <div>
          <label htmlFor='ccCardNumber'>Credit card number</label>
          <Field
            name='ccCardNumber'
            placeholder='10 digit credit card'
            value={values.ccCardNumber}
            onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor='cvc'>CVV number</label>
          <Field
            name='cvc'
            placeholder='Three digits'
            value={values.cvc}
            onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor='expiryDate'>Expiry date</label>
          <TextField
            id='expiryDate'
            name='expiryDate'
            label='expiry date'
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <Button variant='outlined' color='primary' type='submit' className='btn btn-custom'>Submit</Button>
        </Form>
    );
};

const FormikCardForm = withFormik<CardFormInitialValueProps, CardFormValueProps>({
    mapPropsToValues: props => ({
        ccCardNumber: props.ccCardNumber || '',
        cvc: props.cvc || '',
        expiryDate: props.expiryDate || null
    }),

    validationSchema: Yup.object().shape({
        ccCardNumber: Yup.number().min(0, 'Minimal value 0')
                        .max(10, 'Maximum value 10').required('Must be valid card number'),
        cvc: Yup.number().min(0, 'Minimal value 0')
                        .max(3, 'Maximum value 3').required('Must be valid cvc number'),
        expiryDate: Yup.date().required()
    }),
    

    handleSubmit(
        { ccCardNumber, cvc, expiryDate }: CardFormValueProps,
        { props, setErrors }
    ) {
        log('handleSubmit ', ccCardNumber, cvc, expiryDate);
    }
})(CardForm);

export default FormikCardForm;
