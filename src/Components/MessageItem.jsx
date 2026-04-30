import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const MessageItem = ({ item }) => (
    <Link to="/chat" className='link'>
        <article className="messages-list-item">
            <div className="utility-avatar">🧑</div>
            <div className="messages-list-item__main">
                <h4>{item.name}</h4>
                <p>{item.text}</p>
            </div>
            <div>
                <div className="messages-list-item__time">{item.time}</div>
                {item.unread ? <div className="unread-badge">{item.unread}</div> : null}
            </div>
        </article>
    </Link>
);

export default MessageItem;
