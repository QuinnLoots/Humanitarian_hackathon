$( document ).ready(function() {
    $( "#subm" ).click(function() {
       let kindproblem = $("#problem option:selected").text();
        let str = "Problem,"+ kindproblem;
        localStorage.setItem("test",localStorage.getItem("test")+";"+str);

    });
});