import React, { useContext } from "react";
import { Segment, Grid, Header, Message } from 'semantic-ui-react';
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik"; 
import * as Yup from "yup"; 
import { Form, Input, SubmitButton } from 'formik-semantic-ui-react';
import axios from "axios";
import { UserContext } from "../context/UserContext";

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

  const navigate = useNavigate();
  // @ts-ignore
  const { userData, setUserData } = useContext(UserContext); 

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
        onSubmit={async (values: FormValues) => {
          try {
            const loginUser = {
              username: values.username, 
              password: values.password,
            };

            const response = await axios.post("http://localhost:5000/v0/users/auth/login", loginUser);
            console.log(response.data.user.username); 
            setUserData({
              token: response.data.token,
              user: response.data.user
            });
            navigate("/home");
          } catch (e) {
            alert(`Could not login with user ${values.username}`);
          }
        }}
      >
        {( {values} ) => (
          <Form size='large'>
          <Segment stacked>
            <Input 
                icon='user'
                iconPosition='left'
                name="username"
                value={values.username}
                placeholder="username"
                errorPrompt
            />
            <Input
              icon='lock'
              iconPosition='left'
              name="password"
              value={values.password}
              type="password"
              placeholder="Password"
              errorPrompt
            />
            
            <SubmitButton type="submit" color='teal' fluid size='large'>
              Login
            </SubmitButton>
          </Segment>
          </Form>
        )}
      </Formik>  
      
      <Message>
        New to us? <Link to="/signup">Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
  )
};

export default Login; 

