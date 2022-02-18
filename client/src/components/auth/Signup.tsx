import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Segment, Grid, Header, Message } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { Formik, FormikHelpers } from "formik"; 
import * as Yup from "yup"; 
import { Form, Input, SubmitButton } from 'formik-semantic-ui-react';
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
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    // cpassword: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Passwords must match")
    //   .required("Confirm password is required"),
  });

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const handleOnSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    console.log({ values, setSubmitting }); 

    try {
      const newUser = { values };
      await axios.post("http://localhost:5000/users/register", newUser);
      console.log(newUser); 
      navigate("/");
    } catch (e) {
      alert('Cold not create new user!');
    }

    setTimeout(() => setSubmitting(false), 2000);
  }
  // use with Formik onSubmit()
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault(); 

  //   try {
  //     const newUser = { email, username, password };
  //     await axios.post("http://localhost:5000/users/register", newUser);
  //     console.log(newUser); 
  //     navigate("/");
  //   } catch (e) {
  //     alert('Cold not create new user!');
  //   }

  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value); 
  // };

  // const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUsername(e.target.value); 
  // };

  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value); 
  // };

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
          onSubmit={ async (values) => {
            try {
              const newUser = { values };
              await axios.post("http://localhost:5000/v0/users/auth/register", newUser, {
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': 'Content-Type',
                  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
                }
              });
              console.log(newUser); 
              navigate("/");
            } catch (e) {
              alert('Cold not create new user!');
            }
          }}
        >
          {( {values, isSubmitting }) => (
            <Form size="large">
              <Segment stacked>
                <Input 
                  icon='mail'
                  iconPosition='left'
                  type="emai"
                  name="email"
                  value={values.email}
                  
                  placeholder="Email"
                  errorPrompt
                />
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
                  Sign up
                </SubmitButton>
              </Segment>
            </Form>
          )}
        </Formik>

        <Message>
          Have an account? <Link to="/">Log in</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Signup; 