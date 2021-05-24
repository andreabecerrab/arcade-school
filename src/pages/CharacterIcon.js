import React from "react";
import api from "../activities-api";

class CharacterIcon extends React.Component {
  constructor() {
    super();
    this.avatar_index = 4;
  }

  async backAvatars() {
    var data;
    var index;
    try {
      data = await api.getAvatars();
      index = this.avatar_index - 1;
      console.log(data["children"][index]);
      this.avatar_index = index;
    } catch (e) {
      console.error(e);
      data = null;
    }
    // this.setState({ data, background, dialoguesFriends });
  }

  async avatars() {
    var data;
    try {
      data = await api.getAvatars();
      console.log(data["children"]);
      console.log(this.avatar_index);
      console.log(data["children"][this.avatar_index]);
    } catch (e) {
      console.error(e);
      data = null;
    }
    // this.setState({ data, background, dialoguesFriends });
  }
  render() {
    var avatar =
      "https://hack-girls-lat.herokuapp.com/img/avatars/girl_1_feliz.png";

    return (
      <div className="menu-background" style={{ paddingTop: "10vh" }}>
        <div className="menu-card personaje">
          <img
            src="https://hack-girls-lat.herokuapp.com/img/avatars/girl_1_feliz.png"
            alt=""
          />

          <button
            onClick={() => {
              this.backAvatars(this.avatar_index);
            }}
          >
            <img src="/img/back-circle-outline.png" alt=""></img>
          </button>
          <button
            onClick={() => {
              this.avatars(this.avatar_index);
            }}
            id="seleccionar"
          >
            Seleccionar
          </button>
          <button>
            <img src="/img/next-circle-outline.png" alt=""></img>
          </button>
        </div>
      </div>
    );
  }
}

export default CharacterIcon;
