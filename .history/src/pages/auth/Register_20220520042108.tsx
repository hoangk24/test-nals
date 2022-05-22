import Input from 'components/input/Input'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {
  const { control, handleSubmit } = useForm()
  return (
    <section className='vh-100' style={{ backgroundColor: '#eee' }}>
      <div className='container h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-lg-12 col-xl-11'>
            <div className='card text-black' style={{ borderRadius: '25px' }}>
              <div className='card-body p-md-5'>
                <div className='row justify-content-center'>
                  <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                    <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Sign up</p>
                    <form className='mx-1 mx-md-4'>
                      <Input name='username' label='Tài khoản' control={control} />
                      <Input name='Email' label='Email' control={control} />
                      <Input name='email' label='Mật khẩu' control={control} />
                      <Input name='password' label='Nhập lại mật khẩu' control={control} />
                      <div className='form-check d-flex justify-content-center mb-5'>
                        <input
                          className='form-check-input me-2'
                          type='checkbox'
                          id='form2Example3c'
                        />
                        <label className='form-check-label' htmlFor='form2Example3'>
                          I agree all statements in <a href='#!'>Terms of service</a>
                        </label>
                      </div>
                      <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                        <button type='button' className='btn btn-primary btn-lg'>
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                      className='img-fluid'
                      alt='Sample image'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
