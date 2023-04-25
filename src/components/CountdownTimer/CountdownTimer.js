import {useState,useEffect} from 'react' ; 
import './CountdownTimer.css';
import {getRemainingTimeuntilmsTimestamp} from './utlis/Countdownutlis';
const defaultRemainingTime={
    seconds:'00',
    minutes:'00',
    hours:'00',
    days:'00',
}

const CountdownTimer = ({CountdownTimestampms}) => {
    const [remianingTime, setRemainingTime]=useState(defaultRemainingTime);
    useEffect(()=>{
        const intervalId= setInterval(()=>{
            updatetheremainingTime(CountdownTimestampms);
        },1000);
        return() => clearInterval(intervalId);  
    },[CountdownTimestampms]) 

    function updatetheremainingTime(countdown){
        setRemainingTime=getRemainingTimeuntilmsTimestamp(countdown);
    }
    return(
        <div className='countdown-timer'>
            <span>remianingTime.days</span>
            <span>Days</span>
            <span className='two-numbers'>remianingTime.hours</span>
            <span>hours</span>
            <span className='two-numbers'>remianingTime.minutes</span>
            <span>minutes</span>
            <span className='two-numbers'>remianingTime.seconds</span>
            <span>seconds</span>
        </div>
    );
}

export default CountdownTimer; 