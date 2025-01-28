import { TextField, TextFieldProps } from "@mui/material";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

interface TextFieldHandlerProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> {
  name: TName;
  control: Control<TFieldValues>;
  rules: RegisterOptions<TFieldValues, TName>;

  label: string;
  dataTestId?: string;
  
} 

const TextFieldHandler = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>(
  props: TextFieldHandlerProps<TFieldValues, TName> & TextFieldProps
) => {
  const { name, dataTestId, control, rules, inputProps,  ...componentProps } =
    props;
  return (
    <Controller
      {...{ control, name, rules }}
      render={({ field: { onChange, value, onBlur } }) => (
        <TextField
          {...componentProps}
          inputProps={{ ...inputProps, "data-testid": dataTestId }}
          id={`${name}-id`}
          value={value}
          onBlur={() => {
            onBlur();
          }}
             
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            //this is to send the event to props passed function.
            //    if (typeof componentProps.onChange === 'function') {
            //     componentProps.onChange(event)
            //   }
            onChange(value);
          }}
        />
      )}
    />
  );
};

export default TextFieldHandler;
