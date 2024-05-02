import * as React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton, MenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';

const Sort = () => {
  return (
    <div >
        <h3 className='text-[#6C727F] text-sm'>Sort by</h3>
        <Dropdown className="h-10 w-64 border border-[#282B30]">
            <MenuButton className="flex flex-row gap-32 h-10 w-64 pl-3 mt-2 border border-[#6C727F] rounded-xl items-center font-bold text-[#D2D5DA] text-base">Population <img src="/Expand_down.svg" alt="Correct" className="size-4 ml-2" /></MenuButton>
        </Dropdown>
    </div>
  )
}

export default Sort