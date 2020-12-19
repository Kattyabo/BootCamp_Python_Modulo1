$(document).ready(function(){
  $('#botonjq').click(function(){
    var listajq=$('#nombrejq').val();
    $('#listajq').append('<li id="li"><a>'+listajq+'</a></li>');
    return false;
  });
    
    
});

$(document).ready(function(){
  $('#listajq').click(function(){
    $('#li').remove();
    $('input').reset();
  });
});

