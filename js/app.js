
const mainbackcolor = document.querySelector('#invader');
mainbackcolor.style.backgroundColor = 'purple';
mainbackcolor.style.display = "flex";
mainbackcolor.style.flexWrap = "wrap";
mainbackcolor.style.alignItems = "center";
mainbackcolor.style.alignContent = "center";
mainbackcolor.style.justifyContent = 'center';

const topbox = document.createElement('div');
topbox.style.width = '100vw';
topbox.style.height = '25vh';
topbox.style.backgroundColor = 'blue';
topbox.style.display = 'flex';
topbox.style.flexWrap = 'wrap';
topbox.style.alignItems = 'center';
topbox.style.justifyContent = 'center';
topbox.style.alignContent = 'center';
topbox.setAttribute('id',"topbox");
document.querySelector('#invader').append(topbox);


const taillegrille = document.createElement('input');
taillegrille.style.padding = '2em';
taillegrille.style.backgroundColor = 'white';
taillegrille.style.color = 'black';
taillegrille.style.maxWidth = '20%';
taillegrille.style.maxHeight = '50%';
taillegrille.style.textAlign = 'center';
taillegrille.setAttribute('id',"taillegrille");
taillegrille.setAttribute('placeholder',"Choisir ici la taille");
document.querySelector('#topbox').append(taillegrille);


const taillepixels = document.createElement('input');
taillepixels.style.padding = '2em';
taillepixels.style.backgroundColor = 'white';
taillepixels.style.color = 'black';
taillepixels.style.maxWidth = '20%';
taillepixels.style.maxHeight = '50%';
taillepixels.setAttribute('id',"taillepixels");
taillepixels.setAttribute('placeholder',"Choisir ici la taille des pixels");
document.querySelector('#topbox').append(taillepixels);

const button = document.createElement('button');
button.style.padding = '2em';
button.style.maxWidth = '20%';
button.style.maxHeight = '50%';
button.style.backgroundColor = 'purple';
button.style.color = 'white';
button.setAttribute('id',"button");
button.textContent = 'Valider';
document.querySelector('#topbox').append(button);

const invader = document.createElement('div');
invader.style.display = "flex";
invader.style.flexWrap = "wrap";
invader.style.alignItems = "center";
invader.style.alignContent = "center";
invader.style.justifyContent = 'center';
invader.style.backgroundColor = 'purple';
// invader.textContent = 'ready to received block';
invader.style.maxWidth = '200px';
invader.style.maxHeight = '200px';
invader.style.minHeight = '75vh';
invader.setAttribute('id', "invadermainbox")
document.querySelector('#invader').append(invader);

const palette = document.createElement('div');
palette.style.display = "flex";
palette.style.flexWrap = "wrap";
palette.style.alignItems = "center";
palette.style.alignContent = "center";
palette.style.justifyContent = 'center';
palette.style.maxWidth = '17vw';
palette.style.maxHeight = '10vh';
palette.style.marginLeft = '80vw';
palette.style.zIndex = 1;
palette.style.marginTop = '-10vh';
palette.style.backgroundColor = 'grey';
palette.setAttribute('id',"palette");
document.querySelector('body').append(palette);

const bred = document.createElement('button');
bred.style.padding = '2em';
bred.style.marginRight = '2em';
bred.style.maxWidth = '5%';
bred.style.maxHeight = '3%';
bred.style.backgroundColor = 'red';
bred.style.color = 'white';
bred.setAttribute('id',"bred");
bred.textContent = 'red';
bred.style.textAlign = 'center';
bred.style.borderRadius = '50px';
document.querySelector('#palette').append(bred);

const byellow = document.createElement('button');
byellow.style.padding = '2em';
byellow.style.marginRight = '2em';
byellow.style.maxWidth = '5%';
byellow.style.maxHeight = '3%';
byellow.style.backgroundColor = 'yellow';
byellow.style.color = 'white';
byellow.setAttribute('id',"byellow");
byellow.textContent = 'yellow';
byellow.style.textAlign = 'center';
byellow.style.borderRadius = '50px';
document.querySelector('#palette').append(byellow);

const bgreen = document.createElement('button');
bgreen.style.padding = '2em';
bgreen.style.marginRight = '2em';
bgreen.style.maxWidth = '5%';
bgreen.style.maxHeight = '3%';
bgreen.style.backgroundColor = 'green';
bgreen.style.color = 'white';
bgreen.setAttribute('id',"bgreen");
bgreen.textContent = 'green';
bgreen.style.textAlign = 'center';
bgreen.style.borderRadius = '50px';
document.querySelector('#palette').append(bgreen);

const bblack = document.createElement('button');
bblack.style.padding = '2em';
bblack.style.marginRight = '2em';
bblack.style.maxWidth = '5%';
bblack.style.maxHeight = '3%';
bblack.style.backgroundColor = 'black';
bblack.style.color = 'white';
bblack.setAttribute('id',"bblack");
bblack.textContent = 'black';
bblack.style.textAlign = 'center';
bblack.style.borderRadius = '50px';
document.querySelector('#palette').append(bblack);


console.log(palette);

let style = [];
let plain = "red";
let empty = "green";
let light = "yellow"
let highlight= "black";
let color = "";

style.push(plain,empty,light,highlight);

function fillboard(pxsize){

const pixel = document.createElement('div');
pixel.style.width = pxsize+"px";
pixel.style.height = pxsize+"px";
pixel.style.backgroundColor = 'grey';
// pixel.textContent = 'my pixel';
pixel.setAttribute('id',"pixel");
document.querySelector('#invadermainbox').append(pixel);

console.log(pxsize,pixel.style.height);


}

document.addEventListener('mouseover', e => {

    let inputValue = document.getElementById('taillegrille').value;

    let inputValue2 = document.getElementById('taillepixels').value;

    switch (e.target.id) {
        // case 'pixel': if(e.target.style.backgroundColor=='grey'){e.target.style.backgroundColor='white'}else{(e.target.style.backgroundColor='grey')}
            
        //     break;

            // case 'pixel': let choosecolor = prompt("choose your color");{e.target.style.backgroundColor=choosecolor}
            
            // break;


            // case 'pixel': e.target.style.backgroundColor = style[Math.floor(Math.random()*4)];
            
            // break;

            case 'pixel': e.target.style.backgroundColor = color;
            
            break;


            case 'button': console.log(inputValue);let del=document.querySelector('#invadermainbox');del.innerHTML='';for(let gen=0; gen<inputValue*inputValue; gen++){fillboard(inputValue2)};invader.style.maxWidth = inputValue2*inputValue+"px";invader.style.maxHeight = inputValue2*inputValue+"px";;
            
            break;


            case 'bred': color = e.target.style.backgroundColor;
            
            break;

            case 'byellow': color =e.target.style.backgroundColor;
            
            break;

            case 'bgreen': color =e.target.style.backgroundColor;
            
            break;

            case 'bblack': color =e.target.style.backgroundColor;
            
            break;


    
    }

console.log(e.target.id,e.target.style.backgroundColor,e.target.style.backgroundColor=='grey');
console.log(invader.style.maxWidth );   

})






