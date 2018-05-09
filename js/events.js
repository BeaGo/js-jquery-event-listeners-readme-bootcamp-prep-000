function getIt() {
  $('p').on('click', function() {alert("Hey!")})
}

function frameIt() {
  $('img').on('load', function(event) {
    append(` class= "tasty"`)
  })
}

$(document).ready(function(){

// call functions here

});
