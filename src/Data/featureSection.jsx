// featureSection.js
import { MessageCircle, UserCheck, Search } from 'lucide-react';

const featureSection = [
  {
    id: 1,
    title: 'Message',
    greenTitle: 'Privately',
    detail:
      'Your privacy is our priority. With end-to-end encryption, you can be sure that your personal messages stay between you and your lawyer, to ensure the privacy and security of the communication.',
    icon: <MessageCircle size={40} strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: 'Easy',
    greenTitle: 'To Hire',
    detail:
      'Hiring a lawyer through Wakeel is simple and efficient. You can begin by providing essential details about your legal situation within a few clicks. Our intuitive case evaluation feature helps match you with lawyers who have expertise in handling cases similar to yours, ensuring you receive tailored legal assistance.',
    icon: <UserCheck size={40} strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: 'Find The',
    greenTitle: 'Best lawyer',
    detail:
      "With Wakiel's smart search and filtering options, users can quickly narrow down their search for the best lawyer. Whether it's based on specialization, location, ratings, or fee structure, the app's intuitive interface simplifies the process of finding the most suitable legal expert.",
    icon: <Search size={40} strokeWidth={1.5} />,
  },
];

export default featureSection;
