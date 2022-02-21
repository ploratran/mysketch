import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Segment, Grid, Header, Message } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { Formik } from "formik"; 
import * as Yup from "yup"; 
import { Form, Input, SubmitButton } from 'formik-semantic-ui-react';
import axios from "axios"; 
import { register } from "../../api/auth-api";
import { UserContext } from "../context/UserContext";

interface FormValues {
  email: string,
  username: string, 
  password: string,
  // cpassword: string,
}

const Signup: React.FC<{}> = ({ children }) => {

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

  const navigate = useNavigate();
  // @ts-ignore
  const { user, setUser } = useContext(UserContext); 

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
          onSubmit={ async (values: FormValues) => {
            try {
              const newUser = {
                email: values.email,
                username: values.username,
                password: values.password
              };
              const response = await axios.post("http://localhost:5000/v0/users/auth/register", newUser);
              console.log(response.data.user); 
              setUser(response.data.user); 
              navigate("/");
            } catch (e) {
              alert('Could not create new user!');
            }
          }}
        >
          {( {values }) => (
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