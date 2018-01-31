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