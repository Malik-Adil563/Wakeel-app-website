/* eslint-disable quotes */
import { GrSecure } from 'react-icons/gr';
import { MdQueryStats } from 'react-icons/md';
import { PiChatsCircleBold } from 'react-icons/pi';
import { FaUserTie } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import { TfiHeadphoneAlt } from 'react-icons/tfi';

const ServicesData = [
  {
    title: 'Live Chats with Lawyers',
    description: 'Real-time Solutions, Right at Your Fingertips!',
    image: <PiChatsCircleBold />,
  },
  {
    title: 'Watch Status of Your Case',
    description: 'Stay Informed, Stay Confident!',
    image: <MdQueryStats />,
  },
  {
    title: 'Hiring Available Lawyers',
    description: 'Your Perfect Legal Match Awaits.',
    image: <FaUserTie />,
  },
  {
    title: 'Manage Your Account in Secure Form',
    description: 'Your Data, Your Control.',
    image: <GrSecure />,
  },
  {
    title: 'Payments Method Integration',
    description: 'Hassle-free Transactions, Total Peace of Mind',
    image: <GiPayMoney />,
  },
  {
    title: 'Customer Support',
    description: 'Our Team, Your Advocates, Always by Your Side',
    image: <TfiHeadphoneAlt />,
  },
];

export default ServicesData;
