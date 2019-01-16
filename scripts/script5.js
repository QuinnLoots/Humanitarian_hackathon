$( document ).ready(function() {
    let array = localStorage.getItem("test").split(';');
    for (let i = 0; i < array.length; i++) { 
        if(array[i]!="undefined"){
            $('.list-group').append("<li class='list-group-item '>"+array[i]+" </li>"); 
        }

    }

});
