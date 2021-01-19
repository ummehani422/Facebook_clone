import { Avatar } from '@material-ui/core'
import React ,{useState}from 'react'
import "./messagesender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import { useStateValue } from './StartProvider';
import db from './firebase'
import firebase from "firebase"
function Messagesender() {
    const [{user},dispatch]=useStateValue();

    const [input, setInput]=useState("");
    const[imageUrl,setImageUrl]=useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        //some db stuff
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image : imageUrl,
        });
        setInput("");
        setImageUrl("");
    };
    return (
        <div className="messagesender">
            <div className="messagesender_top">
                <Avatar  src={user.photoURL}/>
                <form>
                    <input value={input}
                    onChange={e=>setInput(e.target.value)}
                    className="messagesender_input" type="text" placeholder={`What's on your mind, ${user.displayName}?` } />
                    <input value={imageUrl}
                    onChange={e=>setImageUrl(e.target.value)}
                    placeholder="image URL (optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
    </button>
                </form>
            </div>
            <div className="messagesender_bottom">


            <div className="messagesender_option">
                <VideocamIcon style={{ color: "red" }} />
                <h3>Live Video</h3>

            </div>
            <div className="messagesender_option">
            <PhotoLibraryIcon style={{ color: "green" }} />
                <h3>Photos/Video</h3>
                
            </div>
            <div className="messagesender_option">
                <EmojiEmotionsOutlinedIcon style={{ color: "yellow" }} />
                <h3>Feeling/Activity</h3>
                
            </div>
        </div>
        </div>
       
    );
}

export default Messagesender
