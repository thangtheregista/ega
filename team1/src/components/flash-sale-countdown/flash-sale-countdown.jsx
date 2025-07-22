import React from "react";
import "./flash-sale-countdown.css"
function FlashSaleCountdown({initHours = 0, initMinutes = 0, initSeconds = 0 }) {
    const [time, setTime] = React.useState({
        hours: initHours,
        minutes: initMinutes,
        seconds: initSeconds,
    });
    React.useEffect(() => {
        const countdown = setInterval(() => {
            setTime((prevTime) => {
                let {hours, minutes, seconds} = prevTime;
                if (seconds > 0) {
                    seconds--;
                } else {
                    if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    } else if (hours > 0) {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    } else {
                        clearInterval(countdown);
                    }
                }
                return {hours, minutes, seconds};
            });
        }, 1000);
        return () => clearInterval(countdown);
    }, []);
    const format = (num) => String(num).padStart(2, "0");
    return (
        <>
            <div className="flash-sale-countdown-container">
                <span style={{fontSize: "1.2rem"}}>Kết thúc sau</span>
                <div className="fs-countdown-item">
                    <div className="fs-hours">{format(time.hours)}</div>
                    <div style={{color: "red"}}>:</div>
                    <div className="fs-minutes">{format(time.minutes)}</div>
                    <div style={{color: "red"}}>:</div>
                    <div className="fs-seconds"> {format(time.seconds)}</div>
                </div>
            </div>
        </>
    )
}
export default FlashSaleCountdown;