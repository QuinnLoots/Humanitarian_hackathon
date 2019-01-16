$( document ).ready(function() {
  $("#tekst").text("Amount of "+ localStorage.getItem("product"));
  $( "#subm" ).click(function() {

  
    let str = localStorage.getItem("farmer") + ","+localStorage.getItem("product")+","+$("#amount").val();
    localStorage.setItem("test",localStorage.getItem("test")+";"+str);
    
   
  });
});
