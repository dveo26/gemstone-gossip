import React from 'react'
import GenderCheckbox from './GenderCheckbox'

export default function SignUp() {
  return <div className='flex flex-col items-center judtify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3x1 font-semibold text-center text-gray-300' style={{ color: 'white' }}>Sign Up <span className='text-blue-500'></span>
      </h1>
    <form>
      <div>
        <label className='label p-2'>
          <span className='text-base label-text' style={{ color: 'white' }}>Full Name</span>

        </label>
        <input type='text' placeholder='eg: Gopu Ram' className='w-full input input-bordered h-10'/>
      </div>


      <div>
        <label className='label p-2'>
          <span className='text-base label-text' style={{ color: 'white' }}>Username</span>
        </label>
        <input type='text' placeholder='eg: jaishreeram' className='w-full input input-bordered h-10'/>

      </div>

      <div>
        <label className='label p-2'>
          <span className='text-base label-text' style={{ color: 'white' }}>Password</span>
        </label>
        <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'/>

      </div>

      <div>
        <label className='label p-2'>
          <span className='text-base label-text' style={{ color: 'white' }}>Confirm Password</span>
        </label>
        <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10'/>

      </div>
      <GenderCheckbox/>

      <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white' href='#' >
        Already have an account?
      </a>
      <div>
        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
      </div>


    </form>

    </div>
  </div>
}
