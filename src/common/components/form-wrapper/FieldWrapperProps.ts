import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'

// export type fieldWrapperProps = Pick<typeof, keys>
export type FieldWrapperProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TComponent
> = Pick<ControllerProps<TFieldValues, TName>, 'name' | 'control' | 'rules'> & TComponent
