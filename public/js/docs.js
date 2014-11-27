$(document).ready(function(){

	$(document).pjax('header a', '#pjax-container')

	$searching = $('.searching');
	$searchbar = $('#search input');
	$components = $('.results #components > section');
	
	if ($searchbar.val() == '') {
		$searching.hide();
	};

	// Component searching
	$searchbar.on('keyup', function search_components(){

		var input_val = $(this).val().toLowerCase();

		if (input_val.length) {
			$components.hide();
			$searching.hide();
			$('section[id*="' + input_val + '"]').fadeIn();

			$('section[id*="' + input_val.replace(/ /g,'') + '"]').show();
			$('.searching h2').html('Sorry, but "' + input_val + '" isn\'t a component.')

		}

		else {
			$searching.hide();
			$components.fadeIn();
		}

		if ($searchbar.val() == '') {
			$searching.hide();
		};

	});

	$('ul.components_list li a').click(function(){
			replacement = $(this).html();
			$searchbar.val(replacement);
			var input_val = replacement.toLowerCase()
			$components.hide();
			$searching.show();
			$('section[id*="' + input_val + '"]').fadeIn();
			$searching.hide();
		});

	// Disable form submission for demo purposes
    $('form').on('submit', function() {
        return false;
    });
});

// CDN Copy