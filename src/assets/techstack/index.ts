// Tech stack assets module - consolidates all tech stack icons
import Bootstrap from "./Bootstrap.svg";
import CSS from "./CSS.svg";
import Docker from "./Docker.svg";
import GithubLight from "./Github-Light.svg";
import HTML from "./HTML.svg";
import JavaLight from "./Java-Light.svg";
import JavaScript from "./JavaScript.svg";
import ReactLight from "./React-Light.svg";
import TailwindCSSLight from "./TailwindCSS-Light.svg";
import TensorFlowLight from "./TensorFlow-Light.svg";
import TypeScript from "./TypeScript.svg";

import fastapi from "./fastapi.svg";
import git from "./git.svg";
import laravel from "./laravel.svg";
import mysql from "./mysql.svg";
import numpy from "./numpy.svg";
import pandas from "./pandas.svg";
import php from "./php.svg";
import postgresql from "./postgresql.svg";
import python from "./python.svg";
import scikitlearn from "./scikitlearn.svg";
import spring from "./spring.svg";
import angular from "./angular.svg";
import figma from "./figma.svg";
import FlutterLight from "./Flutter-Light.svg";
import LaTeXLight from "./LaTeX-Light.svg";

export const techStackIcons = {
  Bootstrap,
  CSS,
  Docker,
  GithubLight,
  HTML,
  JavaLight,
  JavaScript,
  ReactLight,
  TailwindCSSLight,
  TensorFlowLight,
  TypeScript,
  fastapi,
  git,
  laravel,
  mysql,
  numpy,
  pandas,
  php,
  postgresql,
  python,
  scikitlearn,
  spring,
  FlutterLight,
  LaTeXLight,
  angular,
  figma,
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(
  ([name, icon]) => ({
    name,
    icon,
  }),
);

export default techStackIcons;
