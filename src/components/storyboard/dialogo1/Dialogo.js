import React from "react";
import api from "../../../activities-api";

export default class Dialogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      background: null,
      dialogues: [],
      counterDialog: 0,
    };
  }

  handleClick() {
    // Changing
    if (this.state.counterDialog >= this.state.dialogues.length - 1) {
      this.props.history.push("/level/activity/1");
    } else {
      this.setState({ counterDialog: this.state.counterDialog + 1 });
    }
  }
  async componentDidMount() {
    var data;
    var background;
    var dialogues;
    try {
      data = await api.getLatest();
      background = await data[0].activities[0].backgrounds[0];
      dialogues = await data[0].activities[0].teacher_dialogs;
      console.log(dialogues);
    } catch (e) {
      console.error(e);
      data = null;
    }
    this.setState({ data, background, dialogues });
  }
  render() {
    const { background, dialogues, counterDialog } = this.state;
    return (
      <div>
        <img src={background} id="imgFondo" alt=""></img>
        <div id="dialogue">{dialogues[counterDialog]}</div>
        <img
          src="https://hack-girls-lat.herokuapp.com/img/avatars/prof_feliz.png"
          id="imgMono"
          alt=""
        ></img>
        <button onClick={this.handleClick.bind(this)} id="buttonNext">
          <img src="../../../../img/next.png" alt=""></img>
        </button>
      </div>
    );
  }
}
