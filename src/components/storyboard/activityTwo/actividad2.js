import React from "react";
import api from "../../../activities-api";
import Achievement from "../achievement/achievement";

class Actividad2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      background: null,
      stepActivities: [
        {
          title: "Ordenar",
          description: "",
          steps: [
            {
              text: "Comprar todas las cosas para las actividades",
              answ: 5,
            },
            {
              text: "Pensar que actividades hacer ",
              answ: 2,
            },
            {
              text: "Decidir una fecha y lugar",
              answ: 3,
            },
            {
              text: "Hacer la lista de las comprar",
              answ: 4,
            },
            {
              text: "Promocionar el evento",
              answ: 6,
            },
            {
              text: "Determina el objetivo",
              answ: 1,
            },
            {
              text: "¡Día de la kermés!",
              answ: 7,
            },
          ],
        },
        {
          title: "Escoger",
          description: "",
          steps: [
            {
              text: "Profesor",
              answ: true,
            },
            {
              text: "Compañero",
              answ: true,
            },
            {
              text: "Vaca",
              answ: false,
            },
            {
              text: "Papás",
              answ: true,
            },
            {
              text: "Gallina",
              answ: false,
            },
            {
              text: "Payaso",
              answ: true,
            },
            {
              text: "Lavadorai",
              answ: false,
            },
          ],
        },
        {
          title: "Escoger",
          description: "",
          steps: [
            {
              text: "Comida",
              answ: 300,
            },
            {
              text: "Bocinas",
              answ: 200,
            },
            {
              text: "Juegos",
              answ: 100,
            },
            {
              text: "Infable",
              answ: 100,
            },
            {
              text: "Rentar limosina",
              answ: 500,
            },
            {
              text: "Globo aerostático",
              answ: 1000,
            },
            {
              text: "Videojuego para ti",
              answ: 200,
            },
            {
              text: "Ropa para ti",
              answ: 300,
            },
          ],
        },
      ],
      counterPoints: 0,
      action: false,
      currentAction: "",
      currentFriend: 0,
      // just added current game
      currentGame: 0,
      finished: false,
      finalMessage: "",
      response0: [
        {
          name: "a",
          value: "5",
        },
        {
          name: "b",
          value: "2",
        },
        {
          name: "c",
          value: "3",
        },
        {
          name: "d",
          value: "4",
        },
        {
          name: "e",
          value: "6",
        },
        {
          name: "f",
          value: "1",
        },
        {
          name: "g",
          value: "7",
        },
      ],
      response1: [
        {
          name: "a",
          value: true,
        },
        {
          name: "b",
          value: true,
        },
        {
          name: "c",
          value: false,
        },
        {
          name: "d",
          value: true,
        },
        {
          name: "e",
          value: false,
        },
        {
          name: "f",
          value: true,
        },
        {
          name: "g",
          value: false,
        },
      ],
      response2: [
        {
          name: "a",
          value: "300",
        },
        {
          name: "b",
          value: "200",
        },
        {
          name: "c",
          value: "100",
        },
        {
          name: "d",
          value: "100",
        },
        {
          name: "e",
          value: "1000",
        },
        {
          name: "f",
          value: "200",
        },
        {
          name: "g",
          value: "300",
        },
      ],
    };
  }

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
    if (value === 1) {
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

  handleChangeResponse0 = (event) => {
    console.log("hola");
    //this.setState({response0: event.target.value});
    /*
    console.log('seleccionado', this.response )

    let response0 = [this.state.response0];
    console.log(response0, 'response0');
    let step = response0[element];
    console.log('resp', step);
    //let item = {...response0[element]}
    //item = event.target.value
    */

    /*
    // 1. Make a shallow copy of the items
    let items = [...this.state.items];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[1]};
    // 3. Replace the property you're intested in
    item.name = 'newName';
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[1] = item;
    // 5. Set the state to our new copy
    this.setState({items});
     */
  };

  handleNext = () => {
    console.log("click", this.state.currentGame);
    if (this.state.currentGame < 2) {
      this.setState({ currentGame: this.state.currentGame + 1 });
    }
    //console.log('new', this.currentGame);
    if (this.state.currentGame >= 2) {
      this.setState({ finished: true });
      //this.props.history.push("/level/achievement");
    }
  };

  async componentDidMount() {
    var data;
    var background;
    var stepActivities;

    try {
      data = await api.getLatest();
      background = await data[0].activities[1].backgrounds[1];
      stepActivities = await data[0].activities[1].steps_activities;
      console.log(data, "holaaa");
      console.log(stepActivities, "step act");
      this.setState({ data, background, stepActivities });
    } catch (e) {
      console.error(e);
      data = null;
    }
  }
  render() {
    const {
      stepActivities,

      currentGame,
      finished,
    } = this.state;

    return (
      <div>
        <img
          src="https://hack-girls-lat.herokuapp.com/img/two/kermes1.png"
          id="imgFondo"
          alt=""
        ></img>

        <div id="dialogue" className="color-activity-2">
          {stepActivities[currentGame].title}{" "}
        </div>

        <div className="action-activity-2">
          <div className="wrapper-step">
            <div className="steps">
              {stepActivities[currentGame].steps.map((step) => (
                <p>{step.text}</p>
              ))}
            </div>

            <div className="steps-options">
              <div>
                {this.state.response0.map((element, index) => (
                  <div>
                    {currentGame === 0 ? (
                      <select
                        name={"response0-" + index}
                        id={"response0-" + index}
                        value={this.state.response0[index].value}
                        onChange={this.handleChangeResponse0()}
                        className="select"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    ) : null}

                    {currentGame === 1 ? (
                      <select
                        name={"response0-" + index}
                        id={"response0-" + index}
                        value={this.state.response0[index].value}
                        onChange={this.handleChangeResponse0()}
                        className="select"
                      >
                        <option value="1">Si invitarlo</option>
                        <option value="2">No invitarlo</option>
                      </select>
                    ) : null}

                    {currentGame === 2 ? (
                      <select
                        name={"response0-" + index}
                        id={"response0-" + index}
                        value={this.state.response0[index].value}
                        onChange={this.handleChangeResponse0()}
                        className="select"
                      >
                        <option value="1">Si comprar</option>
                        <option value="2">No comprar</option>
                      </select>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          id="nextActivity"
          class="next-activity-2"
          onClick={() => {
            this.handleNext();
          }}
        >
          Next
        </button>
        {finished ? (
          <Achievement frase="¡Felicidades! Has ganado la insignea de organización y planeación :D"></Achievement>
        ) : null}
      </div>
    );
  }
}
export default Actividad2;
