import React from 'react'
import './SecondRowCardStyle.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendar } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCalendar} />


export default function SecondRowCard({title, data, style, progressBar, icon}) {

    const ProgressBarToggle = progressBar ? <div className="ProgressBarContainer"> <div className="ProgressBar"></div> </div> : <></>

    return (
        <div className="card-container">
            {console.log(style)}
            <div className="left-side" style={style.LeftSide}></div>
            <div className="right-side">
                <div className="title-data">
                    <p className="card-title" style={style.Title}>{title}</p>
                    <p className="card-black-text">{data}</p>
                </div>
                {ProgressBarToggle}
                <div className="icon">
                    {icon}
                </div>
            </div>
        </div>
    )
}
