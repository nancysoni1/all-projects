//we will use fraction property jisme left right mein 300px ka gap and beech me fraction vallue 0 to 1 similarly top to bottom 0 to 1 sabse pehle point ka x,y cordinate cahiye,directly window pe event listener lgayenge//
//event object hota h jiske paas saara data hota h
let pupils = document.getElementsByClassName('pupil');
console.log(pupils);
let pupilsarr = Array.from(pupils);//it is new method which creates array like object form aaray
let pupilstartpoint = -80;
let pupilrange=160;//200px-40px
let pupilXcurrentposition=0;
let pupilycurrentposition=0;




let mouseXEndPoint=window.innerWidth ;//define yhe innerwidth by window.innerWidth//
let mouseXStartPoint=0;
let fracXValue = 0;
let currentXPosition = 0;
let mouseXrange = mouseXEndPoint-mouseXStartPoint;

let mouseYEndPoint=window.innerHeight ;//define yhe innerwidth by window.innerWidth//
let mouseYStartPoint=0;
let fracYValue = 0;
let currentYPosition = 0;
let mouseYrange = mouseYEndPoint-mouseYStartPoint;
function mouseMove(event) {
    //console.log(`x value = ${event.clientX} & y value = ${event.clientY}`); ye to sirf x y value ke liye reality me to apan ko 0 to 1 chahiye for that //
    currentXPosition = event.clientX-mouseXStartPoint;
    fracXValue = currentXPosition/mouseXrange;
    
    currentYPosition = event.clientY;
    fracYValue = currentYPosition/mouseYrange;
     
    pupilXcurrentposition = pupilstartpoint + (fracXValue * pupilrange);//yaha se apan ko f*200 that is 0 se 200 tak value milega
    pupilYcurrentposition = pupilstartpoint + (fracYValue * pupilrange);
    pupilsarr.forEach((curpupil) => {
     //move krane ke liye style me transform property//
       curpupil.style.transform = `translate(${pupilXcurrentposition}px,${pupilYcurrentposition }px)`;
    });
    
    
    };
     const windowResize = (event) =>{
      mouseXEndPoint = window.innerWidth;
      mouseXrange = mouseXEndPoint - mouseXStartPoint;
      mouseYEndPoint = window.innerHeight;
      mouseYrange = mouseYEndPoint - mouseYStartPoint;
     }


//isse apan ko bhot different values milegi apan chate h sirf 0 se 1 ke beech mile for that let mousestart//

window.addEventListener('mousemove',mouseMove);
window.addEventListener('resize',windowResize)
//in console mouseevent clientX and clientY is horizontal and vertical data
//jaise click hota  h waise hi mousemofind error
//ve or jab bhi vo hofa mouseMove function call hoga//
//basic part is done lekin ab apan chahte h starting se nhi dikhana 300 px ke baad se 0 to 1 value dikhani h?? to set starting pont 300pxand define range//
