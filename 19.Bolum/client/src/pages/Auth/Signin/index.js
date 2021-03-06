import React from 'react';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from '@chakra-ui/react';
import { useFormik } from 'formik';
import validationSchema from './validations';

import { fetchLogin } from '../../../api';

import { useAuth } from '../../../contexts/AuthContext';

function Signin({ history }) {
  const { login, loggedIn } = useAuth();
  //console.log("login", loggedIn);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    //values: Formdaki datalar.
    //bag: Form üzerinde yapabileceğimiz bir takım işlemler var onları bize sağlıyor. Örn: Formu resetlemek gibi.
    onSubmit: async (values, bag) => {
      try {
        const loginResponse = await fetchLogin({ email: values.email, password: values.password });
        login(loginResponse);
        setTimeout(() => {
          history.push("/profile");
        }, 3000);
        //console.log(loginResponse);
      } catch (e) {
        bag.setErrors({ general: e.response.data.message });
      }
    },
  });

  
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Sign In</Heading>
          </Box>
          <Box my="5">
            {
              formik.errors.general && (
                <Alert status="error">
                  {
                    formik.errors.general
                  }
                </Alert>
              )
            }
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} isInvalid={formik.touched.email && formik.errors.email} />
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input name='password' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} isInvalid={formik.touched.password && formik.errors.password} />
              </FormControl>
              <Button mt="4" width="full" type="submit">Signin</Button>
            </form>
          </Box>
          <Box>
            {loggedIn ?
              <Alert justifyContent="center" status="success">
                Giriş başarılı yönlendiriliyorsunuz...
              </Alert>
            : ""}
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signin