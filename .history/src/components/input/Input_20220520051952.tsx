import React from 'react'
import { Control, Controller, FieldName, FieldPath } from 'react-hook-form'
interface Props {
  name: FieldPath
  control?: Control
  label?: string
  rules?: any
}
export default function Input({ control, name, label, rules }: Props) {
  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        console.log(fieldState)
        return (
          <div className='d-flex flex-row align-items-center mb-4'>
            <i className='fas fa-user fa-lg me-3 fa-fw' />
            <div className='form-outline flex-fill mb-0'>
              <label className='form-label' htmlFor='form3Example1c'>
                {label}
              </label>
              <input
                onBlur={field.onBlur}
                onChange={field.onChange}
                ref={field.ref}
                value={field.value}
                type='text'
                id='form3Example1c'
                className='form-control'
              />
              {fieldState.error && (
                <label className='form-label' htmlFor='form3Example1c'>
                  {fieldState.error.type === 'required' && fieldState.error.message}
                </label>
              )}
            </div>
          </div>
        )
      }}
    />
  )
}
