import React, { Component } from 'react'
import './chat.scss'
export default class chat extends Component {
    state = {
        tabs: ['聊天', '排行榜', 'U猜', '主播'],
        active: 0
    }
    render() {
        return (
            <div className="chat">
                <div className="chat-video-box"></div>
                <div className="chat-tab-box"></div>
                <div className="notice">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quas mollitia reprehenderit hic commodi accusantium totam? Voluptas distinctio aperiam quaerat explicabo iste ipsum, harum praesentium, consequuntur beatae sed facilis est.
        </div>
                <div className="wrapper"></div>
                <div className="chat-footer-box"></div>
            </div>
        )
    }
}
