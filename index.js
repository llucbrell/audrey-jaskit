
module.exports= function(){

var data=false;	
var bul;
var terminal;
var name;

var jaskit=require('jaskit');

return{
	     grow: function(simName, customObject){ 
        terminal= customObject;
        //console.log("CAAALL");
        name= simName.slice(2);;
        start();
        },
harvestData: function(){ return data;}
}

function checkColors(){
  var colors=Object.getOwnPropertyNames(terminal.colors);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<colors.length; i++){//iterate over prop names

    if(colors[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    terminal.colors[name]=terminal.colors.default;
    } 
}


function checkProperties(){
var properties= Object.getOwnPropertyNames(terminal);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<properties.length; i++){//iterate over prop names
    if(properties[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    throw new Error('Not defined '+name);
    }  
}


function start(){
  checkProperties(name);
  checkColors(name);
  var cli= jaskit(terminal[name].prompt, terminal.colors[name]);
 
 if(terminal[name].header) cli.header(terminal[name].header); 
 else cli.header('\n');

terminal[name].data.forEach(function(element){
  
      cli.ask(element);
  
  });
if(terminal[name].to) cli.to("./mitexto.txt");

if (terminal[name].format){
  terminal[name].format.forEach(function(element){
    var objtFormat= {};
    if(element.before) objtFormat.before= element.before; 
    if(element.after) objtFormat.after= element.after; 
    if(element.replace) objtFormat.replace= element.replace; 
    if(element.put) objtFormat.put= element.put; 
    cli.change(element.question, objtFormat);


  });
}

if(terminal[name].confirmation) cli.end(terminal[name].confirmation);
else cli.end("are you sure you wanna write a file?");

}

}