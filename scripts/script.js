
$( document ).ready(function() {
    let gender;
    let location;
    let testvar;
    $( "#submit" ).click(function(event) {
          event.preventDefault();
        name =$( "#name" ).val();
        localStorage.setItem("name",name);
        localStorage.setItem("test",testvar);
        gender = $("#genderSelect option:selected").text();
        location = $("#location").val();
        window.location.href="buttons.html";
});
});