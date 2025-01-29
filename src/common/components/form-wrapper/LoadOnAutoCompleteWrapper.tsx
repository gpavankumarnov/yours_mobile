import {
  CheckBox,
  CheckBoxOutlineBlank
} from "@mui/icons-material";
import {
  Autocomplete,
  Checkbox,
  TextField
} from "@mui/material";
import { Controller, FieldPath, useFormContext } from "react-hook-form";
import { UserService } from "../../../feature/dashboard/model/UserService";

interface LoadOnAutoCompleteWrapperProps {
  name: FieldPath<UserService>;
  rules?: Record<string, unknown>;
  options: AutocompleteOptionItem[];
  label: string;
  helperText: string;
  isRequired: boolean;
  error?: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  isLoading: boolean;
  isError: boolean;
}

interface AutocompleteOptionItem {
  id: string | number;
  code: string;
  disabled: boolean;
}

interface OptionValue {
  id: string | number;
  label: string;
}

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

const LoadOnAutoCompleteWrapper = (props: LoadOnAutoCompleteWrapperProps) => {
  const {
    name,
    rules,
    label,
    helperText,
    isRequired,
    error,
    options,
    open,
    onOpen,
    onClose,
  
  } = props;
  const { control } = useFormContext<UserService>();

  //This onChange is from react hook form.
  //when we select a newval, we first check if its a valid value then send to react hook form.
  const handleOnChange = (
    _: React.SyntheticEvent<Element, Event> | null, // Ignored event parameter
    newValue: OptionValue[] | null,
    onChange: (value: OptionValue[] | null) => void
  ) => {
    if (newValue) {
      // Map the array of OptionValue to their `id`s
      onChange(newValue);
    } 
  };

  const getValue = (
    value: AutocompleteOptionItem[] | undefined
  ): OptionValue[] | undefined => {
    return value ? value.map((e)=> ({id:e.id, label:e.code})) : undefined;
  };

  //get each option and check before rendering whether its deleted in BE.
  const isOptionDisabled = (option: OptionValue) => {
    const opt = options.find((e) => e.id === option.id);
    if (opt && opt.disabled === true) {
      return true;
    }
    return false;
  };

  // const getInputProps = (params: any) => {
  //   return {
  //     ...params.InputProps,
  //     inputProps: dataTestId
  //       ? { ...params.inputProps, "data-testid": dataTestId }
  //       : params.inputProps,
  //     endAdornment: (
  //       <>
  //         {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
  //         {isError ? <WarningAmber color={"warning"} fontSize="small" /> : null}
  //         {params.InputProps.endAdornment}
  //       </>
  //     ),
  //   };
  // };
  const mappedOptions: OptionValue[] = options.map((opt) => ({
    id: opt.id,
    label: opt.code, // Map `code` to `label`
  }));

  return (
    <Controller
      {...{ control, name, rules }}
      render={({
        field: { onChange, value },
        formState: { errors },
      }): React.ReactElement => {
        const retValue = options?.filter((e) => e.code === value);
        return (
          <Autocomplete
            open={open}
            onOpen={onOpen}
            onClose={onClose}
            options={Array.isArray(options) ? mappedOptions : []}
            fullWidth
            id={`${name}-id`}
            data-testid={`${name}-autocomplete`}
            multiple={true}
            noOptionsText="No options"
            getOptionDisabled={isOptionDisabled}
            isOptionEqualToValue={(option, value) =>
              option.label === value?.label
            }

            onChange={(event, newValue: OptionValue[] | null) =>
              handleOnChange(event, newValue, onChange)
            }
            value={getValue(retValue)}
            style={{ width: 300 }}
            renderOption={(props, option, { selected }) => {
              const { key, ...optionProps } = props;
              return (
                <li key={key} {...optionProps}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.label}
                </li>
              );
            }}
            renderInput={(params: object) => (
              <TextField
                {...params}
                sx={{ textOverflow: "ellipsis" }}
                label={label}
                // placeholder={label}
                error={error}
                helperText={errors ? helperText : ""}
                required={isRequired}
               // InputProps={getInputProps(params)}
              />
            )}
          />
        );
      }}
    />
  );
};

export default LoadOnAutoCompleteWrapper;
