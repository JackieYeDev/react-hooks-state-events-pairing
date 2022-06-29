import React from "react";

function Vote({vote, icon, handleClick}) {
    return (
        <button onClick={handleClick}>{vote} {icon}</button>
    )
}

export default Vote;