import React, {useState} from "react";

function Comments({comment}) {
    const [text, setText] = useState(comment.comment);
    const [user, setUser] = useState(comment.user);
    return(
       <div>
           <h3>{user}</h3>
           <span>{text}</span>
       </div>
    )
}

export default Comments; 