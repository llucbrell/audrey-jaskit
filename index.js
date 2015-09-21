
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
  var cli= jaskit('promt', terminal.colors[name]);
 
  cli.header('This is my question'); 

terminal[name].forEach(function(element){
  
      cli.ask(element);
  
  });
cli.end("end audey-jaskit");
//console.log("end");
}





}