import React, {useEffect} from "react";
import "./countdown-timer.css"
function CountDownTimer({initHours = 0, initMinutes = 0, initSeconds = 0 }) {
    const [time, setTime] = React.useState({
        hours: initHours,
        minutes: initMinutes,
        seconds: initSeconds,
    });
    useEffect(() => {
        const countdown = setInterval(() => {
            setTime((prevTime) => {
                let {hours, minutes, seconds} = prevTime;
                if (seconds > 0) {
                    seconds--;
                } else {
                    if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    }  else if (hours > 0) {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    } else {
                        clearInterval(countdown);
                    }
                }
                return {hours,  minutes, seconds};
            });
        },  1000);
        return () => clearInterval(countdown);
    }, [])
    const format = (num) => String(num).padStart(2, "0");
    return (
        <>
            <div className="countdown-container">
                <span style={{marginRight: "16px", fontSize: "20px"}}>Kết thúc sau</span>
                {["Giờ", "Phút", "Giây"].map((label, index) => {
                    const value = [time.hours, time.minutes, time.seconds][index];
                    return (
                        <div key={label} className="countdown-item">
                            <div style={{ fontSize: "24px", fontWeight: "bold" }}>{format(value)}</div>
                            <div style={{ fontSize: "14px" }}>{label}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default CountDownTimer;