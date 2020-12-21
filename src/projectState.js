//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";
import boltMusicPlayer from "./img/bolt_music_player.PNG";
import { Redirect } from "react-router-dom";

export const ProjectState = () => {
  return [
    {
      title: "Bolt Music Player",
      description:
        "Music player app, users can play song from library, sort via artist and title and enable dark mode. Allowed me to practice native React, function components, css animation, responsive design principles. ",
      mainImage: boltMusicPlayer,
      secondaryImage: athlete2,
      imageAlt: "bolt music player",
      url: "/projects/bolt-music-player",
      backgroundColor: "#776189",
      titleColor: "dark",
      awards: [
        {
          title: "Dark Mode",
          description: "“Integrated dark mode present.”",
        },
        {
          title: "Library",
          description: "“Library view can be toggled on and off.”",
        },
        {
          title: "Open source songs",
          description: "“The latest chilled beats from https://chillhop.com”",
        },
      ],
    },
    {
      title: "Confetti Todo List",
      mainImage: goodtimes,
      url: "/projects/confetti-todo-list",
      secondaryImage: goodtimes2,
      imageAlt: "confetti todo list",
      backgroundColor: "#173451",
      titleColor: "light",
      awards: [
        {
          title: "Classic functionality",
          description: "Add, tick off, delete and undo tasks.",
        },
        {
          title: "Unique backgrounds",
          description:
            "Using the cool-images library a unique background on each render of the app keeps it from going stale.",
        },
        {
          title: "Confetti animation",
          description:
            "Using the confetti-js library a confetti animation runs to motivate the user when the task list is completed.",
        },
      ],
    },
    {
      title: "SFF Compatability Tool",
      description:
        "PC part compatability tool for small form factor PCs. Users can see what parts are compatile based on case and view an in depth part breakdown.",
      mainImage: theracer,
      url: "/projects/sff-compatability-tool",
      secondaryImage: theracer2,
      imageAlt: "sff compatability tool",
      backgroundColor: "#805E83",
      titleColor: "light",
      awards: [
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
