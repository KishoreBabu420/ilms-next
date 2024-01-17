import { FaHome } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';

import { HiBuildingOffice2 } from 'react-icons/hi2';

import { GrDomain } from 'react-icons/gr';
import { MdSubtitles } from 'react-icons/md';

import { FaMountainCity } from 'react-icons/fa6';
import { TbBuildingEstate } from 'react-icons/tb';

import { MdLanguage } from 'react-icons/md';
import { CgAttribution } from 'react-icons/cg';
import { FaUserAstronaut } from 'react-icons/fa';

import { MdEvent } from 'react-icons/md';

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
    href: '/dashboard/main-module',
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

  {
    icon: (
      <MdLanguage
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Language',
    href: '/dashboard/language',
  },

  {
    icon: (
      <CgAttribution
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Attributes',
    href: '/dashboard/attributes',
  },

  {
    icon: (
      <FaUserAstronaut
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'User Log',
    href: '/dashboard/user-log',
  },

  {
    icon: (
      <MdEvent
        size={25}
        className='h-5 w-5 text-gray-500 dark:text-gray-400'
      />
    ),
    text: 'Event Log',
    href: '/dashboard/event-log',
  },
];

export { menuItems };
