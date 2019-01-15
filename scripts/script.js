$( document ).ready(function() {
    let name;
    let gender;
    let location;
    $( "#submit" ).click(function(event) {
          event.preventDefault();
        name =$( "#name" ).val();
        gender = $("#genderSelect option:selected").text();
        location = $("#location").val();
        window.location.href="buttons.html";
});
});