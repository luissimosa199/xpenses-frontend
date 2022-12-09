import { FunctionComponent, useState } from "react";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface PasswordInputProps {
  value: string;
  handleChange: any;
  handleBlur: any;
  error: any;
  touched: boolean | undefined;
}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({
  value,
  handleChange,
  handleBlur,
  error,
  touched
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    if (showPassword) {
      return setShowPassword(false);
    }

    return setShowPassword(true);
  };

  return (
    <FormControl>
      <InputLabel
        htmlFor="password"
        color={error ? 'error' : 'info'}
      >
        Contraseña
      </InputLabel>
      <OutlinedInput
        error={touched && Boolean(error)}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        label="Contraseña"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={togglePassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {error && <FormHelperText>{`${error}`}</FormHelperText>}
      
    </FormControl>
  );
};

export default PasswordInput;
