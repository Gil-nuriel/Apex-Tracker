import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LegendName: null,
      UserGamerTag: null,
      UserImage: null,
      LegendImage: null,
      SeasonWins: null,
      Kills: null,
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(
        `http://localhost:5000/${this.props.match.params.platform}/${this.props.match.params.gamertag}`
      )
      .then(response => {
        console.log(response.data.data);
        this.setState({
          LegendName: response.data.data.metadata.activeLegendName,
          UserGamerTag: response.data.data.platformInfo.platformUserId,
          UserImage: response.data.data.platformInfo.avatarUrl,
          LegendImage: response.data.data.segments[1].metadata.imageUrl,
          SeasonWins: response.data.data.segments[0].stats.season2Wins.value,
          Kills: response.data.data.segments[0].stats.kills.value,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error: true, isLoading: false }));
  }

  render() {
    const {
      isLoading,
      error,
      LegendName,
      UserGamerTag,
      UserImage,
      LegendImage,
      SeasonWins,
      Kills
    } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return (
        <div>
          <p>Player does not exist</p>
          <a href="http://localhost:3000">Go Back</a>
        </div>
      );
    }
    return (
      <div className=" card card-body mb-3 mt-5 bg-primary">
        <h1 className="card-header bg-warning">
          <img src={UserImage} alt={"UserImage"} style={{ width: 40 }} />
          {UserGamerTag}
        </h1>

        <div className="row mt-6 col-md-9">
          <img src={LegendImage} alt={"LegendImage"} style={{ width: "40%" }} />
          <div className="card-body">
            <ul>
              <li className="list-group-item card-header bg-warning">
                <h4>Selected Legend</h4>
                <p>{LegendName}</p>
              </li>
              <li className="list-group-item card-header bg-warning">
                <h4>Wins</h4>
                <p>{SeasonWins}</p>
              </li>
              <li className="list-group-item card-header bg-warning">
                <h4>Kills</h4>
                <p>{Kills}</p>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <a href="http://localhost:3000" className="text-white">
          Go Back
        </a>
      </div>
    );
  }
}

export default Profile;
