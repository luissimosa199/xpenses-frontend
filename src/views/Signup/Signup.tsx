import { FunctionComponent } from "react";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { StyledForm } from "../../components/containers/AuthForm.styled";
import { TextField, ButtonGroup, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
const { REACT_APP_API_URL } = process.env;

interface SignupProps {}

const Signup: FunctionComponent<SignupProps> = () => {
  const navigate = useNavigate();

  // FORMIK
  const initialValues = {
    signupName: "",
    signupEmail: "",
    password: "",
  };

  const required = "* Campo requerido";

  const validationSchema = Yup.object().shape({
    signupName: Yup.string()
      .min(2, "Introduce al menos 2 letras")
      .required(required),
    signupEmail: Yup.string()
      .email("Introduce un email válido")
      .required(required),
    password: Yup.string().required(required),
  });

  const onSubmit: any = async () => {
    try {
      const response = await axios.post(
        `${REACT_APP_API_URL}user/signup`,
        {
          name: values.signupName,
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
        Swal.fire({
          title: "Bienvenido!",
          text: "Ahora ingresa a tu cuenta",
          icon: "success",
          confirmButtonText: "Aceptar",
          timer: 3000,
        });

        navigate("/login", { replace: true });
      }

      return;
    } catch (err: any) {
      Swal.fire({
        title: "Error!",
        text: `${err?.response?.data?.data?.error}` || err,
        icon: "error",
        confirmButtonText: "Aceptar",
        timer: 10000,
      });
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
        helperText={
          errors.signupName && touched.signupName ? errors.signupName : null
        }
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
        helperText={
          errors.signupEmail && touched.signupEmail ? errors.signupEmail : null
        }
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
