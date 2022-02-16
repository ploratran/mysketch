import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Segment, Grid, Header, Message, Form, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik"; 
import * as Yup from "yup"; 
import { Input, SubmitButton } from "formik-semantic-ui-react";
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

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); 
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value); 
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value); 
  };

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
  // };

  const onSubmit = (values: any) => {
    alert(JSON.stringify(values)); 
  }

  const formik = useFormik({
    initialValues, 
    validationSchema: signupSchema,
    onSubmit,
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
        onSubmit={(values: any) => {
          alert(JSON.stringify(values)); 
        }}
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
              onChange={handleEmailChange}
              value={email}
            />  
            <Input 
              fluid
              icon='user'
              iconPosition='left'
              placeholder='username'
              name="username"
              errorPrompt
              onChange={handleUsernameChange}
              value={username}
            />
            <Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name="password"
              errorPrompt
              onChange={handlePasswordChange}
              value={password}
            />
            {/* <Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirmed Password'
              type='password'
              name="cpassword"
              errorPrompt
            /> */}
            
            <Button type="submit" color='teal' fluid size='large' >
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