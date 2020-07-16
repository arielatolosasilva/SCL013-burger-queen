import React, { Component } from 'react';
import style from '../../components/CardsOrders/CardsIncomingOrder.module.css'
import {
  Card, CardBody,
  CardTitle,
  Button
} from 'reactstrap';

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

  timerHandler(timer, seconds, minutes) {
    clearInterval(this.timer)
    console.log('minutos: ' + minutes, 'segundos: ' + seconds);
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
        <div className={style.fatherButton}>
        <Button  className={style.optionBtn} onClick={this.startTimer}>Preparando</Button>
        <Button  className={style.optionBtn} onClick={() => this.timerHandler(this.timer, this.state.time.s, this.state.time.m)}>Terminado</Button>
        </div>
        <div className={style.time}>
         m: {this.state.time.m} s: {this.state.time.s}
         </div>
      
        

      </div>
    );
  }
}

export default Contador;
