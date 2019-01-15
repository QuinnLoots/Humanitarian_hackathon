
$( document ).ready(function() {
    let gender;
    let location;
    $( "#submit" ).click(function(event) {
          event.preventDefault();
        name =$( "#name" ).val();
        localStorage.setItem("name",name);
        gender = $("#genderSelect option:selected").text();
        location = $("#location").val();
        window.location.href="buttons.html";
});
});