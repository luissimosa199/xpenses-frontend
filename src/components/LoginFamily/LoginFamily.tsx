import { FunctionComponent, useContext } from "react";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { StyledForm } from "../../components/containers/AuthForm.styled";
import { useFormik } from "formik";
import * as Yup from "yup";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";
const { REACT_APP_API_URL } = process.env;

interface LoginFamilyProps {}

const LoginFamily: FunctionComponent<LoginFamilyProps> = () => {
  const navigate = useNavigate();
  const { userState, handleLogin } = useContext(UserContext);
  const userData = JSON.parse(localStorage.getItem("userData") as string);

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
          name: values.familyName,
          password: values.password,
          user_id: userState.user._id,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (response?.status === 201) {
        Swal.fire({
          title: "Agregado!",
          text: "Una nueva familia ha sido agregada",
          icon: "success",
          confirmButtonText: "Aceptar",
          timer: 3000,
        });

        const loginData = {
          ...userData,
          families: [
            ...userData.families,
            JSON.stringify(response?.data?.data),
          ],
        };

        localStorage.setItem("families", JSON.stringify([...userData.families, JSON.stringify(response?.data?.data)]))
        localStorage.setItem("userData", JSON.stringify(loginData));

        handleLogin(loginData);

        navigate("/", { replace: true });
      }
    } catch (err: any) {
      Swal.fire({
        title: "Error!",
        text: `${err?.response?.data?.data?.error}` || err,
        icon: "error",
        confirmButtonText: "Aceptar",
        timer: 10000,
      });
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
          label="Nombre de la familia"
          variant="outlined"
          id="familyName"
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
