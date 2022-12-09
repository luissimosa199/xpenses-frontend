import { FunctionComponent } from "react";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledForm } from "../../components/containers/AuthForm.styled";
import { useFormik } from "formik";
import * as Yup from "yup";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

interface LoginFamilyProps {}

const LoginFamily: FunctionComponent<LoginFamilyProps> = () => {
  // FORMIK
  const initialValues = {
    familyName: "",
    password: "",
  };

  const required = "* Campo requerido";

  const validationSchema = Yup.object().shape({
    familyName: Yup.string().required(required),
    password: Yup.string().required(required),
  });

  const onSubmit: any = async () => {
    try {
        const response = await axios.post(
            `${REACT_APP_API_URL}family/login`,
            {
              email: values.familyName,
              password: values.password,
            },
            {
              headers: {
                "content-type": "application/json",
              },
            }
          );
    
          if (response?.status === 201) {
            // suscribir al usuario a la familia.
            console.log(response.data)
          }
    } catch (err) {
      throw Error(`${err}`);
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, errors, values, touched, handleBlur } =
    formik;

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Entrar en una familia</h2>
        <TextField
          id="familyName"
          label="Nombre de la familia"
          variant="outlined"
          value={values.familyName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.familyName && Boolean(errors.familyName)}
          helperText={touched.familyName && errors.familyName}
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
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/family/signup"
            >
              Crear familia
            </Link>
          </Button>
        </ButtonGroup>
      </StyledForm>
    </>
  );
};

export default LoginFamily;
