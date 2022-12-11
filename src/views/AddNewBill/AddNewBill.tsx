import { FunctionComponent } from "react";
import { StyledForm } from "../../components/containers/AuthForm.styled";
import { TextField, Button, ButtonGroup, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import SelectWithSwitch from "../../components/SelectWithSwitch/SelectWithSwitch";
const { REACT_APP_API_URL } = process.env;
const token = localStorage.getItem("token");

interface AddNewBillProps {}

const AddNewBill: FunctionComponent<AddNewBillProps> = () => {
  const navigate = useNavigate();

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
          // traer usuario desde el stado global
          createdBy: "Luis",
          //
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
        // abrir modal de confirmacion
        console.log(response.status);
        navigate("/");
        return;
      }
    } catch (err) {
      // abrir modal de error
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

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SelectWithSwitch
        name="name"
        label="Nombre"
        value={values.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.name}
        touched={touched.name}
      />

      <SelectWithSwitch
        name="description"
        label="Descripcion"
        value={values.description}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.description}
        touched={touched.description}
      />

      <TextField
        id="date"
        variant="outlined"
        type="date"
        value={values.date}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.date && Boolean(errors.date)}
        helperText={touched.date && errors.date}
      />

      <TextField
        id="amount"
        type="number"
        label="Importe"
        variant="outlined"
        value={values.amount}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.amount && Boolean(errors.amount)}
        helperText={touched.amount && errors.amount}
      />

      <TextField
        select
        id="status"
        name="status"
        label="Estatus"
        variant="outlined"
        value={values.status}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.status && Boolean(errors.status)}
        helperText={touched.status && errors.status}
      >
        <MenuItem value="unknown">Desconocido</MenuItem>
        <MenuItem value="paid">Pago</MenuItem>
        <MenuItem value="notpaid">Por pagar</MenuItem>
      </TextField>

      <TextField
        select
        id="family"
        label="Familia"
        name="family"
        variant="outlined"
        value={values.family}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.family && Boolean(errors.family)}
        helperText={touched.family && errors.family}
      >
        {/* hacer un map de todas las familias del usuario actual y renderizar
        como opciones */}
        <MenuItem value="63876305442ba7812c757bd3">simosa-medina</MenuItem>
      </TextField>

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
