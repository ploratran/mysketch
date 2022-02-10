import React from "react";
import { Segment, Grid, Header, Message, Form, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { Formik } from "formik"; 
import * as Yup from "yup"; 
import { Input } from "formik-semantic-ui-react";

interface FormValues {
  email: string,
  username: string, 
  password: string,
  cpassword: string,
}

const Signup: React.FC<{}> = () => {

  const initialValues: FormValues = {
    email: '',
    username: '',
    password: '',
    cpassword: '',
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
    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

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
        validationSchema={signupSchema}
        onSubmit={values => 
          console.log(values)
        } 
      > 
        <Form size='large'>
          <Segment stacked>
            <Input
              fluid icon='mail' 
              type="emai"
              iconPosition='left' 
              placeholder='E-mail address' 
              name="email"
              errorPrompt 
            />  
            <Input 
              fluid
              icon='user'
              iconPosition='left'
              placeholder='username'
              name="username"
              errorPrompt
            />
            <Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name="password"
              errorPrompt
            />
            <Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirmed Password'
              type='password'
              name="cpassword"
              errorPrompt
            />
            
            <Button type="submit" color='teal' fluid size='large'>
              Signup
            </Button>
          </Segment>
        </Form>
      </Formik>

      <Message>
        Have an account? <Link to="/">Log in</Link>
      </Message>

    </Grid.Column>
  </Grid>
  )
};

export default Signup; 