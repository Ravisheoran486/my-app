import React from "react";
import Waveform from "./waveform";

class WaveformContainer extends React.Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    // this.fileUpload = this.fileUpload.bind(this);
    this.resetPlayhead = this.resetPlayhead.bind(this);
    console.log(this.props);
    this.state = {
      isPlaying: false,
      isAtBeginning: true,
      urls: {
        url: this.props.link,
        name: "track 1",
      },
    };
  }

  togglePlay() {
    this.setState({
      isPlaying: !this.state.isPlaying,
      isAtBeginning: false,
    });
  }

  resetPlayhead() {
    this.setState({ isAtBeginning: true });
  }

  //   fileUpload(event) {
  //     const file = event.target.files[0];
  //     console.log(event.target.files);
  //     const reader = new FileReader();

  //     reader.addEventListener(
  //       "load",
  //       () => {
  //         this.setState((prevState) => ({
  //           urls: [...prevState.urls, { url: reader.result, name: "test" }],
  //         }));
  //       },
  //       false
  //     );

  //     if (file) {
  //       reader.readAsDataURL(file);
  //     }
  //   }

  render() {
    // const waveforms = [];
    console.log(this.state.urls.url);
    const waveforms = (
      <div>
        <Waveform
          src={this.state.urls.url}
          isPlaying={this.state.isPlaying}
          isAtBeginning={this.state.isAtBeginning}
        />
        {this.state.urls.url.name}
      </div>
    );

    return (
      <div>
        {waveforms}
        <button onClick={this.togglePlay}>play/pause</button>
        <button onClick={this.resetPlayhead}>reset playhead</button>
      </div>
    );
  }
}

export default WaveformContainer;
