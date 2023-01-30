// @ts-check

import React from 'react'
import Button from '../../components/Button'
import White from '../../components/White'
import Select from './../../components/Select'

const Details = ({ form, setCurrentStep }) => {
  return (
    <section className='px-16 '>
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
          <div className='h-[32px] w-[32px] rounded-full  bg-[#FF385C] border-solid border-[1px] flex justify-center items-center'>
            <h1 className='text-white'>2</h1>
          </div>
          <div className='text-sm text-gray-400'>
            <p>ADDRESS</p>
            <p>DETAILS</p>
          </div>
        </div>
        <div className='w-[103px]  h-[1px] ml-12'></div>
        <div className='flex justify-center items-center space-x-2'>
          <div className='h-[32px] w-[32px] rounded-full border-gray-300 border-solid border-[1px] flex justify-center items-center'>
            <h1 className='text-gray-400'>3</h1>
          </div>
          <div className='text-sm text-gray-400'>
            <p>PHOTOS</p>
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-400 h-[1px]'></div>

      <h2 className='text-3xl font-semibold my-8'>ADDRESS DETAILS</h2>
      <div className='flex justify-between w-[90%]'>
        <aside className='space-y-4'>
          <Select
            name={'Search Address'}
            placeholder={'Property Address'}
            options={[
              { name: 'Residential', value: 'Residential' },
              { name: 'Industrial', value: 'Industrial' },
              { name: 'Special Use', value: 'Special Use' }
            ]}
          />
          <Select
            name={'State'}
            placeholder={'State'}
            options={[
              {
                name: 'Magnolia Group Real Estate',
                value: 'Magnolia Group Real Estate'
              },
              { name: 'Cardinal Realty', value: 'Cardinal Realty' }
            ]}
          />
        </aside>
        <aside className='space-y-4'>
          <Select
            name={'City'}
            placeholder={'Select City'}
            options={[
              { name: 'Residential', value: 'Residential' },
              { name: 'Industrial', value: 'Industrial' },
              { name: 'Special Use', value: 'Special Use' }
            ]}
          />
          <Select
            name={'Apartment Number'}
            placeholder={'1'}
            options={[
              {
                name: 'Magnolia Group Real Estate',
                value: 'Magnolia Group Real Estate'
              },
              { name: 'Cardinal Realty', value: 'Cardinal Realty' }
            ]}
          />
        </aside>
      </div>
      <div className='flex'>
        <White
          name={'Back'}
          onClick={() => setCurrentStep(currentStep => currentStep - 1)}
        />
        <Button
          name={'Next'}
          onClick={() => setCurrentStep(currentStep => currentStep + 1)}
        />
      </div>
    </section>
  )
}

export default Details
