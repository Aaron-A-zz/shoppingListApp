$(function(){
	function addTodo(e){
		e.preventDefault();

		if($('input').val().trim() == "") {

			$('.error').fadeIn(200);
			} else {
			
			$('.error').hide();
			var $todo = $('input').val(); 
			
			var $newListItem = $('<li class="todo">' + $todo + '<span>' + 
			'<a href="#" class="check">' + '<i class="fa fa-check fa-lg"></i>' + '</a>' +
			'<a href="#" class="delete-todo">' + '<i class="fa fa-trash-o fa-lg"></i>' + '</a>' + 
			'</span>' + '</li>');

			var $addListItem = $('ul').append($newListItem);

			$newListItem.hide().fadeIn(500);

			$('input').val("").focus();
		}
	};

	
	$('body').on('click','i.fa-times', function(e){
		e.preventDefault();
		$('.error').hide();
	});

	
	$('.add-todo').click(addTodo(e));


	
	$(document).on('keypress', function(e){
		if(e.which == 13) {
			addTodo();
		}
	});
	

	
	$('.clear-text').on('click', function(e) {
		e.preventDefault();
		$('input').val("").focus();
	});


	
	$(document).on('click', '.check', function(e){
		e.preventDefault();
		$(this).closest('li').toggleClass('complete');
	});


});