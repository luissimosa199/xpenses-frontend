import { FunctionComponent } from "react";
import { StyledForm } from "../../components/containers/AuthForm.styled";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { TextField, Button, ButtonGroup } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();

  // FORMIK
  const initialValues = {
    signupEmail: "",
    password: "",
  };

  const required = "* Campo requerido";

  const validationSchema = Yup.object().shape({
    signupEmail: Yup.string()
      .email("Introduce un email válido")
      .required(required),
    password: Yup.string().required(required),
  });

  const onSubmit: any = async () => {
    try {
      const response = await axios.post(
        `${REACT_APP_API_URL}user/login`,
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

      if (response?.status === 201) {
        localStorage.setItem("token", response?.data?.data?.token);
        localStorage.setItem("name", response?.data?.data?.name);
        navigate("/", { replace: true });
      }
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
        <Button size="large" fullWidth type="submit">
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
