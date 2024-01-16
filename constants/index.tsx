import { FaHome } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';

import { HiBuildingOffice2 } from 'react-icons/hi2';

import { GrDomain } from 'react-icons/gr';
import { MdSubtitles } from 'react-icons/md';

import { FaMountainCity } from 'react-icons/fa6';
import { TbBuildingEstate } from 'react-icons/tb';

const menuItems = [
  {
    icon: (
      <FaHome
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Home',
  },
  {
    icon: (
      <MdAdminPanelSettings
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Admin',
  },
  {
    icon: (
      <HiBuildingOffice2
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Company',
  },

  {
    icon: (
      <GrDomain
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Main Module',
  },
  {
    icon: (
      <MdSubtitles
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Sub Module',
  },

  {
    icon: (
      <FaMountainCity
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Country',
  },

  {
    icon: (
      <TbBuildingEstate
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'State',
  },
];

export { menuItems };
