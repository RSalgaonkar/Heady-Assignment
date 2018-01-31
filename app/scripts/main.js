$('.select-item').on('click', function(event) {
	var value = this.attributes['name'].value;
	$('#selected-section').html(value);
})

if( $('#details').length ) {
  $('#selected-section').html('details');
}

$('.select-id').mouseover(function() {
  $('#selected-section').html(this.id);
});

$('#details-img').hide().fadeIn(2000);


// $('.over-text').animate({ 
//     top: 100,
//     left: 100,
// }).animate({
//     top: 0,
//     left: 0,
// })

// $('.description-img').animate({ 
//     top: 600,
// }).animate({
//     top: 0,
// })

// $(".description-img").fadeIn()
// 	.css({top:1000,position:'absolute'})
// 	.animate({top: 0}, 800, function() {
    
// });
