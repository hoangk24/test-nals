import Input from 'components/input/Input'
import { RULE } from 'constants/rules/rule'
import useAuth from 'pages/auth/useAuth'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {
  const { control, handleSubmit, watch } = useForm()
  const [file, setFile] = useState()
  const { register } = useAuth()
  function handleChange(event: any) {
    setFile(event.target.files[0])
  }
  const onSubmit = (data: any) => {
    register({ ...data, avatar: file })
  }
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }
  return (
    <div className='vh-100' style={{ backgroundColor: '#eee' }}>
      <div className='container h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-lg-12 col-xl-11'>
            <div className='card text-black' style={{ borderRadius: '25px' }}>
              <div className='card-body p-md-5'>
                <div className='row justify-content-center'>
                  <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                    <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Sign up</p>
                    <div className='avatar'>
                      <img src='' alt='' />
                    </div>
                    <input type={'file'} onChange={handleChange} />
                    <form onSubmit={handleSubmit(onSubmit)} className='mx-1 mx-md-4'>
                      <Input
                        name='username'
                        label='Tài khoản'
                        control={control}
                        rules={{
                          validate: (value: string) =>
                            RULE.within50Characters(value, 'Tên tài khoản'),
                        }}
                      />
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
                      <Input
                        type='password'
                        name='confirm-password'
                        label='Xác nhận mật khẩu'
                        control={control}
                        rules={{
                          validate: (value: string) =>
                            RULE.ComparePassword(value, watch('password'), 'Xác nhận'),
                        }}
                      />
                      <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                        <button type='submit' className='btn btn-primary btn-lg'>
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
    </div>
  )
}
