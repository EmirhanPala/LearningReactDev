import React from 'react'
import styles from './styles.module.css';

function ChatItem({ item }) {
    return (
        <div className={`${styles.chatItem}`}>
            {item.messages}
        </div>
    )
}

export default ChatItem