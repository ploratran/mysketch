import React from "react";
import { Segment, Grid, Header, Message } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { Formik, FormikHelpers } from "formik"; 
import * as Yup from "yup"; 
import { Form, Input, SubmitButton } from 'formik-semantic-ui-react';

interface FormValues {
  username: string, 
  password: string
}

const Login: React.FC<{}> = () => {

  const initialValues: FormValues = {
    username: '', 
    password: '',
  }

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Username required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Password required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
  });

  const handleOnSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    console.log({ values, setSubmitting }); 
    setTimeout(() => setSubmitting(false), 2000);
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h1' color='teal' textAlign='center'>
         mysketch.io
      </Header>
      <Header color='teal'>
        Sign up to see photos and videos from your friends
      </Header>

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleOnSubmit}
      >
        <Form size='large'>
          <Segment stacked>
            <Input 
                icon='user'
                iconPosition='left'
                name="username"
                placeholder="username"
                errorPrompt
            />
            <Input
              icon='lock'
              iconPosition='left'
              name="password"
              type="password"
              placeholder="Password"
              errorPrompt
            />
            
            <SubmitButton type="submit" color='teal' fluid size='large'>
              Login
            </SubmitButton>
          </Segment>
        </Form>
      </Formik>  
      
      <Message>
        New to us? <Link to="/signup">Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
  )
};

export default Login; 

