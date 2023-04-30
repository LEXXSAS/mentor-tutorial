import React from 'react'
import { AppContext } from '../context';
import Typography from '@mui/material/Typography'
import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import avatarOne from '../images/ninja.png'
import avatarTwo from '../images/woman5.png'
import FlipMove from 'react-flip-move';

function Comments() {
    const {comments, removeComment} = React.useContext(AppContext);
    return (
        <div>
        {/* // <div style={{maxHeight: '350px', overflowY: 'auto', padding: '5px', scrollbarGutter: 'auto', scrollBehavior: 'smooth'}}> */}
            <FlipMove  duration={250} easing="ease-in-out" leaveAnimation="none">
        {/* <div> */}
            {comments.map((comment, index) => {
                return (
                    // <div key={index}>
                    //     <p>{comment.text}</p>
                    //     <p>{comment.fullName}</p>
                    // </div>
                    <List onClick={() => removeComment(index)} key={index} sx={{width: '100%', maxWidth: '360', bgcolor: 'background.paper'}}>
                        {/* <Divider variant="inset" component="li" /> */}
                        <ListItem alignItems='center' sx={{border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '3px'}}>
                            <ListItemAvatar>
                                {(index % 2 === 0) ? <Avatar alt='avatar' src={avatarOne} /> : <Avatar alt='avatar' src={avatarTwo} />}
                            </ListItemAvatar>
                            <ListItemText
                            // primary="Как вам приложение?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    sx={{display: 'inline'}}
                                    component='span'
                                    variant='body2'
                                    color={{color: '#000'}}
                                    >
                                    {comment.fullName} {}
                                    </Typography>
                                    {/* <br/> */}
                                    - <Typography component={'span'} variant={'body2'} sx={{fontSize: '0.8rem'}}>{comment.text}</Typography>
                                    <br/>
                                    <Typography component={'span'} variant={'body2'} sx={{fontSize: '0.7rem'}}>{comment.currentDate}</Typography>
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        {/* <Divider variant="inset" component="li" /> */}
                    </List>
                    
                )
            })}
            </FlipMove>
        </div>
    );
}

export default Comments;
