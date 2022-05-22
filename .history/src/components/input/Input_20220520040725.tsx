import React from 'react'
import { Control, Controller } from 'react-hook-form'
interface Props {
  name?: string
  control?: Control
  label?: string
}
export default function Input({ control, name }: Props) {
  return (
    <Controller
      name={name as any}
      control={control}
      render={({ field, fieldState, formState }) => (
        <div className='d-flex flex-row align-items-center mb-4'>
          <i className='fas fa-user fa-lg me-3 fa-fw' />
          <div className='form-outline flex-fill mb-0'>
            <label className='form-label' htmlFor='form3Example1c'>
              Your Name
            </label>
            <input type='text' id='form3Example1c' className='form-control' />
          </div>
        </div>
      )}
    />
  )
}
