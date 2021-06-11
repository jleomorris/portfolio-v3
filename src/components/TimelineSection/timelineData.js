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
        'ESLint',
        'Git',
        'Github',
        'SCSS',
        'Javascript (ES6)',
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
      subtitle: 'Saffron Interactive - London',
      content: [
        'ReactJS',
        'Redux',
        'SCSS',
        'Webpack',
        'Babel',
        'ESLint',
        'HTML',
        'JS (ES6)',
        'CSS',
        'Cypress',
        'jQuery',
        'Wordpress',
        'SVN',
        'bash',
        'cmd',
        'Powershell',
        'Windows/Linux servers',
        'AWS',
        'AD',
        'Employee Training',
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
      title: 'MSc Computer Science',
      subtitle: 'University Of Kent - Canterbury',
      content: [
        'Java',
        'Algorithms and Logic',
        'Graphics and Animation',
        'Systems Architecture',
        'Software Engineering',
        'Web-Based Systems Development',
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
      subtitle: 'ASDA - Essex',
      content: [
        'Leadership',
        'Communication',
        'Problem Solving',
        'Critical Thinking',
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
      title: 'BSc Forensic Biology',
      subtitle: 'University of Portsmouth -Portsmouth',
      content: [
        'Attention To Detail',
        'Time Management',
        'Problem Solving',
        'Decision Making',
        'Research',
      ],
    },
  ];
};
