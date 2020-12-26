//Import Images
// Images
//Kumi's kitchen
import kumisKitchenBanner from "./img/projects/kumis-kitchen/banner.PNG";
import kumisKitchen from "./img/projects/kumis-kitchen/main.PNG";
import kumisKitchen2 from "./img/projects/kumis-kitchen/main2.PNG";
// Bolt music player
import boltMusicPlayer from "./img/projects/bolt-music-player/bolt_music_player.PNG";
// Sff compatability tool
import sffCompatabilityTool from "./img/projects/sff-compatability-tool/sff_compatability_tool.jpg";
// React todo list
import reactTodoList from "./img/projects/react-todo-list/react_todo_list.jpg";
// Portfolio v2
import portfolioV2 from "./img/projects/portfolio-v2/main.jpg";
// Rgb guessing game
import rgbGuessingGame from "./img/projects/rgb-guessing-game/main.jpg";
// Patatap clone
import patatapClone from "./img/projects/patatap-clone/main.jpg";
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
        "An ingredients app, users can search using an ingredient and see full ingredient lists for recipes. Results are gathered using Edamam's food API.",
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
          description: "“React used for UI.”",
          lineColor: "#FD99AB",
        },
        {
          title: "Edamam API",
          description: "“Used to gather receipe data based on user search”",
          lineColor: "#FD99AB",
        },
        {
          title: "Ingredient search",
          description: "“Search for recipes via ingredient.”",
          lineColor: "#FD99AB",
        },
        {
          title: "Framer motion",
          description: "“Framer motion library used to animate components.”",
          lineColor: "#FD99AB",
        },
      ],
    },
    {
      title: "Bolt Music Player",
      isReact: true,
      description:
        "Music player app, users can play song from library, sort via artist and title and enable dark mode. Allowed me to practice React, function components, css animation, responsive design principles. ",
      banner: { src: boltMusicPlayer, alt: "bolt music player banner" },
      images: [
        {
          src: boltMusicPlayer,
          alt: "bolt music player",
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
          title: "Dark Mode",
          description: "“Integrated dark mode present.”",
          lineColor: "#d198ff",
        },
        {
          title: "Library",
          description: "“Library view can be toggled on and off.”",
          lineColor: "#d198ff",
        },
        {
          title: "Open source songs",
          description: "“The latest chilled beats from https://chillhop.com”",
          lineColor: "#d198ff",
        },
      ],
    },
    {
      title: "SFF Compatability Tool",
      isReact: true,
      description:
        "PC part compatability tool for small form factor PCs. Users can see what parts are compatile based on case and view an in depth part breakdown.",
      banner: {
        src: sffCompatabilityTool,
        alt: "sff compatability tool banner",
      },
      images: [
        {
          src: sffCompatabilityTool,
          alt: "sff compatability tool",
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
          title: "Filter compatible parts",
          description:
            "Click on a case and compatible CPU coolers, PSUs and GPUs will be automatically filtered.",
          lineColor: "#fff16e",
        },
        {
          title: "Reverse filter",
          description: "Hover over the eye icon to highlight compatible cases.",
          lineColor: "#fff16e",
        },
        {
          title: "Breakdown",
          description:
            "After selecting a case, cooler, GPU and PSU a breakdown will be shown displaying a detailed spec. You can also scroll through other compatible parts.",
          lineColor: "#fff16e",
        },
        {
          title: "React tilt",
          description: "Library used to apply tilt animation to PC part tiles.",
          lineColor: "#fff16e",
        },
      ],
    },
    {
      title: "Confetti Todo List",
      isReact: true,
      description:
        "Todo app, users can add new tasks, tick off, delete and undo delete. On completion of all tasks a confetti animation is trigerred. The background of the app is also random on each page refresh.",
      banner: { src: reactTodoList, alt: "confetti todo list banner" },
      images: [
        {
          src: reactTodoList,
          alt: "todo list",
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
          title: "Classic functionality",
          description: "Add, tick off, delete and undo tasks.",
          lineColor: "#60b1fc",
        },
        {
          title: "Unique backgrounds",
          description:
            "Using the cool-images library a unique background on each render of the app keeps it from going stale.",
          lineColor: "#60b1fc",
        },
        {
          title: "Confetti animation",
          description:
            "Using the confetti-js library a confetti animation runs to motivate the user when the task list is completed.",
          lineColor: "#60b1fc",
        },
      ],
    },
    {
      title: "Portfolio v2",
      description:
        "Redesign of my orignal portfolio website. Completed as I wanted to redesign my portfolio without using Bootstrap and jQuery libraries.",
      banner: { src: portfolioV2, alt: "portfolio version 2 banner" },
      images: [
        {
          src: portfolioV2,
          alt: "portfolio version 2",
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
          description: "Used to ensure the app was responsive.",
          lineColor: "#92ff00",
        },
        {
          title: "Photoshop",
          description: "Photoshop used to edit the main images.",
          lineColor: "#92ff00",
        },
        {
          title: "Font Awesome",
          description:
            "Font Awesome icons used for skills and about section icons to provide consistency.",
          lineColor: "#92ff00",
        },
      ],
    },
    {
      title: "Patatap Clone",
      isReact: false,
      description:
        "A clone of Patatap, allows the user to play sounds using their keyboard. This was one of the first apps I worked on to develop my understanding of event listeners, functions, canvas and JS libraries.",
      banner: { src: patatapClone, alt: "patatap clone banner" },
      images: [
        {
          src: patatapClone,
          alt: "patatap clone",
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
            "This library was used to create the circular animations that are rendered on keypresses.",
          lineColor: "#fd3a82",
        },
        {
          title: "Howler.js",
          description:
            "This library was used to organize and play the audio files that are played on keypresses.",
          lineColor: "#fd3a82",
        },
        {
          title: "Bootstrap",
          description:
            "Boostrap grid used to ensure correct responsive behaviour.",
          lineColor: "#fd3a82",
        },
      ],
    },
    {
      title: "RGB Guessing Game",
      isReact: false,
      description:
        "Game where the aim is to guess the correct colored tile based on the RGB value shown. An easy and hard difficulty are in place. This was one of the first apps I worked on to develop my understanding of event listeners and functions.",
      banner: { src: rgbGuessingGame, alt: "rgb guessing game banner" },
      images: [
        {
          src: rgbGuessingGame,
          alt: "rgb guessing game",
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
          description: "Used to provide the logic for the game.",
          lineColor: "#4682B4",
        },
        {
          title: "Conditional statements",
          description:
            "Used within the logic to direct the game based on the user's actions.",
          lineColor: "#4682B4",
        },
      ],
    },
  ];
};
