function getIt() {
  $('p').on('click', function() {alert("Hey!")})
}

function frameIt() {
  $('img').on('load', function() {
    $('img').append(" class = 'tasty'")
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which === 71) {
      alert("G was pressed!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    
  })
}

$(document).ready(function(){

// call functions here

});
