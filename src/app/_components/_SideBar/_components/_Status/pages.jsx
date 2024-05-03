"use client"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Be_Vietnam_Pro } from 'next/font/google';

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "300"
})

const Status = () => {
  return (
    <div className='pl-4 '>
      <h3 className='text-[#6C727F] text-sm mt-3 text-left ml-[-10px]'>Status</h3>
      <FormGroup className='mt-2'>
        <div className='mb-2'>
        <FormControlLabel control={<Checkbox sx={{
          color: '#6C727F',
          '& .MuiSvgIcon-root': {
            fontSize: '1.75rem' 
          },
          width: '24px',
          height: '24px',
        }}/>} label={<span className={`${BeVietnamPro.className} font-bold text-[#D2D5DA] text-base ml-2`}>Member of The United Nations</span>}/>
        </div>
        <FormControlLabel  
        control={<Checkbox
          sx={{
          color: '#6C727F',
          '& .MuiSvgIcon-root': {
            fontSize: '1.75rem' 
          },
          '&.Mui-checked': {
            '& .MuiSvgIcon-root': {
              color: '#6C727F',
            }
          },
          width: '24px',
          height: '24px',
        }}
          className='font-bold text-[#D2D5DA] text-base'
        />} label={<span className={`${BeVietnamPro.className} text-[#D2D5DA] text-base font-bold ml-2`}>Independent</span>} />
      </FormGroup>
    </div>
  )
}

export default Status