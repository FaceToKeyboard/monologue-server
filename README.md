# monologue-server
The web client and server components to Monologue: a self-hostable web application to send and receive things to your mobile device

React front end.
Express back end.
Uses a MongoDB instance to save messages.

To get messages for a particular user ID:
`GET /messages?userId=##`

POST a message:
`POST /messages` 
with the body of the request being a JSON structure:
```
{
  userId: <int>,
  messageType: 'text',
  messageContent: <string>
}
```
