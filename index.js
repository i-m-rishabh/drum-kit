function buttonClick ( x ){
    // Audio("").play();
    switch(x) {
        case 'w':
          // code block
          new Audio("sounds/crash.mp3").play();
          
          keyPress(".w");
          
          break;
        case 'a':
          // code block
          new Audio("sounds/kick-bass.mp3").play();
        //   keyDown();
          keyPress(".a");
          
          break;
        case 's':
          // code block
          new Audio("sounds/snare.mp3").play();
        //   keyDown();
          keyPress(".s");
          
          break;
        case 'd':
            // code block
            new Audio("sounds/tom-1.mp3").play();
            // keyDown();
            keyPress(".d");
            
            break;
        case 'j':
                // code block
                new Audio("sounds/tom-2.mp3").play();
                // keyDown();
                keyPress(".j");
                
            break;
        case 'k':
                    // code block
            new Audio("sounds/tom-3.mp3").play();
            // keyDown();
            keyPress(".k");
            
            break;
        case 'l':
                // code block
            new Audio("sounds/tom-4.mp3").play();
            // keyDown();
            keyPress(".l");
            
            break;
        
        default:
          // code block
      }
}
document.addEventListener('keydown', (event) => {
    var name = event.key;
    // var code = event.code;
    // Alert the key name and key code on keydown
    buttonClick(name);
  }, false);

  document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    keyDown();
  }, false);
function keyPress(x){
    document.querySelector(x).style.border = "5px solid blue";
}
function keyDown(){
    var n = document.querySelectorAll(".drum").length;
    for (let index = 0; index < n; index++) {
      document.querySelectorAll(".drum")[index].style.border = "5px solid rgba(26, 109, 91, 0.991)";
      
    }
    // document.querySelectorAll("button")[0].style.border = "5px solid rgba(26, 109, 91, 0.991)";
    // document.querySelectorAll("button")[1].style.border = "5px solid rgba(26, 109, 91, 0.991)";    
    // document.querySelectorAll("button")[2].style.border = "5px solid rgba(26, 109, 91, 0.991)";   
    // document.querySelectorAll("button")[3].style.border = "5px solid rgba(26, 109, 91, 0.991)";
    // document.querySelectorAll("button")[4].style.border = "5px solid rgba(26, 109, 91, 0.991)";
    // document.querySelectorAll("button")[5].style.border = "5px solid rgba(26, 109, 91, 0.991)";
    // document.querySelectorAll("button")[6].style.border = "5px solid rgba(26, 109, 91, 0.991)";



}
