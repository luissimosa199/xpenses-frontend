import { FunctionComponent } from "react";
import { StyledForm } from "../../components/containers/AuthForm.styled";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { TextField } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const { REACT_API_URL } = process.env;

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  // FORMIK
  const initialValues = {
    signupEmail: "",
    password: "",
  };

  const required = "* Campo requerido";

  const validationSchema = Yup.object().shape({
    signupEmail: Yup.string().email("Introduce un email válido").required(required),
    password: Yup.string().required(required),
  });

  const onSubmit: any = async () => {

    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/user/login`,
        {
          email: values.signupEmail,
          password: values.password,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      return response;
    } catch (err) {
      throw Error(`Error: ${err}`);
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, errors, values, touched, handleBlur } =
    formik;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        id="signupEmail"
        label="Email"
        variant="outlined"
        value={values.signupEmail}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.signupEmail && Boolean(errors.signupEmail)}
        helperText={touched.signupEmail && errors.signupEmail}
      />

      <PasswordInput
        value={values.password}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.password}
        touched={touched.password}
      />

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button size="large" fullWidth type="submit" onClick={() => {
          console.log('ERRORS: ', errors, 'VALUES: ', values)
        }}>
          Entrar
        </Button>
        <Button size="large" fullWidth>
          <Link style={{ textDecoration: "none", color: "white" }} to="/signup">
            Registrarme
          </Link>
        </Button>
      </ButtonGroup>
    </StyledForm>
  );
};

export default Login;
