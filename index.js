
// function Drum(letter, sound){
//   this.letter = letter;
//   this.sound = sound;
// }
// w = new Drum('w',"sounds/crash.mp3");
// a = new Drum('w',"sounds/kick-bass.mp3");
// s = new Drum('w',"sounds/snare.mp3");
// d = new Drum('w',"sounds/tom-1.mp3");
// j = new Drum('w',"sounds/tom-2.mp3");
// k = new Drum('w',"sounds/tom-3.mp3");
// l = new Drum('w',"sounds/tom-4.mp3");

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
    // new Audio(w.sound).play();
    // alert(k.sound);
  }, false);

  document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    // keyDown();.................insted ..added keydown function below.
    var n = document.querySelectorAll(".drum").length;
    for (let index = 0; index < n; index++) {
      // document.querySelectorAll(".drum")[index].style.border = "5px solid rgba(26, 109, 91, 0.991)";
      document.querySelectorAll(".drum")[index].classList.remove("keypress");
    }
    
  }, false);
function keyPress(x){
    // document.querySelector(x).style.border = "5px solid blue";
     document.querySelector(x).classList.add("keypress");
}
// function keyDown(){
//     var n = document.querySelectorAll(".drum").length;
//     for (let index = 0; index < n; index++) {
//       document.querySelectorAll(".drum")[index].style.border = "5px solid rgba(26, 109, 91, 0.991)";
      
//     }
//     // document.querySelectorAll("button")[0].style.border = "5px solid rgba(26, 109, 91, 0.991)";
//     // document.querySelectorAll("button")[1].style.border = "5px solid rgba(26, 109, 91, 0.991)";    
//     // document.querySelectorAll("button")[2].style.border = "5px solid rgba(26, 109, 91, 0.991)";   
//     // document.querySelectorAll("button")[3].style.border = "5px solid rgba(26, 109, 91, 0.991)";
//     // document.querySelectorAll("button")[4].style.border = "5px solid rgba(26, 109, 91, 0.991)";
//     // document.querySelectorAll("button")[5].style.border = "5px solid rgba(26, 109, 91, 0.991)";
//     // document.querySelectorAll("button")[6].style.border = "5px solid rgba(26, 109, 91, 0.991)";



// }

for (let i = 0; i< document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(event){
    var key = document.querySelectorAll(".drum")[i].innerHTML;
    buttonClick(key);
    for (let index = 0; index < 7; index++) {
      document.querySelectorAll(".drum")[index].style.border = "5px solid rgba(26, 109, 91, 0.991)";
      
    }
  });
}
// alert(document.querySelectorAll(".drum")[0].innerHTML);