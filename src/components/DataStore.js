import React,{createContext,useReducer} from 'react'
import io from 'socket.io-client'

export const Context = createContext();

const initState = {
    // general : [ {from:"pranavba99",msg:"Hello"}, {from:"aditya",msg:"Hi"} ],
    // astronomy : [ {from:"bap",msg:"Astronomy"}, {from:"anonymous",msg:"Club"} ]
    general : [],
    astronomy : []
}

function reducer(state, action) {
    const {from, msg, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            console.log(action.payload)
            var list = state[topic].push({from, msg })
            console.log(list)
            console.log(state)
            return state;
            // return {
            //     ...state,
            //     [topic]: [
            //         ...state[topic],
            //         {from, msg }
            //     ]
            // }
        default: return state;
    }
    // const {from,msg,topic} = action.payload;
    // switch(action.type){
    //     case "RECEIVE_MESSAGE" :
    //         console.log(action.payload)
    //         var 
    //         // var newArr = this.state.arr;
    //         // newArr.push('newvalue');
    //         // this.setState({some:'val',arr:newArr})
    //         return {
                
    //         }
    //     default : return state;
    // }
}

let socket;

function sendChatAction(value){
    socket.emit('chat message', value);
}

export default function DataStore(props){
    
    const [allChats, dispatch] = useReducer( reducer, initState);

    if(!socket){
        socket=io(':3001');
        socket.on('chat message', function(msg){
            var message= {type:'RECEIVE_MESSAGE',payload:msg}
            // console.log(message);
            dispatch(message);
        });
    }

    const user = 'Pranav'+Math.random(100).toFixed(2);

    return (
        <Context.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </Context.Provider>
    )
}