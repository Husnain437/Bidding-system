import React from "react";
import './countdown.css'
import { useEffect, useState, useRef } from "react";
const Countdown = ({ date }) => {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [min, setMins] = useState('00');
    const [secs, setSecs] = useState('00');
    let interval = useRef();
    // console.log(date);
    const startTimer = () => {

        const countdownDate = date ? new Date(date).getTime() : new Date("July 25 , 2022 00:00:00").getTime();
        // const countdownDate = new Date(new Date().setHours(0, 0, 0, 0) + (7 * 24 * 60 * 60 * 1000));
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const day = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hour = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const second = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            }
            else {
                setDays(day);
                setHours(hour);
                setMins(minutes);
                setSecs(second);
            }
        }, 1000);
    };
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });
    function checker(){
        const ndate = new Date()
        const pdate = ndate.toISOString();
    //   console.log(pdate, 'ppp');
    //   console.log(date, 'hhhhh');
      if(date<pdate){
        // console.log('yes');
        return(
            <div>SOLD OUT</div>
        )
      }
      else{
        // console.log('no');
        return(
            <div className="countdown">
            
            <div className="days">
                <p>{days}:</p>
            </div>
            <div className="hours">
                <p>{hours}:</p>
            </div>
            <div className="min">
                <p>{min}:</p>
            </div>
            <div>
                <p>{secs}</p>
            </div>
        </div>
        )
      }
        
    }
    return (
        <div>{checker()}</div>

    );
}
export default Countdown;