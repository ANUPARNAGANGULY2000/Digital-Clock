const hour=document.getElementById("hours");
const minute=document.getElementById("minute");
const second=document.getElementById("second");
const ampm=document.getElementById("ampm");

function timeupdate(){
    let hr=new Date().getHours();
    let min= new Date().getMinutes();
    let sec =new Date().getSeconds();
    let ampm1="AM";

    if(hr>12)
    {
        hr=hr-12;
        ampm1="PM";
    }
     
   hr= hr<10?"0"+hr : hr;
   min= min<10?"0"+min : min;
   sec= sec<10?"0"+sec : sec;

    hour.innerText=hr;
    minute.innerText=min;
    second.innerText=sec;
    ampm.innerText=ampm1;

    setTimeout(()=>{
        timeupdate();
    },1000)
}

timeupdate();