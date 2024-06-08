const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let newwords = "";
let randwords = "";
let play=false;//abhi hmara game shuru nhi hua h also neeche jo function h apan ne andar he define kr diya apan bahar bhi kr skte h
let swords = ['bangladesh','algeria','china','argentina','austria','australia','afghanistan','bahamas','belgium','italy','sanfrancisco','pakistan','thailand','veitnam','bhutan','mexico','liberia','austria']
//apan ne array to define krdiya now we want to generate random numbers  and to make them integers we will use math.floor
const createnewwords = () => {
    let ranNum = Math.floor(Math.random()*swords.length);
    let newwords = swords[ranNum];
   return newwords;
}
//newwords will give any randomnumer => name of word
 //koi bhi word ko split krke array me convert krna ho to .split("") and join for vice versa now apan ko aapas me shuffle krna h we will use scrambleword
 const scramblewords = (arr) =>{
      for(let i=arr.length-1;i>0;i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i]=arr[j];
       arr[j]=temp;
      }
      return arr; 
 }


btn.addEventListener('click',function(){if(!play){
    play=true;
    //apan chahte h jaise hi button pe click kre html changes to guess for that and apan ko input feild dikhana h itni der it was hidden so we will use toggle
    btn.innerHTML="Guess";
    guess.classList.toggle('hidden');
    newwords = createnewwords();
    randwords = scramblewords(newwords.split(""));
   
    //now we want to show that randword in the box for that
    msg.innerHTML = randwords.join("");
}
else{
    let tempword = guess.value;
    if(tempword === newwords){
        play = false;
        msg.innerHTML = 'nice its correct';
        btn.innerHTML = 'start again';
        guess.classList.toggle('hidden');
        guess.value = "";//ye usse value ko khali kr dega
    }
    else{
      msg.innerHTML = `sorry plz try again  ${randwords.join("")} ` ;}
     
    }
}

)