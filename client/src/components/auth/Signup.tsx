import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Segment, Grid, Header, Message, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { Formik, useFormik, FormikHelpers, Field } from "formik"; 
import * as Yup from "yup"; 
import { Form, Input, SubmitButton, ResetButton } from 'formik-semantic-ui-react';
import axios from "axios"; 
import { register } from "../../api/auth-api";

interface FormValues {
  email: string,
  username: string, 
  password: string,
  // cpassword: string,
}

const Signup: React.FC<{}> = () => {

  const initialValues: FormValues = {
    email: '',
    username: '',
    password: '',
    // cpassword: '',
  };

  const signupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email required"),
    username: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Username required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Password required")
      .matches(
        /^^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
        "Must contains one Uppercase, one Lowercase, one Number and one Special Character"
      ),
    // cpassword: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Passwords must match")
    //   .required("Confirm password is required"),
  });

  const handleOnSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    console.log({ values, setSubmitting }); 
    setTimeout(() => setSubmitting(false), 2000);
  }

  const formik = useFormik({
    initialValues, 
    validationSchema: signupSchema,
    onSubmit: handleOnSubmit,
  });

  const setInputValue = useCallback(
    (key, value) => 
      formik.setValues({
        ...formik.values, 
        [key]: value,
      }),
    [formik]
  );

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
      >
        <Form size="large">
          <Input
            name="email"
            placeholder="Email"
            errorPrompt
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            errorPrompt
          />
          <SubmitButton fluid primary>
            Login
          </SubmitButton>
          <ResetButton fluid secondary>
            Reset
          </ResetButton>
        </Form>
      </Formik>
    </div>
  );

  // return (
  //   <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
  //     <Grid.Column style={{ maxWidth: 450 }}>
  //       <Header as='h1' color='teal' textAlign='center'>
  //         mysketch.io
  //       </Header>
  //       <Header color='teal'>
  //         Sign up to see photos and videos from your friends
  //       </Header>
          
  //       <Formik
  //         initialValues={initialValues}
  //         validationSchema={signupSchema}
  //         onSubmit={handleOnSubmit}
  //       > 
  //         <Form size='large'>
  //           <Segment stacked>

  //             <Field
  //               fluid icon='mail' 
  //               type="emai"
  //               iconPosition='left' 
  //               placeholder='E-mail address' 
  //               name="email"
  //               errorPrompt 
  //               onChange={(
  //                 e: React.ChangeEvent<HTMLInputElement>) => setInputValue("email", e.target.value
  //               )}
  //               value={formik.values.email}
  //             />  
  //             <Input 
  //               fluid
  //               icon='user'
  //               iconPosition='left'
  //               placeholder='username'
  //               name="username"
  //               errorPrompt
  //               onChange={(
  //                 e: React.ChangeEvent<HTMLInputElement>) => setInputValue("username", e.target.value
  //               )}
  //               value={formik.values.username}
  //             />
  //             <Input
  //               fluid
  //               icon='lock'
  //               iconPosition='left'
  //               placeholder='Password'
  //               type='password'
  //               name="password"
  //               errorPrompt
  //               onChange={(
  //                 e: React.ChangeEvent<HTMLInputElement>) => setInputValue("password", e.target.value
  //               )}
  //               value={formik.values.password}
  //             />
  //             {/* <Input
  //               fluid
  //               icon='lock'
  //               iconPosition='left'
  //               placeholder='Confirmed Password'
  //               type='password'
  //               name="cpassword"
  //               errorPrompt
  //               onChange={(
  //                 e: React.ChangeEvent<HTMLInputElement>) => setInputValue("cpassword", e.target.value
  //               )}
  //               value={formik.values.cpassword}
  //             /> */}
              
  //             <Button type="submit" disabled={!formik.isValid} color='teal' fluid size='large' >
  //               Signup
  //             </Button>
  //           </Segment>
  //         </Form>
  //       </Formik>

  //       <Message>
  //         Have an account? <Link to="/">Log in</Link>
  //       </Message>

  //     </Grid.Column>
  //   </Grid>
  // )
};

export default Signup; 