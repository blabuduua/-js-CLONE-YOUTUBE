import React, { forwardRef } from 'react'
import './Message.css'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Message = forwardRef(({username, message}, ref) => {
  const isUser = username === message.username
 
  return (
    <div ref={ref} className={`Message ${isUser && 'Message__user'}`}>
      <Card className={`${isUser ? 'Message__userCard' : 'Message__guestCard'}`}>
        <CardContent>
          <Typography color="primary" variant="h5" component="h2">
            {message.username}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
})

export default Message
