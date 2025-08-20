import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import dayjs from 'dayjs';
import './ChatMessage.css'

export function ChatMessage({ message, sender, time }) {
    // const { message, sender } = props;
    const timeString = dayjs(time).format('HH:mm');

    return (
        <div className={
            sender === 'user'
                ? `chat-message-user`
                : `chat-message-robot`
        }>
            {sender === 'robot' && (
                <img src={RobotProfileImage} className="chat-message-profile" />
            )}
            <div className="chat-message-text">
                {message}
                <div className="message-time">{timeString}</div>
            </div>
            {sender === 'user' && (
                <img src={UserProfileImage} className="chat-message-profile" />
            )}
        </div>
    );
}