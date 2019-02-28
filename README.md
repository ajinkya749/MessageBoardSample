# MessageBoardSample

This Project contains both frontend and backend. for mesage board sample prototype, We are running both frontend as well as backend server using Concurrently npm package.

#Steps to Run application:

Cloning:

git clone https://github.com/ajinkya749/MessageBoardSample.git

Installing node packages for client as well as server:
-npm install
move to server forlder & 
-run npm install

Installing concurrently package:

In root folder run command to install concurrently package
 -npm install -g concurrently

Run npm start to start the application:
  -npm start

Application specs and implementation:

Functionality implemented:

Client visuals ○ Render a full page application with three panels 
 ->Navigation panel shows a list of channels
 ->Message list panel shows a list of message bodies 
 ->Editor panel shows a text editor – only shown when a channel is selected
 ->Editor has a submit button – only shown when a channel is selected 

Client state management:
 ->Client application state contains channels, messages  and selected channel.
 ->Channel list is refreshed on loading the application
 ->Initially no channel is selected(visual indication pending)
 ->Upon selecting a channel, messages are retrieved, and  immediately shown
 ->Upon submitting a message to a channel that message is available for other users

NodeJS backend implemented
 GET endpoint for querying channels 
 GET –  channels  ->http://localhost:8080/channelApi/channels
 GET – messages for channel -> http://localhost:8080/channelApi/messages/'+[id]
 PUT Add  messages to channel ->http:///updateChannel/:[id]
