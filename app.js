function formulaire () {

	var obj = {
		first:$('#first_name').val(),
	    name:$('#last_name').val(),
		ville:$('#city').val()
	};
	console.log(obj.first); 
	$('#username').html(obj.first +' '+ obj.name +' '+ obj.ville);
}

$("button").click(formulaire);
