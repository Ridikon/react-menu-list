import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import { postCategory } from '../../actions/categoriesActions';

const CategoryForm = ({postCategory}) => {
  const validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    } else if (values.title.length > 15) {
      errors.title = 'Must be 15 characters or less';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: ''
    },
    validate,
    onSubmit: ({title}, {resetForm}) => {
      let data = {
        id: Math.floor(Math.random() * 10000),
        title,
        positions: []
      };
      postCategory(data);
      resetForm({})
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Category title</label>
      <Input
        id="title"
        name="title"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder="Type category name"
      />

      {formik.errors.title && <div className={''}>{formik.errors.title}</div>}

      <Button type="submit" size="small" typeColor="success" disabled={!formik.values.title}>Create</Button>
    </form>
  );
};

const mapDispatchToProps = {
  postCategory
};

export default connect(null, mapDispatchToProps)(CategoryForm);
