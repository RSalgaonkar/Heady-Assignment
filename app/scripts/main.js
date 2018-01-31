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

$('#details-img').hide().slideDown(2000);
$('.description-img').hide().slideDown(2000);
$('.second-descp').hide().slideDown(2000);

$('.over-text').animate({ 
    top: 100,
    left: 100,
}).animate({
    top: 0,
    left: 0,
})
