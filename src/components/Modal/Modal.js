import React from 'react';
import classNames from 'classnames'
import { useFormik } from 'formik';

import classes from './Modal.module.scss';
import Input from '../UI/Input';
import Button from '../UI/Button';
import ElementPosition from '../../hoc/ElementPosition';

const Modal = ({ isOpen, closeModal, addPosition }) => {
  let cls = classNames({
    [classes.isOpen]: isOpen
  });

  const validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    } else if (values.title.length > 15) {
      errors.title = 'Must be 15 characters or less';
    }

    if (!values.coast) {
      errors.coast = 'Required';
    } else if (values.coast < 5) {
      errors.coast = 'Min coast is 5';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      coast: '0'
    },
    validate,
    onSubmit: ({ title, coast }, { resetForm }) => {
      let data = {
        id: Math.floor(Math.random() * 10000),
        title,
        coast
      };
      addPosition(data);
      resetForm({});
      closeModal()
    }
  });

  const isDisabled = () => {
    return !formik.values.coast || !formik.values.title || !!formik.errors.title || !!formik.errors.coast;
  };

  return (
    <div className={`${classes.modal} ${cls}`}>
      <div className={classes.modalBody}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="title">Category title</label>
            <Input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
              placeholder="Type category name"
            />
          </div>

          {formik.errors.title && (<div className={''}>{formik.errors.title}</div>)}

          <div>
            <label htmlFor="coast">Coast</label>
            <Input
              id="coast"
              name="coast"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.coast}
              placeholder="Type coast"
            />
          </div>

          {formik.errors.coast && (<div className={''}>{formik.errors.coast}</div>)}

          <Button type="submit" size="small" typeColor="success" disabled={isDisabled()}>Create</Button>

          <ElementPosition hEnd={true}>
            <Button onClick={closeModal} size="small" typeColor="success">Close</Button>
          </ElementPosition>
        </form>
      </div>
    </div>
  );
};

export default Modal;
