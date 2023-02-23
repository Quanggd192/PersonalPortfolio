import React from 'react'
import toolboxDraftImg from 'assets/images/documents/toolbox-draft.png'
import ToolboxSearchBox from './ToolboxComponents/ToolboxSearchBox'

const data = {
  doc_type: "Toolbox meeting",
  vessel: "Northen Star",
  submitted_by: "Wolfgang Hilderbrandt",
  template: "Apex toolbox meeting 1",
  local_time: "25/05/2023 12:14 AM",
  ship_time: "25/05/2023 12:14 AM",
  equipment: "Valve 1, Pump 2, Piston 3,",
  content: 'This is the distribution of tasks for today. The 3rd Engineer will be responsible for refitting valves No 2 and 3. 2nd Engineer is assigned to refitting task of tank pump No 3. 4th Engineer is assigned to support the 3rd. This is the distribution of tasks for today. The 3rd Engineer will be responsible for refitting valves No 2 and 3. 2nd Engineer is assigned to refitting task of tank pump No 3. 4th Engineer is assigned to support the 3rd. This is the distribution of tasks for today. The 3rd Engineer will be responsible for refitting valves No 2 and 3. 2nd Engineer is assigned to refitting task of tank pump No 3. 4th Engineer is assigned to support the 3rd'
}
export default function ToolboxMeeting() {
  return (
    <div className='flex text-lg leading-[29px]'>
      <div className='w-1/3'>
        <div className='flex flex-wrap'>
          <div className='w-2/5'>Document type</div>
          <div className='w-3/5 font-bold'>{data.doc_type}</div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-2/5'>Vessel</div>
          <div className='w-3/5 font-bold'>{data.vessel}</div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-2/5'>Submitted by</div>
          <div className='w-3/5 font-bold'>{data.submitted_by}</div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-2/5'>Template</div>
          <div className='w-3/5 font-bold'>{data.template}</div>
        </div>
        <div>
          <div>Formatted Document ( 4 pages )</div>
          <div className='py-[30px]'>
            <img src={toolboxDraftImg} />
          </div>
        </div>
      </div>
      <div className='w-2/3 pl-[20px]'>
        <div className='flex'>
          <div className='min-w-[200px]'>Submitted at ( local time )</div>
          <div className='font-bold'>{data.local_time}</div>
        </div>
        <div className='flex'>
          <div className='min-w-[200px]'>Submitted at ( ships’ time ) </div>
          <div className='font-bold'>{data.ship_time}</div>
        </div>
        <div className='flex'>
          <div className='min-w-[200px]'>Equipment involved</div>
          <div className='font-bold'>{data.equipment}</div>
        </div>
        <div className='flex'>
          <div className='min-w-[200px]'>Content</div>
          <div className='py-[20px] px-[10px] border border-solid border-primary'>{data.content}</div>
        </div>
        <ToolboxSearchBox />
      </div>
    </div>
  )
}
