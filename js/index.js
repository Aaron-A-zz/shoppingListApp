$(function(){
	function addTodo(){
		

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

	$('i.fa-times').on('click', function(){
		$('.error').hide();
	});

	
	$('body').on('click','i.fa-times', function(e){
		e.preventDefault();
		$('.error').hide();
	});

	
	$('.add-todo').click(function(e){
		e.preventDefault();
		addTodo();
	});


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

	$(document).on('click', '.delete-todo' , function(e){
		e.preventDefault();
		$(this).closest('li').fadeOut(500, function(){
			$(this).remove();
		});
	});


});