function agecolculater(){
    const dob=document.querySelector("#dob").value;
    const day=new Date(dob);
    const time=day.getTime();
    const today=new Date();
    const timenow=today.getTime();
   const value=timenow-time;
   const sec=value/1000;
   const min=sec/60;
   const hour=min/60;
   const dday=hour/24;
   const week=dday/7;
   const mouth=dday/30;
   const year=mouth/12;
   console.log(year);
   console.log(mouth);
   console.log(dday);
   console.log(hour);
   console.log(min);
   console.log(sec);

   document.querySelector("#year").innerHTML="Total year :" +Math.floor(year);
   document.querySelector("#month").innerHTML="Total month :" +Math.floor(mouth);
   document.querySelector("#week").innerHTML="Total week :" +Math.floor(week);
   document.querySelector("#day").innerHTML="Total day :" +Math.floor(dday);
   document.querySelector("#hour").innerHTML="Total hour :" +Math.floor(hour);
   document.querySelector("#min").innerHTML="Total min :" +Math.floor(min);
   document.querySelector("#sec").innerHTML="Total sec :" +Math.floor(sec);



    
}