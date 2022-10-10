function buttonClick ( x ){
    // Audio("").play();
    switch(x) {
        case 'w':
          // code block
          new Audio("sounds/crash.mp3").play();
          keyDown();
          keyPress(".w-drum");
          
          break;
        case 'a':
          // code block
          new Audio("sounds/kick-bass.mp3").play();
          keyDown();
          keyPress(".a-drum");
          
          break;
        case 's':
          // code block
          new Audio("sounds/snare.mp3").play();
          keyDown();
          keyPress(".s-drum");
          
          break;
        case 'd':
            // code block
            new Audio("sounds/tom-1.mp3").play();
            keyDown();
            keyPress(".d-drum");
            
            break;
        case 'j':
                // code block
                new Audio("sounds/tom-2.mp3").play();
                keyDown();
                keyPress(".j-drum");
                
            break;
        case 'k':
                    // code block
            new Audio("sounds/tom-3.mp3").play();
            keyDown();
            keyPress(".k-drum");
            
            break;
        case 'l':
                // code block
            new Audio("sounds/tom-4.mp3").play();
            keyDown();
            keyPress(".l-drum");
            
            break;
        
        default:
          // code block
      }
}
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    buttonClick(name);
  }, false);

function keyPress(x){
    document.querySelector(x).style.border = "5px solid blue";
}
function keyDown(){
    document.querySelectorAll("button")[0].style.border = "5px solid green";
    document.querySelectorAll("button")[1].style.border = "5px solid green";    
    document.querySelectorAll("button")[2].style.border = "5px solid green";   
    document.querySelectorAll("button")[3].style.border = "5px solid green";
    document.querySelectorAll("button")[4].style.border = "5px solid green";
    document.querySelectorAll("button")[5].style.border = "5px solid green";
    document.querySelectorAll("button")[6].style.border = "5px solid green";



}