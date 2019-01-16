$( document ).ready(function(){

    $(".btns").click(function(){
        product = $(this).text();
        let farmer = $("#farmer option:selected").text();

        localStorage.setItem("product",product);
        localStorage.setItem("farmer",farmer);

        window.location.href="amount.html";

    });
   
});