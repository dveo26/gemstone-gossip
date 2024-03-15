import React from 'react'

export default function () {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text' style={{ color: 'white' }}>Male</span>
                <input type='checkbox' className='checkbox border-slate-900'/>

            </label>
        </div>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text' style={{ color: 'white' }}>Female</span>
                <input type='checkbox' className='checkbox border-slate-900'/>
                    
            </label>

        </div>
    </div>
    
  )
}
