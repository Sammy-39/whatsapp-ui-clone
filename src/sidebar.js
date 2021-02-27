import {Avatar,IconButton} from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined"

import "./sidebar.css"
import SidebarChat from "./sidebarChat"

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrCNzBlPnVIER2Jyfb6iv90_yKSSGovtaCw&usqp=CAU"/>
                <div className="sidebar_headerRight">
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
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search Chat" type="text" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar