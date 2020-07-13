//Perspectives in the National Parks

let currentURL = 'https://www.loc.gov/collections/national-parks-maps/?fa=original-format%3Amap&st=list&c=165&fo=json';
let mapData = [];

let yellowstones = [];
let grandcanyons = [];
let acadias = [];
let greatsmokys = [];

let yellowstone;
let grandcanyon;
let acadia;
let greatsmoky;


let yOffset = 100;


let yDiv; //// Yellowstone
let yCbrDiv;

let aDiv; //// Acadia
let gDiv; //// Grand Canyon
let gsDiv; //// Great Smoky Mountains

function preload(){
  loadJSON(currentURL, onLoadData);
}

function onLoadData(data){
  mapData = data.results;
  
  yDiv = document.getElementById('YellowStone');
  aDiv = document.getElementById('Acadia');
  gDiv = document.getElementById('GrandCanyon');
  gsDiv = document.getElementById('GreatSmoky');
                                
  
  //Map Year
  for(let i = 0; i < mapData.length; i++){
    
    let currentTitle = mapData[i].title.toLowerCase();
    
    if(currentTitle){
      let newDiv = document.createElement('div');
      newDiv.setAttribute("class", "map-item");
          
      let newImg = document.createElement('img');
      newImg.src = mapData[i].image_url[2];
      newDiv.setAttribute("id", mapData[i].date);
      
      let newText = document.createElement("p");
      newText.innerHTML = mapData[i].contributor;
      newDiv.setAttribute("onmouseover", "document.getElementById('currentYear').innerHTML = this.id");
      newDiv.setAttribute("onmouseleave", "document.getElementById('currentYear').innerHTML = ' '");

      
    
    //Yellowstone
    //////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////
    if(currentTitle.indexOf('yellowstone') > 0 || currentTitle.indexOf('geyser') > 0 || currentTitle.indexOf('wyoming') > 0  ) {

      newImg.setAttribute('class', 'yellowstone-img');

      newDiv.append(newImg);
      newDiv.append(newText);
      
      yDiv.append(newDiv);
      
      //Link to google images
      newDiv.setAttribute("onclick", "window.open('https://www.google.com/search?tbm=isch&q=yellowstone+" + mapData[i].date + "', '_blank')");
      
      //Overlay page
      


      
     yellowstones.push(new Yellowstone(yellowstones.length, mapData[i].title, mapData[i].date, mapData[i].image_url[1], mapData[i].location, mapData[i].contributor));
    }
    
    
    //Acadia
    //////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////
    if(currentTitle.indexOf('acadia') > 0 || currentTitle.indexOf('maine') > 0 || currentTitle.indexOf('mount desert')>0 || currentTitle.indexOf('scotia')>0){

      
      newImg.setAttribute('class', 'acadia-img');
            
      newDiv.append(newImg);
      newDiv.append(newText);
      
      aDiv.append(newDiv);

        //Link to google image search
       newDiv.setAttribute("onclick", "window.open('https://www.google.com/search?tbm=isch&q=acadia+national+park+" + mapData[i].date + "', '_blank')");
      
       acadias.push(new Acadia(acadias.length, mapData[i].title, mapData[i].date, mapData[i].image_url[1], mapData[i].location,mapData[i].contributor));       
    }
  
    
   //Grand Canyon
   //////////////////////////////////////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////////////////////////////////////
   if(currentTitle.indexOf('canyon') > 0 || currentTitle.indexOf('arizona') > 0 || currentTitle.indexOf('canyon') > 0 || currentTitle.indexOf('mexico') > 0 ){
     
                 newImg.setAttribute('class', 'grandcanyon-img');
              

           
      newDiv.append(newImg);
      newDiv.append(newText);
      
     gDiv.append(newDiv);
     newDiv.setAttribute("onclick", "window.open('https://www.google.com/search?tbm=isch&q=grand+canyon+" + mapData[i].date + "', '_blank')");
      
     
      grandcanyons.push(new GrandCanyon(grandcanyons.length, mapData[i].title, mapData[i].date, mapData[i].image_url[1],mapData[i].location, mapData[i].contributor));       
    }  
    
    
      
    //Great Smoky
    if(currentTitle.indexOf('smoky') > 0 || data.results[i].location[0].indexOf('carolina')>0 || data.results[i].location[0].indexOf('tennessee')>0 || data.results[i].location[0].indexOf('knoxville')>0){
      newImg.setAttribute('class', 'smoky-img');
            
      newDiv.append(newImg);
      newDiv.append(newText);
      
      gsDiv.append(newDiv);
      
      //Link to google image search
      newDiv.setAttribute("onclick", "window.open('https://www.google.com/search?tbm=isch&q=great+smoky+mountains+" + mapData[i].date + "', '_blank')");

      
      greatsmokys.push(new GreatSmoky(greatsmokys.length, mapData[i].title, mapData[i].date, mapData[i].image_url[1],mapData[i].location, mapData[i].contributor));       
    } 
    }
  }
  
}


function setup() {
  noCanvas();
}

function draw() {}

//Classes
class Yellowstone {
 constructor(index, title, url) {
   this.index = index;
   this.title = title;
   this.url = url;
   
   this.x = random(0,50);
   this.y = this.index * yOffset;
   
   this.img = loadImage(this.url);
 }
  
  display(){
   image(this.img, this.x, this.y);
  }

}


class Acadia {
 constructor(index, title, url) {
   this.index = index;
   this.title = title;
   this.url = url;

   this.x = random(windowWidth* 1/5,windowWidth* 1/5+50);
   this.y = this.index * yOffset;
   
   this.img = loadImage(this.url);
 }
  
  display(){
   image(this.img, this.x, this.y);
  }

}


class GrandCanyon{
 constructor(index, title, url) {
   this.index = index;
   this.title = title;
   this.url = url;
   
   this.x = random(windowWidth*2/5,windowWidth*2/5+50);
   this.y = this.index * yOffset;
   
   this.img = loadImage(this.url);
 }
  
  display(){
   image(this.img, this.x, this.y);
  }
}

class GreatSmoky{
 constructor(index, title, url) {
   this.index = index;
   this.title = title;
   this.url = url;
   
   this.x = random(windowWidth * 3/5,windowWidth * 3/5+50);
   this.y = this.index * yOffset;
   
   this.img = loadImage(this.url);
  }
  
  display(){
   image(this.img, this.x, this.y);
  }

}
