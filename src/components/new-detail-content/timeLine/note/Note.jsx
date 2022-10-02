import React from "react"
import "./note.scss"
import smileIcon from "../../asset/svgs/smile.svg"
import sendIcon from "../../asset/svgs/send.svg"

const Note = () => {
  return (
    <div className="note paper-container">
      <div className="note-input">
        <div className="emoji-picker">
          <img src={smileIcon} alt="" />
        </div>
        <input type="text" placeholder="Write a note..." />
        <div className="send-btn">
          <img src={sendIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Note
