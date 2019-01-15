
$( document ).ready(function(){

    $(".btn").click(function(){
        product = $(this).text();
        localStorage.setItem("product",product);

        window.location.href="amount.html";

    });
   
});