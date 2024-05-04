import * as React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';

const Sort = ({selectedSort}) => {
  const [sortBy, setSortBy] = React.useState('Population')

  const handleSortChange = (menuItem) => {
    setSortBy(menuItem)
    selectedSort(menuItem)
  };

  React.useEffect(() => {
  }, [sortBy]);

  return (
    <div>
      <h3 className='text-[#6C727F] text-sm'>Sort by</h3>
      <Dropdown className="h-10 w-64 border border-[#282B30]">
        <MenuButton className="flex flex-row justify-between gap-32 h-10 w-full pl-3 pr-3 mt-2 border border-[#6C727F] rounded-xl items-center font-bold text-[#D2D5DA] text-base">
          <p>{sortBy}</p>  
          <img src="/Expand_down.svg" alt="Correct" className="size-4 ml-2" />
        </MenuButton>
        <Menu 
          value={sortBy} 
          className="h-[110px] w-64 border p-3 border-[#282B30] bg-[#282B30] font-bold text-[#D2D5DA] rounded-xl">
          <MenuItem 
          onClick={() => handleSortChange('Name')}
          className='hover:bg-sky-700 cursor-pointer rounded-md pl-3'
          >
            Name
        </MenuItem>
          <MenuItem 
          onClick={() => handleSortChange('Population')}
          className='hover:bg-sky-700 cursor-pointer rounded-md pl-3'
          >
            Population
          </MenuItem>
          <MenuItem 
          onClick={() => handleSortChange('Area (km²)')}
          className='hover:bg-sky-700 cursor-pointer rounded-md pl-3'
          >
            Area (km²)
          </MenuItem>
          <MenuItem 
          onClick={() => handleSortChange('Region')}
          className='hover:bg-sky-700 cursor-pointer rounded-md pl-3'
          >
            Region
          </MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
};

export default Sort;
