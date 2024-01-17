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
    href: '/dashboard',
  },
  {
    icon: (
      <MdAdminPanelSettings
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Admin',
    href: '/dashboard/admin',
  },
  {
    icon: (
      <HiBuildingOffice2
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Company',
    href: '/dashboard/company',
  },

  {
    icon: (
      <GrDomain
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Main Module',
    href: '/dashboard/admin',
  },
  {
    icon: (
      <MdSubtitles
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Sub Module',
    href: '/dashboard/sub-module',
  },

  {
    icon: (
      <FaMountainCity
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Country',
    href: '/dashboard/country',
  },

  {
    icon: (
      <TbBuildingEstate
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'State',
    href: '/dashboard/state',
  },
];

export { menuItems };
