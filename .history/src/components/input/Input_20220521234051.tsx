import React from 'react'
import { Control, Controller, FieldName } from 'react-hook-form'
interface Props {
  name: any
  control: Control
  label?: string
  rules?: any
  type: 'text' | 'password'
}
Input.defaultProps = {
  type: 'text',
}
export default function Input({ control, name, label, rules, ...other }: Props) {
  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        return (
          <div className='d-flex flex-row align-items-center mb-2'>
            <i className='fas fa-user fa-lg me-3 fa-fw' />
            <div className='form-outline flex-fill mb-0'>
              <label className='form-label' htmlFor='form3Example1c'>
                {label}
              </label>
              <input
                {...other}
                onBlur={field.onBlur}
                onChange={field.onChange}
                ref={field.ref}
                value={field.value}
                id='form3Example1c'
                className='form-control'
              />
              {fieldState.error && (
                <label style={{ color: 'red' }} className='form-label' htmlFor='form3Example1c'>
                  {fieldState.error && fieldState.error.message}
                </label>
              )}
            </div>
          </div>
        )
      }}
    />
  )
}
