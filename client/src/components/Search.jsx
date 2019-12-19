import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = { gamertag: "", platform: "" };
  }

  handleSubmit = event => {
    event.preventDefault();
    let plat = this.textInput1.value;
    let tag = this.textInput2.value;
    console.log("sending..." + plat + " " + tag);
    this.setState({ platform: plat });
    this.setState({ gamertag: tag });
    this.props.history.push(`/profiles/${plat}/${tag}`);
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-9 m-auto">
          <form
            className="card card-body text-white bg-primary mb-3"
            onSubmit={this.handleSubmit}
          >
            <h1 className="card-title">Track Player Stats</h1>

            <div className="form-group">
              <label htmlFor="platform">Platform</label>
              <br />
              <select
                name="platform"
                id="platform"
                className="form-control bg-warning"
                ref={input => {
                  this.textInput1 = input;
                }}
              >
                <option value="psn">Playstation</option>
                <option value="xbl">Xbox</option>
                <option value="origin">Origin</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gamertag">Gamertag</label>
              <br />
              <input
                type="text"
                name="gamertag"
                id="gamertag"
                ref={input => {
                  this.textInput2 = input;
                }}
                placeholder="Input for the Gamertag"
                className="form-control bg-warning"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary text-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
