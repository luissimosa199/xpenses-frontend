import { FunctionComponent } from "react";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { StyledForm } from "../../components/containers/AuthForm.styled";
import { TextField } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const { REACT_API_URL } = process.env;

interface SignupProps {}

const Signup: FunctionComponent<SignupProps> = () => {
  // FORMIK
  const initialValues = {
    signupName: "",
    signupEmail: "",
    password: "",
  };

  const required = "* Campo requerido";

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Introduce al menos 2 letras").required(required),
    email: Yup.string().email("Introduce un email válido").required(required),
    password: Yup.string().required(required),
  });

  const onSubmit: any = async () => {
    try {
      const response = await axios.post(
        `${REACT_API_URL}user/signup`,
        {
          signupName: values.signupName,
          signupEmail: values.signupEmail,
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
      throw Error("Error");
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, errors, values, touched, handleBlur } =
    formik;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        id="signupName"
        label="Nombre"
        variant="outlined"
        required
        value={values.signupName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.signupName}
        helperText={errors.signupName && touched.signupName ? errors.signupName : null}
      />
      <TextField
        id="signupEmail"
        label="Email"
        variant="outlined"
        required
        value={values.signupEmail}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.signupEmail}
        helperText={errors.signupEmail && touched.signupEmail ? errors.signupEmail : null}
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
        <Button size="large" fullWidth>
          Registrarse
        </Button>
        <Button size="large" fullWidth>
          <Link style={{ textDecoration: "none", color: "white" }} to="/login">
            Volver
          </Link>
        </Button>
      </ButtonGroup>
    </StyledForm>
  );
};

export default Signup;
