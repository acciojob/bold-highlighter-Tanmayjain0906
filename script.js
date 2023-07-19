function highlight() {
    const strong = document.getElementsByTagName("strong");
	
	for(let i=0;i<strong.length;i++)
		{
			strong[i].style.color = "green";
		}


}


function return_normal() {
    
   const strong = document.getElementsByTagName("strong");
	
	for(let i=0;i<strong.length;i++)
		{
			strong[i].style.color = "black";
		}
    
}
