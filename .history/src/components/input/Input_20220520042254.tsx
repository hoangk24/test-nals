import React from 'react'
import { Control, Controller } from 'react-hook-form'
interface Props {
  name?: string
  control?: Control
  label?: string
  rule?: any
}
export default function Input({ control, name, label, rule }: Props) {
  return (
    <Controller
      rules={rule}
      name={name as any}
      control={control}
      render={({ field, fieldState, formState }) => (
        <div className='d-flex flex-row align-items-center mb-4'>
          <i className='fas fa-user fa-lg me-3 fa-fw' />
          <div className='form-outline flex-fill mb-0'>
            <label className='form-label' htmlFor='form3Example1c'>
              {label}
            </label>
            <input
              onBlur={field.onBlur}
              value={field.value}
              onChange={field.onChange}
              ref={field.ref}
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
      )}
    />
  )
}
