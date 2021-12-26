import React,{useState} from 'react'
import classes from "./Main.module.css"
import Img from "../img/me.png"
import axiosInstance from "../axiosApi"

const Main = () => {
    const [code,setCode] = useState("")
    const [userInfo,setUserInfo] = useState({})
    const [showUserInfo,setShowUserInfo] = useState(false)
    const [arrivalTime,setArrivalTime] = useState("")
    const [errMessage,setErrMessage] = useState("")
    const [arrivalTimeSent,setArrivalTimeSent] = useState(false)
    const handleCodeChange = (e) => {
        setCode(e.target.value)
    }
    const letterNumber = /^[0-9A-Z]+$/
    const handleSubmit = (e) => {
        e.preventDefault()
        if (code.match(letterNumber)){
            axiosInstance.get(`${code}/`)
            .then((resp) => {
                setShowUserInfo(true)
                setArrivalTimeSent(true)
                setUserInfo(resp.data)
                console.log(resp.data)
            })
        }
        else{
            setErrMessage("Must be a combination of capital letters and numbers")
        }
        
        
    }
    const handleArrivalTimeChange = (e) => {
        setArrivalTime(e.target.value)
        setArrivalTimeSent(true)
        axiosInstance.get(`${code}/`,{
            arrival_time:e.target.value
        })
        .then(resp => {
            console.log(resp)
            
            console.log("arrival time set")
        })
        console.log(e.target.value)
    }
    
    return (
        <div className={classes["main-container"]}>
            <div className={classes["main"]}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="code">Your booking code</label>
                    <input onChange={handleCodeChange} className={classes.code} type="text" value={code} id="code" />
                    {errMessage && <p className={classes["err"]}>{errMessage}</p>}
                </form>
            {showUserInfo && 
                <div className={classes.info}>
                    <div className={classes.img}>
                        <div className={classes["img-container"]}>
                            <img src={userInfo.profile_picture} alt="" />
                        </div>
                        <p className={classes["img-caption"]}>
                            Hi, {userInfo.guest_name}
                        </p>
                    </div>
                    
                    <div> 
                        <p>Thank You for booking with Bukit Vista. Here are the details for your current booking:</p>
                    </div>
                    <div className={classes.property}>
                        <p>Property Name: <span>{userInfo.property_name}</span></p>
                    </div>
                    <div className={classes["check-in"]}>
                        <p>Check in date: <span>{userInfo.check_in_date}</span></p>
                        <p>Check out date: <span>{userInfo.check_out_date}</span></p>
                    </div>
                    <form >
                        {arrivalTimeSent ?
                        <div className={classes.arrival}>
                            <p>Arrival time:</p>
                                <input onChange={handleArrivalTimeChange} value={arrivalTime} type="time" />
                                <p>(Please set your arrival time)</p> 
                            
                                
                        </div>:
                        <p>{arrivalTime}(Thank you, your host has been informed about your arrival time)</p>
                        }
                    </form>
                </div>
            }
            

            </div>
        </div>
    )
}

export default Main
