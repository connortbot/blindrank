import React, { useState } from 'react';

const SetPid = () => {
    const [PID, sPID] = useState(0);
    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem("playerId",PID);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="number"
            value={PID}
            onChange={(e)=>sPID(e.target.value)}
            placeholder="0"
            />
            <button type="submit">set</button>
        </form>
    );
}

export default SetPid;