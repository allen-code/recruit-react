import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withFormik, FormikProps, Form } from 'formik';
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

const CardForm = (props: FormikProps<CardFormValueProps>) => {

  const errorClass = (error: string) => error.length === 0 ? '' : 'has-error';

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = props;

    return (
        <Form>
          <h2>Please fill in credit card details</h2>
         <div>
           <label htmlFor='ccNumber'>Credit card number</label>
           <Input
            name='ccNumber'
            placeholder='10 digit credit card'
            value={values.ccCardNumber}
            onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor='cvc'>CVV number</label>
          <Input
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
        ccCardNumber: Yup.number().test('len', 'Must be valid card number with 10 digits', val => val.toString().length === 10).required(),
        cvc: Yup.number().test('len', 'Must be valid cvc number with 3 digits', val => val.toString().length === 3).required(),
        expiryDate: Yup.date().required()
    }),

    handleSubmit(
        { ccCardNumber, cvc, expiryDate }: CardFormValueProps,
        { props, setErrors }
    ) {
        log(ccCardNumber, cvc, expiryDate);
    }
})(CardForm);

export default FormikCardForm;
