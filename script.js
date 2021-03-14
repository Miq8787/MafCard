


let n;
let karmir,sev,sherif,don;
let mafiaCards = [];
let i;
setTimeout(function myFunc(){
    let l = document.getElementById("load");
    l.remove();
},8000)

setTimeout(function inFunc(){
    let u = document.getElementById("s");
    u.remove();
},4000)

let p=0;

let t=0;
let v=0;
function start(){
   


    let number= document.getElementById("numberInput");
    let num =  document.getElementById("numberInput").value;
    let playernumber = document.getElementById("playernumber");
    
    let n=num;
    let karmir=0, sev=0, sherif=0,don=0;
   
    if(parseInt(num)<5 || parseInt(num)>20){
        number.style.color = "red";
        number.style.fontSize = "100";
      setTimeout(function start(){
        number.style.color = "black";
        number.style.fontSize = "80";
      }, 1500);
    }
    else{   
        let video = document.createElement("VIDEO");
        video.className = "load";
        video.id = "v";
        video.setAttribute("src", "SKSVEC.mp4");
        video.setAttribute("autoplay", "autoplay");
        document.body.appendChild(video)

        let b = document.createElement("div");
        b.className = "dv";
        b.id = "dv";
        document.body.appendChild(b);


        setTimeout(function sksvec(){
            v = document.getElementById("v");
           v.remove();

           dv = document.getElementById("dv");
           dv.remove();
            },3000);

           
    for( ; v<n;  ){
        let k = Math.floor(Math.random() * 10);
        if(k%2==0 && k-5<0 && karmir<Math.floor(n-(n-2)/2)){
            let d=document.createElement("div");
            d.className = "cards";
            d.id = "card" + t;  
            d.style.backgroundImage = "url(KARMIR.png)";
            document.body.appendChild(d);
            karmir++;

            let hajord = document.createElement("button");
            hajord.className = "hajord";
            hajord.id = "hajord";
            hajord.setAttribute("onclick","del()");
            hajord.innerHTML = "Հաջորդը";
            d.appendChild(hajord);

            let nm = document.createElement("p");
            nm.className = "nm";
            nm.innerHTML = "ՀԱՄԱՐ "+(n-v);
            d.appendChild(nm);

            mafiaCards[v++]= document.getElementById("card"+t++);
        }
        else if(k%2==1 && k-5>0 && sev<Math.floor((n-3)/2)-1) {
            let d=document.createElement("div");
            d.className = "cards"; 
            d.id = "card" + t;
            d.style.backgroundImage = "url(SEV.png)";
            document.body.appendChild(d);
            sev++;
           
            let hajord = document.createElement("button");
            hajord.className = "hajord";
            hajord.id = "hajord";
            hajord.setAttribute("onclick","del()");
            hajord.innerHTML = "Հաջորդը";
            d.appendChild(hajord);


            let nm = document.createElement("p");
            nm.className = "nm";
            nm.innerHTML = "ՀԱՄԱՐ "+(n-v);
            d.appendChild(nm);

            mafiaCards[v++]= document.getElementById("card"+t++);
        }
        else if(k%2==1 && k-5<0 && don<1){
            let d=document.createElement("div");
            d.className = "cards"; 
            d.id = "card" + t;
            d.style.backgroundImage = "url(DON.png)";
            document.body.appendChild(d);
            don++;
           
            let hajord = document.createElement("button");
            hajord.className = "hajord";
            hajord.id = "hajord";
            hajord.setAttribute("onclick","del()");
            hajord.innerHTML = "Հաջորդը";
            d.appendChild(hajord);

            
            let nm = document.createElement("p");
            nm.className = "nm";
            nm.innerHTML = "ՀԱՄԱՐ "+(n-v);
            d.appendChild(nm);

            mafiaCards[v++]= document.getElementById("card"+t++);
        }
        else if(k%2==0 && k-5>0 && sherif < 1){
            let d=document.createElement("div");
            d.className = "cards";  
            d.id = "card" + t;
            d.style.backgroundImage = "url(SHERIF.png)";
            document.body.appendChild(d);
            sherif++;
          
            let hajord = document.createElement("button");
            hajord.className = "hajord";
            hajord.id = "hajord";
            hajord.setAttribute("onclick","del()");
            hajord.innerHTML = "Հաջորդը";
            d.appendChild(hajord);

            
            let nm = document.createElement("p");
            nm.className = "nm";
            nm.innerHTML = "ՀԱՄԱՐ "+(n-v);
            d.appendChild(nm);


            mafiaCards[v++] = document.getElementById("card"+t++);
        }
     
        
    }
    p=v;
    
    onload.sksvec();
}
}


function del(){
    mafiaCards[--p].remove();
    v=0;
} 








 /*  else if(sherif < 1){
            let d=document.createElement("div");
            d.className = "cards"; 
            d.id = "card" + t;
            d.style.backgroundImage = "url(SHERIF.png)";
            document.body.appendChild(d);
            sherif++;

            let hajord = document.createElement("button");
            hajord.className = "hajord";
            hajord.id = "hajord";
            hajord.setAttribute("onclick","del()");
            hajord.innerHTML = "Հաջորդը";
            d.appendChild(hajord);

            v++;
            let nm = document.createElement("p");
            nm.className = "nm";
            nm.innerHTML = "ՀԱՄԱՐ "+(n-i);
            d.appendChild(nm);

            mafiaCards[i]= document.getElementById("card"+t++);
        }
        else if(don < 1){
            let d=document.createElement("div");
            d.className = "cards";
            d.id = "card" + t; 
            d.style.backgroundImage = "url(DON.png)";
            document.body.appendChild(d);
            don++;

            let hajord = document.createElement("button");
            hajord.className = "hajord";
            hajord.id = "hajord";
            hajord.setAttribute("onclick","del()");
            hajord.innerHTML = "Հաջորդը";
            d.appendChild(hajord);

            v++;
            let nm = document.createElement("p");
            nm.className = "nm";
            nm.innerHTML = "ՀԱՄԱՐ "+(n-i);
            d.appendChild(nm);


            mafiaCards[i]= document.getElementById("card"+t++);
        }
        else if( karmir<Math.floor(n-((n-2)/2))){
            let d=document.createElement("div");
            d.className = "cards"; 
            d.id = "card" + t;
            d.style.backgroundImage = "url(KARMIR.png)";
            document.body.appendChild(d);
            karmir++;

            let hajord = document.createElement("button");
            hajord.className = "hajord";
            hajord.id = "hajord";
            hajord.setAttribute("onclick","del()");
            hajord.innerHTML = "Հաջորդը";
            d.appendChild(hajord);

            v++;
            let nm = document.createElement("p");
            nm.className = "nm";
            nm.innerHTML = "ՀԱՄԱՐ "+(n-i);
            d.appendChild(nm);

            mafiaCards[i]= document.getElementById("card"+t++);
        }
        else if( sev<Math.floor((n-3)/2)-1){
            let d=document.createElement("div");
            d.className = "cards"; 
            d.id = "card" + t;
            d.style.backgroundImage = "url(SEV.png)";
            document.body.appendChild(d);
            sev++;

            let hajord = document.createElement("button");
            hajord.className = "hajord";
            hajord.id = "hajord";
            hajord.setAttribute("onclick","del()");
            hajord.innerHTML = "Հաջորդը";
            d.appendChild(hajord);

            v++;

            let nm = document.createElement("p");
            nm.className = "nm";
            nm.innerHTML = "ՀԱՄԱՐ "+(n-i);
            d.appendChild(nm);

            mafiaCards[i]= document.getElementById("card"+t++);
        }
       */