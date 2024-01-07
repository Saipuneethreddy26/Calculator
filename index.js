
const buttons = document.getElementsByTagName('button');
const p1= document.getElementsByTagName('p')[0];
let counter =0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
     let input=this.innerText;
        update(input);
    };
}

function update(input) {
 let current =p1.innerHTML;
  

        if (input !== "C" && input !== "Del" && input !== "=") {
            ++counter;    
            if(counter==1){
                p1.innerHTML="";
            }
            p1.innerText+=input;
           console.log(input)
        }  
        else{
            if(input==="C"){
                p1.innerHTML="0";
                counter=0;
            }
            if(input==="Del"){
                if(p1.innerHTML!== p1.innerHTML.slice(0,1)){
                p1.innerHTML=p1.innerHTML.slice(0,-1)
                }
                else{
                    p1.innerHTML="0"; 
                    counter=0;
                }

            }
            if(input==="="){
                p1.innerHTML=eval(p1.innerHTML);
            }
        }                                                                     

    }

