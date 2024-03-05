import {useContext} from "react";
import {ChatContext} from "../../context/ChatContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";

const PotentialChats = () => {
    const {potentialChats, createChat, onlineUsers} = useContext(ChatContext);
    const {user} = useContext(AuthContext);

    return (<div className={"all-users"}>
        {potentialChats && potentialChats.map((u, index) => {
            return (
                <div className={"single-user"} key={index} onClick={() => createChat(user._id, u._id)}>
                    {u.name}
                    <span className={
                        onlineUsers?.some(user => user?._id === u.id) ? 'user-online' : ""
                    }></span>
                </div>
            )
        })}
    </div>)
}

export default PotentialChats;