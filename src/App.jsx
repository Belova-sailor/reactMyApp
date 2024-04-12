import { Component } from "react";
import CardList from "./components/card-list/card-list.jsx";
import CardAboutMe from "./components/card-about-me/card-about-me.jsx";
import CardFuture from "./components/card-list-future/card-list-future.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "HTML", src: "../src/assets/html.png", id: 1 },
        { name: "CSS", src: "../src/assets/css.png", id: 2 },
        { name: "JS", src: "../src/assets/js.png", id: 3 },
        { name: "GIT", src: "../src/assets/git.png", id: 4 },
      ],
      dataAboutMe: [
        { name: "Юлия Белова", src: "../src/assets/myPhoto2.jpg", id: 5 },
      ],
      dataFuture: [
        { name: "TypeScript", src: "../src/assets/typescript.png", id: 6 },
        { name: "PostgreSQL", src: "../src/assets/postgres.png", id: 7 },
        { name: "React", src: "../src/assets/react.png", id: 8 },
        { name: "Алгоритмы и структуры данных", src: "../src/assets/algorithms.png", id: 9,},
        { name: "Webpack", src: "../src/assets/webpack.png", id: 10 },
        { name: "NodeJS", src: "../src/assets/nodejs.png", id: 11 },
        { name: "NPM", src: "../src/assets/npm.png", id: 12 },
        { name: "KNEX", src: "../src/assets/knex.png", id: 13 },
        { name: "MobX", src: "../src/assets/mobx-logo.png", id: 14 },
        { name: "MaterialUI", src: "../src/assets/materialUI.png", id: 15 },
      ],
    };
  }

  render() {
    const { data, dataAboutMe, dataFuture } = this.state;

    return (
      <div className="app">
        <CardAboutMe dataAboutMe={dataAboutMe} />
        <CardList data={data} />
        <CardFuture dataFuture={dataFuture} />
      </div>
    );
  }
}

export default App;
