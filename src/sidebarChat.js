import { Avatar } from "@material-ui/core"
import "./sidebarChat.css"

const SidebarChat = () =>{
    return(
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h2> Room Name </h2>
                <p> This is last Message </p>
            </div>
        </div>
    )
}

export default SidebarChat