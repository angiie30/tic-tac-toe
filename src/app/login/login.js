import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayer: "",
      secondPlayer: "",
      redirect: false,
    };

    this.setFirstPlayer = this.setFirstPlayer.bind(this);
    this.setSecondPlayer = this.setSecondPlayer.bind(this);
    this.save = this.save.bind(this);
  }

  setFirstPlayer(event) {
    let state = { ...this.state };
    state.firstPlayer = event.target.value;
    console.log(state);
    this.setState(state);
  }

  setSecondPlayer(event) {
    let state = { ...this.state };
    state.secondPlayer = event.target.value;
    console.log(state);
    this.setState(state);
  }

  setRedirect = () => {
    let state = { ...this.state };
    state.redirect = true;
    this.setState(state);
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/game" />;
    }
  };

  save() {
    localStorage.setItem("firstPlayer", this.state.firstPlayer);
    localStorage.setItem("secondPlayer", this.state.secondPlayer);

    if (this.state.firstPlayer !== "" && this.state.secondPlayer !== "")
      this.setRedirect();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card box-shadown mt-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Player Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstPlayer"
                      placeholder="Name for X player"
                      value={this.state.firstPlayer}
                      onChange={this.setFirstPlayer}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Second Player Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="secondPlayer"
                      placeholder="Name for O player"
                      value={this.state.secondPlayer}
                      onChange={this.setSecondPlayer}
                    ></input>
                  </div>
                  {this.renderRedirect()}
                  <button
                    className="btn btn-secondary btn-block text-white"
                    onClick={this.save}
                  >
                    Start Game
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
