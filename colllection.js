var product=document.querySelector(".productmain")
var search=document.getElementById("search")
var productlist=product.querySelectorAll("div")
search.addEventListener("keyup",function(){
var enteredvalue=event.target.value.toUpperCase()
for(count=0;count<productlist.length;count=count+1){
    var proname=productlist[count].querySelector("p").textContent
    if(proname.toUpperCase().indexOf(enteredvalue)<0){
        productlist[count].style.display="none"
    }
    else{
          productlist[count].style.display="block"
    }
}
})