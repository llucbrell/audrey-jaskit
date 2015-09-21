# audrey-tables

> Seed for [audrey-two](https://www.npmjs.com/package/audrey-two) VCCLI (View-Control-->Command-Line-Interface) ^v2.0.0


## What this scion does?

Use it to ask in CLI and write the user's answers into a file. More or less, as npm init command.

![](https://raw.githubusercontent.com/llucbrell/jaskit/master/captura.png) 

## Specifications

Audrey-two version 2.0.0 change the way of control your CLI-views. The tags. Now taggies replaced by custom audrey-seeds. This seeds can be included or not in your projects.

This node-module redefine the older audrey-two taggy "#". Now you can use it again with audrey version 2.0.0

## Install

Example
```
$ npm install --save audrey-two
$ npm install --save audrey-jaskit
```
## Usage

Bind/feed VCCLI (audrey-two) to audrey-jaskit scion.

```js
audrey.feed("audrey-jaskit-x?");//tag must be "X"
```

Write on your audrey-object-view an array of questions or strings that will be displayed to the user.

Example
```js
var myTerminalDisplay={
    body:["x?askSome"],//tell audrey where you want to display it
    askSome: {prompt: "%" , data: object}, //assign questions to audrey-view
    colors:{askSome: "green" // also chalkColors is supported}
};

var audrey2= require('audrey-two');
var audrey= audrey2(myTerminalDisplay);//pass the view to audrey

audrey.seed(["audrey-audrey-jaskit-x?"]);//tell audrey that there is a new seed
audrey.encore();//run audrey to display view
```
You will see something like this

![](https://raw.githubusercontent.com/llucbrell/audrey-tables/master/captura.png)

## License

MIT © [Lucas_C/llucbrell](https://github.com/llucbrell)