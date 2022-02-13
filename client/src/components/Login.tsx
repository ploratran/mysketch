import React from "react";
import { Segment, Form, Grid, Header, Message, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { Formik } from "formik"; 
import * as Yup from "yup"; 
import { Input } from "formik-semantic-ui-react";

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
        /^^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
        "Must contains one Uppercase, one Lowercase, one Number and one Special Character"
      )
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
        validationSchema={loginSchema}
        onSubmit={ values => console.log(values) }
      >
        <Form size='large'>
          <Segment stacked>
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
            
            <Button type="submit" color='teal' fluid size='large'>
              Login
            </Button>
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

