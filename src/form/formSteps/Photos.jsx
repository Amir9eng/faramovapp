// @ts-check

import React, { useRef } from 'react'
// @ts-ignore
import image from '/assets/image.svg'
import Button from '../../components/Button'
import White from '../../components/White'

const Photos = ({ form, setCurrentStep }) => {
  const fileRef = useRef(null)
  const isValidFileSize = id => {
    if (typeof FileReader !== 'undefined') {
      let size = document.getElementById(id)?.files[0].size
      // check file size
    }
  }

  const uploadImage = () => {
    fileRef?.current.click()
    console.log(fileRef.current)
  }

  return (
    <div className='px-12'>
      <div className='flex items-center justify-between py-10 w-[60%]'>
        <div className='flex justify-center items-center space-x-2'>
          <div className='h-[32px] w-[32px] rounded-full border-solid border-[1px] border-gray-300 flex justify-center items-center'>
            <h1 className='text-gray-400'>1</h1>
          </div>
          <div className='text-sm flex flex-col'>
            <p>PROPERTY</p>
            <p>DETAILS</p>
          </div>
        </div>
        <div className='w-[103px] bg-[#D3D3D3] h-[1px]'></div>

        <div className='flex justify-center items-center space-x-2'>
          <div className='h-[32px] w-[32px] rounded-full  bg-gray-300 border-solid border-[1px] flex justify-center items-center'>
            <h1 className='text-gray-300'>2</h1>
          </div>
          <div className='text-sm text-gray-400'>
            <p>ADDRESS</p>
            <p>DETAILS</p>
          </div>
        </div>
        <div className='w-[103px] bg-[#D3D3D3] h-[1px] ml-12'></div>
        <div className='flex justify-center items-center space-x-2'>
          <div className='h-[32px] w-[32px] rounded-full border-[#FF385C] border-solid border-[1px] flex justify-center items-center'>
            <h1 className='text-[#FF385C] font-semibold'>3</h1>
          </div>
          <div className='text-sm font-semibold text-[#FF385C]'>
            <p>PHOTOS</p>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <h2 className='text-3xl font-semibold my-8'>PHOTOS</h2>
        <span className='text-sm flex items-end'>(REQUIRED)</span>
      </div>

      <p className='text-center text-gray-400'>REQUIRED</p>
      <div
        className='relative w-[23.125rem] h-[8.3125rem] mx-auto items-center justify-center mt-4 border-dashed border-[1px] outline-none rounded-md'
        onClick={() => uploadImage()}
      >
        <input type='image' ref={fileRef} />
        <img src={image} alt='' className='mx-auto' />
        <p className='text-center mt-2'>Drop or Upload an image here</p>
      </div>
      <div className='flex space-x-4 mt-12 mx-auto'>
        <div className='w-[11.5625rem] h-[6.6875rem] border-dashed border-[2px]'></div>
        <div className='w-[11.5625rem] h-[6.6875rem] border-dashed border-[2px]'></div>
        <div className='w-[11.5625rem] h-[6.6875rem] border-dashed border-[2px]'></div>
        <div className='w-[11.5625rem] h-[6.6875rem] border-dashed border-[2px]'></div>
        <div className='w-[11.5625rem] h-[6.6875rem] border-dashed border-[2px]'></div>
      </div>

      <div className='flex'>
        <White
          name={'Back'}
          onClick={() => setCurrentStep(currentStep => currentStep - 1)}
        />
        <Button name={'Log Data'} onClick={() => console.log(form.values)} />
      </div>
    </div>
  )
}

export default Photos
