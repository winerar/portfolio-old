export type ProjectInfo = {
  name: string;
  images: Array<string>;
  stack: Array<Stack>;
  repo: string;
};

export enum Stack {
  HTML = "HTML",
  CSS = "CSS",
  JS = "JavaScript",
  TS = "TypeScript",
  React = "React",
  Node = "Node.js",
  Redux = "Redux",
  ReduxToolkit = "Redux Toolkit",
  ReactRouter = "React Router",
}
