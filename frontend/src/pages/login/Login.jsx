import React from 'react'

const Login = () => {
  return (
    <>
    <div  className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100'>
        <h1 className='text-3x1 font-semibold text-center text-gray-300'>Login
        <span className='text-blue-500'>webchatting</span>
        </h1>
        <form>
          <div>
            <lable className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </lable>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label'>
             <span className='text-base label-text'>Password</span> 
            </label>
            <input
             type='password'
             placeholder='Enter password'
             className='w-full input input-bordered h-10'
            />
            
          </div>
          <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Don't"} have an account?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login