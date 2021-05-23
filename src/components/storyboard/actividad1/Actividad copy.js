import React, { Fragment, useEffect, useState } from "react";
import api from "../../../activities-api";
import { useHistory, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Achievement from "../achievement/achievement";

class Actividad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      background: null,
      dialogues: [],
      dialoguesFriends: [
        {
          dialog:
            "¡Hola yo me llamo Luisa! Me gusta mucho jugar videojuegos y tengo un perro llamado manchas…",
          character:
            "https://hack-girls-lat.herokuapp.com/img/avatars/girl_2_felix.png",
          background:
            "https://hack-girls-lat.herokuapp.com/img/one/pasillo6.png",
          options: [
            {
              text: "Hola Luisa, a mi no me gustan los videojuegos pero no tenemos que ser iguales para ser amigos :D",
              action: "Luisa ahora es tu amiga ",
              value: 1,
            },
            {
              text: "¿Videojuegos? Jajaja son una perdida de tiempo y te hacen mensa, deberías encontrar algo de niñas…",
              action: "Luisa se ha molestado",
              value: 0,
            },
          ],
        },
      ],
      counterPoints: 0,
      action: false,
      currentAction: "",
      currentFriend: 0,
      finished: false,
      finalMessage: "",
    };
  }
  routeChange = () => {
    let path = `newPath`;
  };
  closeDialog() {
    this.setState({ action: false });
    if (this.state.currentFriend < 2) {
      this.setState({ currentFriend: this.state.currentFriend + 1 });
    }
    if (this.state.counterPoints >= 2 && this.state.currentFriend >= 2) {
      this.setState({
        finished: true,
        finalMessage: this.state.data[0].activities[0].final_succes_dialog[0],
      });
    }
    if (this.state.counterPoints < 2 && this.state.currentFriend >= 2) {
      this.setState({
        finished: true,
        finalMessage: this.state.data[0].activities[0].final_repeat_dialog[0],
      });
    }
  }
  handleAction = (value, actionDialogue) => {
    if (value == 1) {
      console.log("YEEES");
      this.setState({ counterPoints: this.state.counterPoints + 1 });
      this.setState({ action: !this.state.action });
      this.setState({ currentAction: actionDialogue });
      console.log(this.state);
    } else {
      console.log("nooo");
      this.setState({ action: !this.state.action });
      this.setState({ currentAction: actionDialogue });
    }
  };
  async componentDidMount() {
    var data;
    var background;
    var dialogues;
    var dialoguesFriends;
    try {
      data = await api.getLatest();
      background = await data[0].activities[0].backgrounds[1];
      dialogues = await data[0].activities[0].teacher_dialogs;
      dialoguesFriends = await data[0].activities[0].friends_dialogs;
      console.log(data);
    } catch (e) {
      console.error(e);
      data = null;
    }
    this.setState({ data, background, dialoguesFriends });
  }
  render() {
    const {
      data,
      background,
      dialogues,
      counterPoints,
      dialoguesFriends,
      action,
      currentAction,
      currentFriend,
      finished,
    } = this.state;

    return (
      <div>
        <img
          src={dialoguesFriends[currentFriend].background}
          id="imgFondo"
        ></img>
        <div id="dialogue">{dialoguesFriends[currentFriend].dialog}</div>
        <img src={dialoguesFriends[currentFriend].character} id="imgMono"></img>
        <div style={{ position: "relative" }}>
          <div
            id="option-activity1"
            onClick={() =>
              this.handleAction(
                dialoguesFriends[currentFriend].options[0].value,
                dialoguesFriends[currentFriend].options[0].action
              )
            }
          >
            {dialoguesFriends[currentFriend].options[0].text}
          </div>
          <div
            id="option-activity1"
            onClick={() => {
              this.handleAction(
                dialoguesFriends[currentFriend].options[1].value,
                dialoguesFriends[currentFriend].options[1].action
              );
            }}
          >
            {dialoguesFriends[currentFriend].options[1].text}
          </div>
        </div>
        {action == true && currentFriend <= 2 ? (
          <div class="achievement">
            <h1 class="action-dialog">{currentAction}</h1>

            <button
              id="nextActivity"
              onClick={() => {
                this.closeDialog();
              }}
            >
              Siguiente{" "}
            </button>
          </div>
        ) : null}
        {finished ? (
          <Achievement frase={this.state.finalMessage}></Achievement>
        ) : null}
      </div>
    );
  }
}
export default Actividad;
