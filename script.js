var temp=document.getElementById("time");
function time(){
    time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    // console.log(time);
    document.getElementById('time').innerHTML=`${h}`+`:`+`${m}`+`:`+`${s}`;
}
setInterval(time,1000);