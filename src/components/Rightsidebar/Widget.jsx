import React from 'react'
import "./Rightsidebar.css"
import blacklogo from "../../images/stack-overflow.svg"
import pen from "../../images/pen-solid.svg"
import message from "../../images/message-solid.svg"
const Widget = () => {
  return (
    <div className="widget">
        <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width="18"/>
                <p>Just laid off? Nervous about possible<br /> layoffs? Here's what to do.</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" width="18"/>
                <p>The blockchain tech to build in a crypto<br /> winter (Ep. 516)</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={message} alt="pen" width="18"/>
                <p>Help us identify new roles for community<br /> members</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={message} alt="pen" width="18"/>
                <p>Navigation and UI research starting soon</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={blacklogo} alt="pen" width="18"/>
                <p>Help needed: a call for volunteer reviewers<br /> for the Staging Ground beta test</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={blacklogo} alt="pen" width="18"/>
                <p>2022 Community Moderator Election<br /> Results</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={blacklogo} alt="pen" width="18"/>
                <p>Temporary policy: ChatGPT is banned</p>
            </div>
        </div>
        <h4>Hot Meta Post</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <p>70</p>
                <p>Stricter trust model in the face of bot flood?</p>
            </div>
        </div>

    </div>
  )
}

export default Widget