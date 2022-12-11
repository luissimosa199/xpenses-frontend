import { FunctionComponent } from "react";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { StyledForm } from "../../components/containers/AuthForm.styled";
import { useFormik } from "formik";
import * as Yup from "yup";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

interface SignupFamilyProps {}

const SignupFamily: FunctionComponent<SignupFamilyProps> = () => {
  const navigate = useNavigate();

  // FORMIK
  const initialValues = {
    familyName: "",
    password: "",
    address: "",
  };

  const required = "* Campo requerido";

  const validationSchema = Yup.object().shape({
    familyName: Yup.string().required(required),
    password: Yup.string().required(required),
    address: Yup.string().required(required),
  });

  const onSubmit: any = async () => {
    try {
      const response = await axios.post(
        `${REACT_APP_API_URL}family/signup`,
        {
          name: values.familyName,
          password: values.password,
          address: values.address,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (response?.status === 201) {
        // abrir modal de confirmacion
        navigate("/", { replace: true });
        console.log(response.data);
      }
    } catch (err) {
      // abrir modal de error
      throw Error(`${err}`);
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, errors, values, touched, handleBlur } =
    formik;

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Crear una familia nueva</h2>
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
        <TextField
          id="address"
          label="Dirección"
          variant="outlined"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.address && Boolean(errors.address)}
          helperText={touched.address && errors.address}
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
            Crear
          </Button>
          <Button size="large" fullWidth>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/family/login"
            >
              Volver
            </Link>
          </Button>
        </ButtonGroup>
      </StyledForm>
    </>
  );
};

export default SignupFamily;
