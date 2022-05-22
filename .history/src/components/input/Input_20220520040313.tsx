import React from 'react'

export default function Input() {
  return (
    <div className='d-flex flex-row align-items-center mb-4'>
      <i className='fas fa-user fa-lg me-3 fa-fw' />
      <div className='form-outline flex-fill mb-0'>
        <input type='text' id='form3Example1c' className='form-control' />
        <label className='form-label' htmlFor='form3Example1c'>
          Your Name
        </label>
      </div>
    </div>
  )
}
