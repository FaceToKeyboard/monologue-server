# monologue-server
The web client and server components to Monologue: a self-hostable web application to send and receive things to your mobile device

React front end.
Express back end.
Uses a MongoDB instance to save messages.

To get messages for a particular user ID, use a query string:

`GET /messages?userId=##`

POST a message -

`POST /messages` 

with a JSON body:
```
{
  userId: <int>,
  messageType: 'text',
  messageContent: <string>
}
```
