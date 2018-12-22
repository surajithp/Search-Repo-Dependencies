import React from "react";
import axios from "axios";
import "./DisplayRepo.css";

class DisplaySingleRepo extends React.Component {
  state={clicked:false}
  onButtonclick = async () => {
    const repocontent = await axios.get(
      `https://api.github.com/repos/${this.props.full_name}/contents`
    );
    const repocontentdata = repocontent.data;
    const jsondata = repocontentdata.filter(item => {
      return item.name.match("package.json");
    });
    if (jsondata.length > 0) {
      const response = await axios.get(
        `https://raw.githubusercontent.com/${this.props.full_name}/${
          this.props.default_branch
        }/package.json`
      );
      let dataofjson = response.data.devDependencies;
      if (typeof dataofjson === "object") {
        let dataarray = Object.keys(dataofjson);
        this.props.click(dataarray);
      } else {
        return alert("dependencies not exist in json file");
      }
    } else {
      return alert("package json file not exist in repo");
    }
    this.setState({clicked:!this.state.clicked})
  };

  render() {
    console.log(this.state.clicked)
    return (
      <div className="box margin">
        <p>{this.props.serialno}</p>
        <p>{this.props.full_name}</p>
        <p><a href={this.props.svn_url}
        rel="noopener noreferrer"
        target="_blank">Repo Url</a></p>
        <div style={{ margin: "auto" }}>
          <button disabled={this.state.clicked} onClick={this.onButtonclick}>Import</button>
        </div>
        <p>Forks:{this.props.forks_count}</p>
        <p>Stars:{this.props.stargazers_count}</p>
      </div>
    );
  }
}

export default DisplaySingleRepo;