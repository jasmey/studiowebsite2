import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { IoSchoolSharp } from "react-icons/io5";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaSchool } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { MdTipsAndUpdates } from "react-icons/md";
import { FaMusic } from "react-icons/fa6";


export const SidebarData = [
  {
    title: 'Overview',
    path: '/handbook',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Degree Reqs',
    path: '/reqs',
    icon: <IoSchoolSharp />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    

    subNav: [
      {
        title: 'Recitals',
        path: '/reqs/recitals',
        icon: <BsFillCameraReelsFill />,
        cName: 'sub-nav'
      },
      {
        title: 'Juries',
        path: '/reqs/juries',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Lessons',
        path: '/reqs/lessons',
        icon: <FaSchool/>
      },
      {
        title: 'Studio Class',
        path: '/reqs/studioclass',
        icon: <FaPeoplePulling />
      }
    ]
  },
  {
    title: 'Tips and Tricks',
    path: '/tips',
    icon: <MdTipsAndUpdates />
  },
  {
    title: 'Music in Chicago',
    path: '/musicinchicago',
    icon: <FaMusic/>
  },
  {
    title: 'Guide to Bienen',
    path: '/guidetobienen',
    icon: <FaIcons.FaMap />
    
  }
];