import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { FunctionComponent } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "../containers/IconButton";

interface TextFieldSelectProps {
  value: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  error: any;
  touched: boolean | undefined;
  toggleType: () => void;
  newDescription: boolean;
  name: string;
  label: string;
  other?: any;
}

const TextFieldSelect: FunctionComponent<TextFieldSelectProps> = ({
  value,
  handleChange,
  handleBlur,
  error,
  touched,
  toggleType,
  newDescription,
  name,
  label,
  other,
}) => {

  return (

      <TextField
        id={name}
        name={name}
        select
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        label={label}
        helperText={error && error}
        variant="outlined"
        error={touched && Boolean(error)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle add new description"
                onClick={toggleType}
              >
                <AddIcon color={newDescription ? "primary" : "inherit"} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      >
        <MenuItem value="" selected></MenuItem>

        {
          other ? other.map((e: any) => {return <MenuItem key={e} value={e}>{e}</MenuItem> }): ''
        }
      </TextField>
  );
};

export default TextFieldSelect;
