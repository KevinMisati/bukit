import React from 'react'
import classes from "./SideBar.module.css"

const SideBar = () => {
    return (
        <div className={classes["sidebar-container"]}>
            <div className={classes["sidebar"]}>
                <h3>Guest portal</h3>
            </div>
        </div>
    )
}

export default SideBar
