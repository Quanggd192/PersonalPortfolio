import React from 'react'
import FilterChip from 'Components/Search/FilterChip'
export default function ToolboxSearchBox() {
  return (
    <div className='w-[full] h-[259px] border-[3px] border-solid border-primary rounded-[10px] mt-[90px] flex flex-wrap'>
      <div className='w-[35%] px-[15px]'>
        <div>Search for documents with the same</div>
        <div className='flex'>
          <div className='w-[100px]'>Type</div>
          <FilterChip enabled text="Noon report" />
        </div>
        <div className='flex'>
          <div className='w-[100px]'>Type</div>
          <FilterChip enabled text="Noon report" />
        </div>
        <div className='flex'>
          <div className='w-[100px]'>Type</div>
          <FilterChip enabled text="Noon report" />
        </div>
        <div className='flex'>
          <div className='w-[100px]'>Type</div>
          <FilterChip enabled text="Noon report" />
          <FilterChip enabled text="Noon report" />
          <FilterChip enabled text="Noon report" />
        </div>
      </div>
      <div className='w-[65%] bg-white rounded-r-[10px]'></div>
    </div>
  )
}
