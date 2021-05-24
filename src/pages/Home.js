import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import api from "../activities-api";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: null, isLoading: true };
  }

  async componentDidMount() {
    var levels;
    try {
      levels = await api.getLatest();
    } catch (e) {
      console.error(e);
      levels = null;
    }
    this.setState({ levels, isLoading: false });
  }

  render() {
    const { levels, isLoading } = this.state;

    if (isLoading) {
      return <div className="message">Cargando...</div>;
    }

    return (
      <div style={{ paddingTop: "10vh" }}>
        <Helmet>
          <title>Hack </title>
        </Helmet>

        <div className="levels">
          {levels &&
            levels.map((level) => (
              <Link to={`/level/${level.id}`} className="level" key={level.id}>
                {/* <span className='bg' style={{ backgroundImage: `url(${level.thumbnail})` }}></span> */}
                <span className="info">
                  <h2>{level.nivel}</h2>
                </span>
              </Link>
            ))}
        </div>
      </div>
    );
  }
}
