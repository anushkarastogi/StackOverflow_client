import React from 'react'
import "../../App.css"
import Leftsidebar from "../../components/Leftsidebar/Leftsidebar"
import Rightsidebar from "../../components/Rightsidebar/Rightsidebar"
import Homesidebar from "../../components/Homesidebar/Homesidebar"
const Questions = () => {
  return (
    <div className="home-container-1">
        <Leftsidebar />
        <div className="home-container-2">
            <Homesidebar />
            <Rightsidebar />
        </div>
    </div>
  )
}

export default Questions