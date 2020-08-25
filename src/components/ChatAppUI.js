import React, {useState, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {Context} from './DataStore'


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3,2),
        margin: "50px"
    },
    flex: {
        display:'flex',
        alignItems: "center",
    },
    topicsWindow:{
        width :"30%",
        height :'100%',
        borderRight: '1px solid grey',
        overflowY: 'scroll'
    },
    chatFlex:{
        width:"70%"
    },
    chatWindow:{
        height :'100%',
        padding :'10px',
        overflowY:'scroll'
    },
    chatArea:{
        padding:'10px'
    },
    chatBox:{
        width :"85%",
    },
    button:{
        width :"15%"
    }
}));

export default function ChatApp() {
    const classes = useStyles();
    
    //Context
    const {allChats, sendChatAction, user} = useContext(Context); 
    const topics = Object.keys(allChats);
    
    //Local
    const [activeTopic, changeActiveTopic]=useState(topics[0]);
    const [textValue, changeTextValue]=useState("");

    return(
        <div>
             <Paper className={classes.root}>
                 

                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {topics.map(topic =>(
                                <ListItem key={topic} button onClick={e=>changeActiveTopic(e.target.innerText)}>
                                    <ListItemText primary={topic}></ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </div>

                    <div className={classes.chatFlex}>
                        <Typography variant='h4' component='h4'>
                            {activeTopic}
                        </Typography>
                        <div className={classes.chatWindow}>
                            {allChats[activeTopic].map((chat,index) =>(
                                <div className={classes.flex} key={index}>
                                    <Chip label={chat.from+": "+chat.msg} className={classes.chip}/>
                                </div>
                            ))}
                        </div>
                        
                        <div className={classes.chatArea}>
                            <TextField 
                                id="textfield"
                                className={classes.chatBox} 
                                label="Type something"
                                value={textValue}
                                onChange={e => changeTextValue(e.target.value)}
                                // onFocus={document.getElementById('textfield').label="Typing..."}
                            />
                            <Button 
                                variant="contained" 
                                className={classes.button} 
                                color="primary" 
                                component="span"
                                // onClick={()=>{
                                //     sendChatAction({from: user, msg: textValue, topic: activeTopic})
                                //     changeTextValue("")    
                                // }}
                                onClick={()=>{
                                    if(textValue===""){
                                        alert('Enter something.')
                                    } 
                                    else{
                                        sendChatAction({from: user, msg: textValue, topic: activeTopic})
                                        changeTextValue("")
                                    }
                                }}
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
                
             </Paper>
        </div>
    )
}