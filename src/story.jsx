import { Avatar } from '@material-ui/core'
import React from 'react'
import "./story.css"
function story({image,profileSrc,title}) {
    return (
        <div style={{backgroundImage: 'url(${image})'}} className="story">
            <Avatar className="story_avatar" src={profileSrc}/>
            <h4>{title}</h4>
        </div>
    );
}

export default story
