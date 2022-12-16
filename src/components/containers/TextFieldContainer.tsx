import { TextField } from "@mui/material";
import { FormikErrors, FormikTouched } from "formik/dist/types";
import { FunctionComponent } from "react";
import SelectWithSwitch from "../SelectWithSwitch/SelectWithSwitch";

interface TextFieldContainerProps {
  children?: JSX.Element | JSX.Element[];
  name:
     "name"
    | "description"
    | "date"
    | "amount"
    | "status"
    | "family";
  component: "TextField" | "SelectWithSwitch";
  other?: any;
  label: string;
  configs: {
    values: {
          name: string;
          description: string;
          date: string;
          amount: string;
          status: string;
          family: string;
        };
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: any) => void;
    touched: FormikTouched<{
          name: string;
          description: string;
          date: string;
          amount: string;
          status: string;
          family: string;
        }>;
    errors: FormikErrors<{
          name: string;
          description: string;
          date: string;
          amount: string;
          status: string;
          family: string;
        }>;
  };
}

const TextFieldContainer: FunctionComponent<TextFieldContainerProps> = ({
  children,
  name,
  configs,
  other,
  label,
  component,
}) => {
  switch (component) {
    case "TextField":
      return (
        <TextField
          label={label}
          {...other}
          id={name}
          name={name}
          value={configs.values[name]}
          onChange={configs.handleChange}
          onBlur={configs.handleBlur}
          error={configs.touched[name] && Boolean(configs.errors[name])}
          helperText={configs.touched[name] && configs.errors[name]}
        >
          {children}
        </TextField>
      );
    case "SelectWithSwitch":
      return (
        <SelectWithSwitch
          label={label}
          name={name}
          value={configs.values[name]}
          handleChange={configs.handleChange}
          handleBlur={configs.handleBlur}
          error={configs.errors[name]}
          touched={configs.touched[name]}
        />
      );

    default:
      return <p>Error</p>;
  }
};

export default TextFieldContainer;
