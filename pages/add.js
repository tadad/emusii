import React, { useContext } from "react";
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import KoodosLink from './components/KoodosLink';
import { AppContext } from './context/AppContext';
import styles from "../styles/Home.module.css";

const submissionSchema = Yup.object().shape({
  youtube_link: Yup.string().url('invalid link')
    .max(50, 'Too Long!')
    .required('Required'),
  youtube_emojis: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
  user_name: Yup.string().required('Required'),
  user_emojis: Yup.string().min(3, 'Too Short!').required('Required')
});

export default function Add() {
  const { contextHandleSubmit } = useContext(AppContext);

  return (
    <>
      <img src="/emusii_logo.png" alt="emusii" className={styles.logo} />
      <div className={styles.instructions} style={{ 'width':'100%' }}>
        <div className={styles.block} style={{'marginBottom': '50px'}}>
          <p>Add a song to the emusii explorer</p>
          <h1 className={styles.homeEmojis}>🎸🎤🥁🔊</h1>
        </div>
      </div>
      <Formik
        initialValues={{youtube_link: '', youtube_emojis: '', user_name: '', user_emojis: ''}}
        validationSchema={submissionSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          contextHandleSubmit(values, () => {
            resetForm();
            setSubmitting(false);
            leaveAction();
          });
      }}
      >
        {( {values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>YouTube link</Form.Label>
                  <Form.Control
                    type="text"
                    name="youtube_link"
                    placeholder="https://www.youtube.com/..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.youtube_link}
                  />
                  <p style={{'color': 'lightgray'}}>{errors.youtube_link}</p>
                </Form.Group>
                <Form.Group>
                  <Form.Label>emojis for this song</Form.Label>
                  <Form.Control
                    type="text"
                    name="youtube_emojis"
                    placeholder="🤔"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.youtube_emojis}
                  />
                  <p style={{'color': 'lightgray'}}>{errors.youtube_emojis}</p>
                </Form.Group>
                <Form.Group>
                  <Form.Label>your name/Twitter handle (to give you cred)</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder="xX_John_Doe_Xx"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.user_name}
                  />
                  <p style={{'color': 'lightgray'}}>{errors.user_name}</p>
                </Form.Group>
                <Form.Group>
                  <Form.Label>3 emojis that represent you</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_emojis"
                    placeholder="🤔🤔🤔"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.user_emojis}
                  />
                  <p style={{'color': 'lightgray'}}>{errors.user_emojis}</p>
                </Form.Group>
                <Button type="submit" className={styles.startButton} disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
        )}
      </Formik>
      <KoodosLink />
    </>
  );
}
