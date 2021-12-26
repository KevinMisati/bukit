import React from 'react'
import classes from "./DashBoard.module.css"
import Main from '../components/Main'
import SideBar from '../components/SideBar'

const DashBoard = () => {
    return (
        <div className={classes["dashboard-container"]}>
            <div className={classes["dashboard"]}>
                <div className={classes.sidebar}>
                    <SideBar />
                </div>
                <div className={classes.main}>
                    <Main />
                </div>
                
            </div>
        </div>
    )
}

export default DashBoard
