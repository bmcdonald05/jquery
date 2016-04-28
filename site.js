

// $('.square').click(function() {
//  alert('Clicked!'); 
// });


$("#circle").click(function() {
  $('img').attr('src', 'http://media.giphy.com/media/b3ZpODSenmgjC/giphy.gif');
  });

$("#buttons").click(function() {
	$(".p1").html("We changed both!")
	});

// changes the div you click into blue
$('div').click(function() {
  $(this).css('background-color', 'blue');
  });
