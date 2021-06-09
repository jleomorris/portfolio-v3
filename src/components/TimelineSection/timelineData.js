// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faBootstrap,
  faCss3Alt,
  faJsSquare,
  faSass,
  faFontAwesome,
} from '@fortawesome/free-brands-svg-icons';
import {
  faShoppingCart,
  faGraduationCap,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { theme } from '../Theme';

export const timelineData = () => {
  const developerIcon = () => <FontAwesomeIcon icon={faLaptopCode} />;
  const educationIcon = () => <FontAwesomeIcon icon={faGraduationCap} />;
  const asdaIcon = () => <FontAwesomeIcon icon={faShoppingCart} />;

  return [
    {
      contentStyle: {
        background: theme.timelineBackground,
        color: theme.timelineFontColor,
      },
      contentArrowStyle: {
        borderRight: `7px solid ${theme.timelineBackground}`,
      },
      date: 'March 2021 - present',
      iconStyle: { background: theme.timeline.icon.jobColor, color: '#fff' },
      icon: developerIcon(),
      title: 'React Developer',
      subtitle: 'IronmongeryDirect - Basildon, Essex',
      content: [
        'ReactJS',
        'Redux',
        'Webpack',
        'Babel',
        'ESLint configuration',
        'Git',
        'Github',
        'SCSS',
        'Javascript',
        'HTML',
        'ASP.net',
        'CSHTML',
      ],
    },
    {
      contentStyle: {
        background: theme.timelineBackground,
        color: theme.timelineFontColor,
      },
      contentArrowStyle: {
        borderRight: `7px solid ${theme.timelineBackground}`,
      },
      date: 'Sept 2019 - March 2021',
      iconStyle: { background: theme.timeline.icon.jobColor, color: '#fff' },
      icon: developerIcon(),
      title: 'Front End Developer and IT Technician',
      subtitle: 'Saffron Interactive, London',
      content: [
        'ReactJS',
        'SCSS',
        'Webpack',
        'Babel',
        'ESLint configuration',
        'HTML',
        'JS',
        'CSS',
        'jQuery',
        'SVN',
        'AD',
      ],
    },
    {
      contentStyle: {
        background: theme.timelineBackground,
        color: theme.timelineFontColor,
      },
      contentArrowStyle: {
        borderRight: `7px solid ${theme.timelineBackground}`,
      },
      date: 'Sept 2018 - Sept 2020',
      iconStyle: {
        background: theme.timeline.icon.educationColor,
        color: '#fff',
      },
      icon: educationIcon(),
      title: 'MSC Computer Science',
      subtitle: 'University Of Kent, Canterbury',
      content: [
        'Logic Programming',
        'Graphics and Animation',
        'Systems',
        'Web Development',
        'Java',
      ],
    },
    {
      contentStyle: {
        background: theme.timelineBackground,
        color: theme.timelineFontColor,
      },
      contentArrowStyle: {
        borderRight: `7px solid ${theme.timelineBackground}`,
      },
      date: '2014 - 2018',
      iconStyle: { background: theme.timeline.icon.jobColor, color: '#fff' },
      icon: asdaIcon(),
      title: 'Team Leader',
      subtitle: 'ASDA, Essex',
      content: [
        'Managerial skills',
        'communication',
        'problem solving',
        'critical thinking',
      ],
    },
    {
      contentStyle: {
        background: theme.timelineBackground,
        color: theme.timelineFontColor,
      },
      contentArrowStyle: {
        borderRight: `7px solid ${theme.timelineBackground}`,
      },
      date: '2011 - 2014',
      iconStyle: {
        background: theme.timeline.icon.educationColor,
        color: '#fff',
      },
      icon: educationIcon(),
      title: 'Bsc Forensic Biology',
      subtitle: 'University of Portsmouth, Portsmouth',
      content: [
        'Creative Direction',
        'User Experience',
        'Visual Design',
        'Project Management',
        'Team Leading',
      ],
    },
  ];
};
