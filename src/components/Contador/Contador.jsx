import React, { Component } from 'react';

class Contador extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 0 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    const timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }
  secondsToTime(secs) {
    const hours = Math.floor(secs / (60 * 60));

    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const divisorForSeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForSeconds);

    const obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    const seconds = this.state.seconds + 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.startTimer}>Start</button>
        m:
        {this.state.time.m} s: {this.state.time.s}
      </div>
    );
  }
}

export default Contador;
