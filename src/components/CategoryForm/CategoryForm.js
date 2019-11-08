import React from 'react';
import { useFormik } from 'formik';
import Button from '../UI/Button';
import Input from '../UI/Input';

const CategoryForm = () => {
  const validate = values => {
    const errors = {};
    if (!values.categoryName) {
      errors.categoryName = 'Required';
    } else if (values.categoryName.length > 15) {
      errors.categoryName = 'Must be 15 characters or less';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      categoryName: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="categoryName">Category name</label>
      <Input
        id="categoryName"
        name="categoryName"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.categoryName}
        placeholder="Type category name"
      />

      {formik.errors.categoryName && <div className={''}>{formik.errors.categoryName}</div>}

      <Button size="small" type="success" disabled={!formik.values.categoryName}>Create</Button>
    </form>
  );
};

export default CategoryForm;
