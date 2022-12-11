import { FunctionComponent, useState } from "react";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextFieldSelect from "./TextFieldSelect";

interface SelectWithSwitchProps {
  name: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  error: any;
  touched: boolean | undefined;
}

const SelectWithSwitch: FunctionComponent<SelectWithSwitchProps> = ({
  value,
  handleChange,
  handleBlur,
  error,
  touched,
  name,
  label,
}) => {
  const [newDescription, setNewDescription] = useState(false);

  const toggleType = () => {
    // reset field
    return setNewDescription(!newDescription);
  };

  return (
    <FormControl>
      {newDescription ? (
        <>
          <InputLabel htmlFor={name} color={error ? "error" : "info"}>
            {label}
          </InputLabel>
          <OutlinedInput
            error={touched && Boolean(error)}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            id={name}
            label={label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle add new description"
                  onClick={toggleType}
                >
                  <AddIcon color={newDescription ? "primary" : "inherit"} />
                </IconButton>
              </InputAdornment>
            }
          />
          {error && <FormHelperText>{`${error}`}</FormHelperText>}
        </>
      ) : (
        <TextFieldSelect
          name={name}
          label={label}
          value={value}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={error}
          touched={touched}
          toggleType={toggleType}
          newDescription={newDescription}
        />
      )}
    </FormControl>
  );
};

export default SelectWithSwitch;
