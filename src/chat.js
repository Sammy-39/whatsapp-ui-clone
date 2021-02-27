import {Avatar,IconButton} from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"

import "./chat.css"

const Chat = () =>{
    return(
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3> Room Name </h3>
                    <p> Last seen at... </p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
               <p className={`chat_message`}>
                    <span className="chat_name"> Sammy </span>
                    Hey! Welcome to Whatsapp Clone
                    <span className="chat_timestamp"> {new Date().toDateString()} </span>
                </p> 
                <p className={`chat_message chat_receiver`}>
                    <span className="chat_name"> Levi </span>
                    Hello! I am Levi
                    <span className="chat_timestamp"> {new Date().toDateString()} </span>
                </p> 
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form onSubmit={e=>{e.preventDefault()}}>
                    <input placeholder="Type a message" type="text"  />
                    <button type="submit"> Send </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat