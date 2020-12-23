//Import Images
// Images
// Bolt music player
import boltMusicPlayer from "./img/projects/bolt-music-player/bolt_music_player.PNG";
// Sff compatability tool
import sffCompatabilityTool from "./img/projects/sff-compatability-tool/sff_compatability_tool.jpg";
// React todo list
import reactTodoList from "./img/projects/react-todo-list/react_todo_list.jpg";
import { Redirect } from "react-router-dom";

export const ProjectState = () => {
  return [
    {
      title: "Bolt Music Player",
      description:
        "Music player app, users can play song from library, sort via artist and title and enable dark mode. Allowed me to practice native React, function components, css animation, responsive design principles. ",
      images: [
        {
          src: boltMusicPlayer,
          alt: "bolt music player",
        },
      ],
      url: "/projects/bolt-music-player",
      backgroundColor: "#d198ff",
      skillsDeveloped: [
        "Native React",
        "Function components",
        "React Bootstrap",
        "React Confetti Library",
        "Local storage principles",
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
      title: "Confetti Todo List",
      description:
        "Todo app, users can add new tasks, tick off, delete and undo delete. On completion of all tasks a confetti animation is trigerred. The background of the app is also random on each page refresh.",
      images: [
        {
          src: reactTodoList,
          alt: "todo list",
        },
      ],
      url: "/projects/confetti-todo-list",
      backgroundColor: "#60b1fc",
      skillsDeveloped: [
        "native React",
        "function components",
        "React Bootstrap",
        "css animation",
        "local storage principles",
        "cool-images and confetti-js libraries",
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
      title: "SFF Compatability Tool",
      description:
        "PC part compatability tool for small form factor PCs. Users can see what parts are compatile based on case and view an in depth part breakdown.",
      images: [
        {
          src: sffCompatabilityTool,
          alt: "sff compatability tool",
        },
      ],
      url: "/projects/sff-compatability-tool",
      backgroundColor: "#fff16e",
      skillsDeveloped: [
        "native React",
        "class components",
        "React Bootstrap",
        "JSON handling",
        "js-tile library",
      ],
      features: [
        {
          title: "Filter compatible parts",
          description:
            "Click on a case and compatible CPU coolers, PSUs and GPUs will be automatically filtered.",
        },
        {
          title: "Reverse filter",
          description: "Hover over the eye icon to highlight compatible cases.",
        },
        {
          title: "Breakdown",
          description:
            "After selecting a case, cooler, GPU and PSU a breakdown will be shown displaying a detailed spec. You can also scroll through other compatible parts.",
        },
      ],
    },
  ];
};
