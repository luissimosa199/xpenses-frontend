import { FunctionComponent, useContext, useEffect, useState } from "react";
import { StyledForm } from "../../components/containers/AuthForm.styled";
import { UserContext } from "../../context/UserContext";
import TextFieldContainer from "../../components/containers/TextFieldContainer";

import { Button, ButtonGroup, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

const families = JSON.parse(`${localStorage.getItem("families")}`);

const { REACT_APP_API_URL } = process.env;
const token = localStorage.getItem("token");

interface AddNewBillProps {}

const AddNewBill: FunctionComponent<AddNewBillProps> = () => {
  const navigate = useNavigate();
  const { userState } = useContext(UserContext);

  // FORMIK
  const initialValues = {
    name: "",
    description: "",
    date: "",
    amount: "",
    status: "",
    family: "",
  };

  const required = "* Campo requerido";

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(required),
    description: Yup.string().required(required),
    date: Yup.string().required(required),
    amount: Yup.number().required(required),
    status: Yup.string().required(required),
    family: Yup.string().required(required),
  });

  const onSubmit: any = async () => {
    try {
      const response = await axios.post(
        `${REACT_APP_API_URL}bills`,
        {
          name: values.name,
          description: values.description,
          date: values.date,
          amount: values.amount,
          status: values.status,
          createdBy: userState.user.name,
          family: values.family,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response?.status === 201) {
        Swal.fire({
          title: "Agregado!",
          text: "Una nueva factura ha sido agregada",
          icon: "success",
          confirmButtonText: "Aceptar",
          timer: 3000,
        });
        navigate("/");
        return;
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: `${err}`,
        icon: "error",
        confirmButtonText: "Aceptar",
        timer: 3000,
      });
      throw Error(`Error: ${err}`);
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleSubmit,
    handleChange,
    handleReset,
    errors,
    values,
    touched,
    handleBlur,
  } = formik;

  const [nameOptions, setNameOptions] = useState<any>();
  const [descriptionOptions, setDescriptionOptions] = useState<any>();

  const fetchOptions = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${REACT_APP_API_URL}bills?family=${families[0]}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const names = res.data.data.map((e: any) => e.name);
      const descriptions = res.data.data.map((e: any) => e.description);

      setNameOptions([...new Set(names)]);
      setDescriptionOptions([...new Set(descriptions)]);

      return;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextFieldContainer
        component="SelectWithSwitch"
        name="name"
        configs={{ values, handleChange, handleBlur, touched, errors }}
        label="Nombre"
        other={{ other: nameOptions }}
      />

      <TextFieldContainer
        component="SelectWithSwitch"
        name="description"
        configs={{ values, handleChange, handleBlur, touched, errors }}
        label="Descripcion"
        other={{ other: descriptionOptions }}
      />

      <TextFieldContainer
        label=""
        component="TextField"
        name="date"
        configs={{ values, handleChange, handleBlur, touched, errors }}
        other={{ type: "date", variant: "outlined" }}
      />

      <TextFieldContainer
        component="TextField"
        name="amount"
        label="Importe"
        configs={{ values, handleChange, handleBlur, touched, errors }}
        other={{ type: "number", variant: "outlined" }}
      />

      <TextFieldContainer
        component="TextField"
        name="status"
        label="Estatus"
        configs={{ values, handleChange, handleBlur, touched, errors }}
        other={{ select: true, variant: "outlined" }}
      >
        <MenuItem value="unknown">Desconocido</MenuItem>
        <MenuItem value="paid">Pago</MenuItem>
        <MenuItem value="notpaid">Por pagar</MenuItem>
      </TextFieldContainer>

      <TextFieldContainer
        component="TextField"
        name="family"
        label="Familia"
        configs={{ values, handleChange, handleBlur, touched, errors }}
        other={{ select: true, variant: "outlined" }}
      >
        <MenuItem value="63876305442ba7812c757bd3">simosa-medina</MenuItem>
      </TextFieldContainer>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button size="large" fullWidth type="submit">
          Agregar
        </Button>
        <Button size="large" fullWidth onClick={handleReset}>
          Limpiar
        </Button>
      </ButtonGroup>
    </StyledForm>
  );
};

export default AddNewBill;
