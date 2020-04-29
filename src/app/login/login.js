import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const renderRedirect = (redirect) => {
  if (redirect) {
    return <Redirect to="/game" />;
  }
};

const save = (firstPlayer, secondPlayer, setShowAlert, setRedirect) => {
  localStorage.setItem("firstPlayer", firstPlayer);
  localStorage.setItem("secondPlayer", secondPlayer);

  if (firstPlayer === "" && secondPlayer === "") setShowAlert(true);
  else setRedirect(true);
};

const alert = (showAlert) => {
  return showAlert ? (
    <div className="alert alert-danger" role="alert">
      First Player Name and Second Player Name is required!
    </div>
  ) : (
    ""
  );
};

export default function Login() {
  const [firstPlayer, setFirstPlayer] = useState("");
  const [secondPlayer, setSecondPlayer] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card box-shadown mt-3">
            <div className="card-body">
              {alert(showAlert)}
              <form>
                <div className="form-group">
                  <label>First Player Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstPlayer"
                    placeholder="Name for X player"
                    value={firstPlayer}
                    onChange={(ev) => setFirstPlayer(ev.target.value)}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Second Player Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="secondPlayer"
                    placeholder="Name for O player"
                    value={secondPlayer}
                    onChange={({ target: { value } }) => setSecondPlayer(value)}
                  ></input>
                </div>
                {renderRedirect(redirect)}
                <button
                  type="button"
                  className="btn btn-secondary btn-block text-white"
                  onClick={() =>
                    save(firstPlayer, secondPlayer, setShowAlert, setRedirect)
                  }
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
