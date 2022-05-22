import Input from 'components/input/Input'
import { RULE } from 'constants/rules/rule'
import { useLoading } from 'hooks/useLoading'
import useSigleFileUpload from 'hooks/useSigleFileUpload'
import useAuth from 'pages/auth/useAuth'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import './Login.scss'
export default function Login() {
  const { control, handleSubmit, watch, setError } = useForm({})
  const { login } = useAuth()
  const onSubmit = (data: any) => {
    login(data)
  }

  return (
    <div className='vh-100 register' style={{ backgroundColor: '#eee' }}>
      <div className='container h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-lg-12 col-xl-11'>
            <div className='card text-black' style={{ borderRadius: '25px' }}>
              <div className='card-body'>
                <div className='row justify-content-center'>
                  <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                    <p className='text-center h1 fw-bold m'>Sign In</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='mx-1 mx-md-4'>
                      <Input
                        name='email'
                        label='Email'
                        control={control}
                        rules={{
                          validate: (value: string) => RULE.WrongEmailFormat(value),
                        }}
                      />
                      <Input
                        type='password'
                        name='password'
                        label='Mật khẩu'
                        control={control}
                        rules={{
                          validate: (value: string) => RULE.atLeast8Characters(value, 'Mật khẩu'),
                        }}
                      />
                      <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                        <button type='submit' className='btn btn-primary btn-lg'>
                          Đăng nhập
                        </button>
                        <a href=''>Đăng ký</a>
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
    </div>
  )
}
