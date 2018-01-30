$('.select-item').on('click', function(event) {
	var value = this.attributes['name'].value;
	$("#selected-section").html(value);
})
