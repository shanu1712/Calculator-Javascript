let display= document.getElementById('display');
//console.log(buttons); //for checking that buttons are there 
let buttons=Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
  button.addEventListener('click', (e)=>{
   // console.log('clicked');  //this mapping and console.log will check if button is clicked everytime
    //console.log(e.target);//this button will print what button is clicked
   // console.log(e.target.innerText);// this will print what button is clicked along with innertext
   switch(e.target.innerText){
    case'C':
    display.innerText= '';//agar+=krenge to c bhi print hoga sath mai clear nahi hoga aur agar only equal to krenge to clear hokar cprint hoga and default ke pehle clear case ayega warna display nahi hoga kuch bhi C press krne par
    break;// break lagane par default statement nahi run hogi
    case'=':
    try{
      display.innerText= eval(display.innerText);
    }catch{
      display.innerText= 'error';
    }
    
    break;
     default:
     display.innerText +=e.target.innerText;//yeh innerText ko display krega upar
     
   }
  })
})




