// Images
// Kumi's kitchen
import kumisKitchenBanner from "./img/projects/kumis-kitchen/banner.jpg";
import kumisKitchen from "./img/projects/kumis-kitchen/main.jpg";
import kumisKitchen2 from "./img/projects/kumis-kitchen/main2.jpg";
// Bolt music player
import boltMusicPlayer from "./img/projects/bolt-music-player/bolt_music_player.jpg";
import boltMusicPlayer2 from "./img/projects/bolt-music-player/dark_2.jpg";
import boltMusicPlayer3 from "./img/projects/bolt-music-player/mobile.jpg";
// Sff compatability tool
import sffCompatabilityToolBanner from "./img/projects/sff-compatability-tool/sff_compatability_tool.jpg";
import sffCompatabilityTool from "./img/projects/sff-compatability-tool/main.jpg";
import sffCompatabilityTool2 from "./img/projects/sff-compatability-tool/main2.jpg";
import sffCompatabilityTool3 from "./img/projects/sff-compatability-tool/main3.jpg";
import sffCompatabilityTool4 from "./img/projects/sff-compatability-tool/main4.jpg";
// React todo list
import reactTodoListBanner from "./img/projects/react-todo-list/banner.jpg";
import reactTodoList from "./img/projects/react-todo-list/main.jpg";
import reactTodoList2 from "./img/projects/react-todo-list/main2.jpg";
// Portfolio v2
import portfolioV2Banner from "./img/projects/portfolio-v2/banner.jpg";
import portfolioV2 from "./img/projects/portfolio-v2/main.jpg";
import portfolioV22 from "./img/projects/portfolio-v2/main2.jpg";
import portfolioV23 from "./img/projects/portfolio-v2/main3.jpg";
import portfolioV24 from "./img/projects/portfolio-v2/main4.jpg";
import portfolioV25 from "./img/projects/portfolio-v2/main5.jpg";
// Rgb guessing game
import rgbGuessingGameBanner from "./img/projects/rgb-guessing-game/banner.jpg";
import rgbGuessingGame from "./img/projects/rgb-guessing-game/main.jpg";
import rgbGuessingGame2 from "./img/projects/rgb-guessing-game/main2.jpg";
// Patatap clone
import patatapCloneBanner from "./img/projects/patatap-clone/banner.jpg";
import patatapClone from "./img/projects/patatap-clone/main.jpg";
import patatapClone2 from "./img/projects/patatap-clone/main2.jpg";
import patatapClone3 from "./img/projects/patatap-clone/mobile.jpg";
// Font Awesome
import {
  faReact,
  faBootstrap,
  faCss3Alt,
  faJsSquare,
  faSass,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPuzzlePiece,
  faEdit,
  faCode,
  faHdd,
  faImages,
  faThumbsUp,
  faCompressAlt,
  faPalette,
  faMusic,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

export const ProjectState = () => {
  return [
    {
      title: "Kumi's kitchen",
      isReact: true,
      description:
        "A recipe app, users can search for recipe ingredient lists by food - results are gathered using Edamam's food API. Developed to increase my experience of ReactJS and the gathering and manipulating of API data.",
      banner: { src: kumisKitchenBanner, alt: "Kumi's kitchen banner" },
      images: [
        {
          src: kumisKitchen,
          alt: "Kumi's kitchen",
        },
        {
          src: kumisKitchen2,
          alt: "Kumi's kitchen",
        },
      ],
      url: "/projects/kumis-kitchen",
      githubDirectoryUrl: "https://github.com/jleomorris/kumis-kitchen",
      githubPagesUrl: "https://jleomorris.github.io/kumis-kitchen",
      backgroundColor: "#FD99AB",
      skillIconColor: "#FD99AB",
      skillsDeveloped: [
        { name: "React", icon: faReact },
        { name: "Function components", icon: faPuzzlePiece },
        { name: "React Bootstrap", icon: faBootstrap },
        { name: "Framer motion", icon: faArrowsAlt },
      ],
      features: [
        {
          title: "React",
          description: "App built in ReactJS using modern hooks",
          lineColor: "#FD99AB",
        },
        {
          title: "Ingredient search",
          description: "Search for recipes via ingredient",
          lineColor: "#FD99AB",
        },
        {
          title: "Edamam API",
          description: "Used to gather recipe data based on user search",
          lineColor: "#FD99AB",
        },
        {
          title: "Framer Motion",
          description: "Framer Motion library used to animate components",
          lineColor: "#FD99AB",
        },
      ],
    },
    {
      title: "Bolt Music Player",
      isReact: true,
      description:
        "A music player app, users can play a song from the library, sort via artist and title and enable dark mode.  Developed to increase my experience of ReactJS and modern hooks.",
      banner: { src: boltMusicPlayer, alt: "bolt music player banner" },
      images: [
        {
          src: boltMusicPlayer,
          alt: "bolt music player",
        },
        {
          src: boltMusicPlayer2,
          alt: "song playing",
        },
        {
          src: boltMusicPlayer3,
          alt: "mobile views",
        },
      ],
      url: "/projects/bolt-music-player",
      githubDirectoryUrl: "https://github.com/jleomorris/bolt-music-player",
      githubPagesUrl: "https://jleomorris.github.io/bolt-music-player/",
      backgroundColor: "#d198ff",
      skillIconColor: "#d198ff",
      skillsDeveloped: [
        { name: "React", icon: faReact },
        { name: "Function components", icon: faPuzzlePiece },
        { name: "React Bootstrap", icon: faBootstrap },
        { name: "Css animation", icon: faCss3Alt },
      ],
      features: [
        {
          title: "React",
          description: "App built in ReactJS using modern hooks",
          lineColor: "#d198ff",
        },
        {
          title: "Dark Mode",
          description: "Integrated dark mode present",
          lineColor: "#d198ff",
        },
        {
          title: "Library",
          description: "Library view can be toggled on and off",
          lineColor: "#d198ff",
        },
        {
          title: "Open source songs",
          description: "The latest chilled beats from https://chillhop.co",
          lineColor: "#d198ff",
        },
      ],
    },
    {
      title: "SFF Compatability Tool",
      isReact: true,
      description:
        "A PC part compatability tool for small form factor PCs. Users can see what parts are compatible based on case and view an in depth part breakdown.  Developed to increase my experience of ReactJS, class components and lifecycle methods.",
      banner: {
        src: sffCompatabilityToolBanner,
        alt: "banner",
      },
      images: [
        {
          src: sffCompatabilityTool,
          alt: "about",
        },
        {
          src: sffCompatabilityTool2,
          alt: "features",
        },
        {
          src: sffCompatabilityTool3,
          alt: "tool",
        },
        {
          src: sffCompatabilityTool4,
          alt: "breakdown",
        },
      ],
      url: "/projects/sff-compatability-tool",
      githubDirectoryUrl:
        "https://github.com/jleomorris/sff_compatability_tool",
      githubPagesUrl: "https://jleomorris.github.io/sff_compatability_tool",
      backgroundColor: "#fff16e",
      skillIconColor: "#fff16e",
      skillsDeveloped: [
        { name: "React", icon: faReact },
        { name: "Class components", icon: faPuzzlePiece },
        { name: "React Bootstrap", icon: faBootstrap },
        { name: "JSON", icon: faCode },
        { name: "React-Tilt", icon: faSquare },
      ],
      features: [
        {
          title: "React",
          description: "App built in ReactJS using class components",
          lineColor: "#fff16e",
        },
        {
          title: "Filter",
          description:
            "Select a case and only compatible CPU coolers, PSUs and GPUs will remain visible",
          lineColor: "#fff16e",
        },
        {
          title: "Reverse filter",
          description: "Hover over the eye icon to highlight compatible cases",
          lineColor: "#fff16e",
        },
        {
          title: "Breakdown",
          description:
            "After selecting a case, cooler, GPU and PSU a breakdown will be shown displaying a detailed spec. You can also scroll through other compatible parts",
          lineColor: "#fff16e",
        },
      ],
    },
    {
      title: "Confetti Todo List",
      isReact: true,
      description:
        " A Todo app, users can add new tasks, tick off, delete and undo delete. On completion of all tasks a confetti animation is trigerred, the background of the app is also random on each page render.  Developed to increase my experience of ReactJS, modern hooks and local storage principles.",
      banner: { src: reactTodoListBanner, alt: "confetti todo list banner" },
      images: [
        {
          src: reactTodoList,
          alt: "main interface",
        },
        {
          src: reactTodoList2,
          alt: "confetti raining down",
        },
      ],
      url: "/projects/confetti-todo-list",
      githubDirectoryUrl:
        "https://github.com/jleomorris/React_todo_list_confetti",
      githubPagesUrl: "https://jleomorris.github.io/React_todo_list_confetti/",
      backgroundColor: "#60b1fc",
      skillIconColor: "#60b1fc",
      skillsDeveloped: [
        { name: "React", icon: faReact },
        { name: "Function components", icon: faPuzzlePiece },
        { name: "React Bootstrap", icon: faBootstrap },
        { name: "Css animation", icon: faCss3Alt },
        { name: "Local storage principles", icon: faHdd },
        { name: "Cool-images", icon: faImages },
        { name: "Confetti-js", icon: faThumbsUp },
      ],
      features: [
        {
          title: "React",
          description: "App built in ReactJS using class components",
          lineColor: "#60b1fc",
        },
        {
          title: "Classic functionality",
          description: "Add, tick off, delete and undo deletion of tasks",
          lineColor: "#60b1fc",
        },
        {
          title: "Unique backgrounds",
          description:
            "Using the cool-images library a unique background on each render of the app keeps things from going stale",
          lineColor: "#60b1fc",
        },
        {
          title: "Confetti animation",
          description:
            "Using the confetti-js library a confetti animation motivates the user when their task list is complete",
          lineColor: "#60b1fc",
        },
      ],
    },
    {
      title: "Portfolio v2",
      description:
        "Redesign of my orignal portfolio website. Completed as I wanted to redesign my portfolio without relying on Bootstrap and jQuery. Allowed me to practice css grid and responsive design principles.",
      banner: { src: portfolioV2Banner, alt: "banner" },
      images: [
        {
          src: portfolioV2Banner,
          alt: "banner",
        },
        {
          src: portfolioV2,
          alt: "about",
        },
        {
          src: portfolioV22,
          alt: "skills",
        },
        {
          src: portfolioV23,
          alt: "projects carousel",
        },
        {
          src: portfolioV24,
          alt: "custom desktop",
        },
        {
          src: portfolioV25,
          alt: "custom desktop",
        },
      ],
      url: "/projects/portfolio-v2",
      githubDirectoryUrl: "https://github.com/jleomorris/portfolio-redesign",
      githubPagesUrl: "https://jleomorris.github.io/portfolio-redesign/",
      backgroundColor: "#92ff00",
      skillIconColor: "#92ff00",
      skillsDeveloped: [
        { name: "Vanilla JS", icon: faJsSquare },
        { name: "SCSS", icon: faSass },
        { name: "CSS grid", icon: faCss3Alt },
        { name: "Responsive design principles", icon: faCompressAlt },
        { name: "Photoshop", icon: faEdit },
        { name: "Font Awesome", icon: faFontAwesome },
      ],
      features: [
        {
          title: "CSS Grid",
          description: "Used for layout and responsiveness",
          lineColor: "#92ff00",
        },
        {
          title: "Photoshop",
          description: "Used for ediingt of main images",
          lineColor: "#92ff00",
        },
        {
          title: "Font Awesome",
          description:
            "Font Awesome icons used for skills and about section icons to provide consistency",
          lineColor: "#92ff00",
        },
      ],
    },
    {
      title: "Patatap Clone",
      isReact: false,
      description:
        "A clone of Patatap, allows the user to play sounds using their keyboard. This was one of the first apps I worked on to develop my understanding of event listeners, functions, canvas and JS libraries.",
      banner: { src: patatapCloneBanner, alt: "banner" },
      images: [
        {
          src: patatapClone,
          alt: "patatap clone",
        },
        {
          src: patatapClone2,
          alt: "keys pressed",
        },
        {
          src: patatapClone3,
          alt: "mobile",
        },
      ],
      url: "/projects/patatap-clone",
      githubDirectoryUrl: "https://github.com/jleomorris/patatap-clone",
      githubPagesUrl: "https://jleomorris.github.io/patatap-clone/",
      backgroundColor: "#fd3a82",
      skillIconColor: "#fd3a82",
      skillsDeveloped: [
        { name: "Vanilla JS", icon: faJsSquare },
        { name: "CSS", icon: faCss3Alt },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "Paper.js", icon: faPalette },
        { name: "Howler.js", icon: faMusic },
      ],
      features: [
        {
          title: "Paper.js",
          description:
            "This library was used to create the circular animations that are rendered on keypresses",
          lineColor: "#fd3a82",
        },
        {
          title: "Howler.js",
          description:
            "This library was used to organize and play the audio files that are played on keypresses",
          lineColor: "#fd3a82",
        },
        {
          title: "Bootstrap",
          description:
            "Boostrap grid used to ensure correct responsive behaviour",
          lineColor: "#fd3a82",
        },
      ],
    },
    {
      title: "RGB Guessing Game",
      isReact: false,
      description:
        "Game where the aim is to guess the correct colored tile based on the RGB value shown. An easy and hard difficulty are in place. This was one of the first apps I worked on to develop my understanding of event listeners and functions.",
      banner: { src: rgbGuessingGameBanner, alt: "banner" },
      images: [
        {
          src: rgbGuessingGame,
          alt: "hard mode",
        },
        {
          src: rgbGuessingGame2,
          alt: "easy mode",
        },
      ],
      url: "/projects/rgb-guessing-game",
      githubDirectoryUrl: "https://github.com/jleomorris/rgb-guessing-game",
      githubPagesUrl: "https://jleomorris.github.io/rgb-guessing-game/",
      backgroundColor: "#4682B4",
      skillIconColor: "#4682B4",
      skillsDeveloped: [
        { name: "Vanilla JS", icon: faJsSquare },
        { name: "CSS", icon: faCss3Alt },
      ],
      features: [
        {
          title: "Vanilla JS",
          description: "Used to provide the logic for the game",
          lineColor: "#4682B4",
        },
        {
          title: "Conditional statements",
          description:
            "Used within the logic to direct the game based on the user's actions",
          lineColor: "#4682B4",
        },
      ],
    },
  ];
};
