import { FunctionComponent, useState } from "react";

import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextFieldSelect from "./TextFieldSelect";
import { StyledFormControl } from "./FormControl.styled";

interface Props {
  name: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  error: any;
  touched: boolean | undefined;
  other?: any;
}

const SelectWithSwitch: FunctionComponent<Props> = ({
  value,
  handleChange,
  handleBlur,
  error,
  touched,
  name,
  label,
  other
}) => {
  const [newDescription, setNewDescription] = useState(false);

  const toggleType = () => {
    // reset field
    return setNewDescription(!newDescription);
  };

  return (
    <StyledFormControl>
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
          other={other}
        />
      )}
    </StyledFormControl>
  );
};

export default SelectWithSwitch;
