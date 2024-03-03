import css from './SearchBar.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoSearch } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  return (
    <div className={css.formik} >
      <Formik initialValues={{ query:'' }}
        validate={(values) =>{
          const errors = {};
            if (!values.query.trim()) {
              toast.error('Please enter a search query!');
            }
              return errors;
        }}
          onSubmit={(values, actions) => {
            onSearch(values.query);
            actions.resetForm();
          }}>
        <Form>
          <div className={css.searchBar} >
            <button type='submit' 
              className={css.btn}
            ><IoSearch /></button>
            <Field className={css.input} 
              name="query" 
              placeholder="Search images and photos" />
          </div>
          <ErrorMessage name='query'>
            <Toaster position='top-center' />
          </ ErrorMessage>     
        </Form>
      </Formik>
    </div>
  );
};