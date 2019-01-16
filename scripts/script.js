
$( document ).ready(function() {
    let testvar;
    $( "#submit" ).click(function(event) {
          event.preventDefault();
        name =$( "#name" ).val();
        localStorage.setItem("name",name);
        localStorage.setItem("test",testvar);
        window.location.href="buttons.html";
});
});