import React, {forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';
import InputOption from './InputOption';

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className = "post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like"/>
            <InputOption Icon={ChatIcon} title="Comment"/>
            <InputOption Icon={ReplyIcon} title="Share"/>
            <InputOption Icon={SendIcon} title="Send"/>
        </div>
    </div>
  )
})

export default Post