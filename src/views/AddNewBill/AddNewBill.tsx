import { FunctionComponent, useState } from "react";
import { StyledForm } from "../../components/containers/AuthForm.styled";
import {
  TextField,
  Button,
  ButtonGroup,
  MenuItem,
  FormGroup,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;
const token = localStorage.getItem("token");

interface AddNewBillProps {}

const AddNewBill: FunctionComponent<AddNewBillProps> = () => {
  const navigate = useNavigate();

  const [newName, setNewName] = useState(false);
  const [newDescription, setDescription] = useState(false);

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
      <FormGroup className="form-switch">
        <FormControlLabel
          control={<Switch size="small" value={newName} onChange={() => {setNewName(!newName)}} />}
          label="Nuevo nombre"
        />
      </FormGroup>
      {newName ? (
        <TextField
          id="name"
          name="name"
          label="Nombre"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
      ) : (
        <TextField
          select
          id="name"
          name="name"
          label="Nombre"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        >
          <MenuItem value="opciones">Opciones</MenuItem>
        </TextField>
      )}

      <FormGroup className="form-switch">
        <FormControlLabel
          control={<Switch size="small" value={newDescription} onChange={() => {setDescription(!newDescription)}} />}
          label="Nueva categoria"
        />
      </FormGroup>
      {newDescription ? (
        <TextField
          name="description"
          id="description"
          label="Descripción"
          variant="outlined"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.description)}
          helperText={touched.description && errors.description}
        />
      ) : (
        <TextField
          select
          name="description"
          id="description"
          label="Descripción"
          variant="outlined"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.description)}
          helperText={touched.description && errors.description}
        >
          <MenuItem value="opciones">Opciones</MenuItem>
        </TextField>
      )}

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
