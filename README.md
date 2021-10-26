# monologue-server
The web client and server components to Monologue: a self-hostable web application to send and receive things to your mobile device.
A project created under a time constraint of two days.

React front end.
Express back end.
MongoDB to store messages.

There is an Android client [here](https://github.com/FaceToKeyboard/monologue-client-android), developed using the [Ionic framework](https://ionicframework.com/).

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

## TODO
- Handle URLs, images, and files
- User account creation and authentication
