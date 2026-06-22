
const target = new Date('2026-07-05T08:00:00');
function updateCountdown(){
const diff = target - new Date();
if(diff<0){document.getElementById('countdown').innerHTML='Wedding Day Has Arrived!';return;}
const d=Math.floor(diff/86400000);
const h=Math.floor((diff%86400000)/3600000);
const m=Math.floor((diff%3600000)/60000);
const s=Math.floor((diff%60000)/1000);
document.getElementById('countdown').innerHTML=`${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;
}
setInterval(updateCountdown,1000);
updateCountdown();
