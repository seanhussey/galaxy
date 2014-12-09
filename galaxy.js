$('[st-role="trigger"]').on('click',function(event){
	event.stopPropagation();
	var $this = $(this),
		whichGroup = $this.attr('st-group'),
		$whichTriggers = $('[st-role="trigger"][st-group="' + whichGroup + '"]'),
		whichState = $this.attr('st-state'),
		stateRemove = $this.attr('st-remove'),
		isReady = $this.is('[st-ready]'),
		isRemove = $this.is('[st-remove]'),
		isRestricted = $this.is('[st-restrict]'),
		$toggleTarget = $('[st-role="target"][st-group="' + whichGroup + '"]'),
		$removeTarget = $('.' + stateRemove + '[st-role="target"]'),
		$inactiveTriggers = $('[st-remove="' + stateRemove + '"][st-role="trigger"]');
	if((isReady && ($this.attr('st-ready') === 'true')) || !isReady ){
		if(isRestricted){
			if($this.attr('st-restrict') === 'off'){
				$toggleTarget.removeClass(whichState);
				$whichTriggers.removeClass('st-activated');
			}
			else if($this.attr('st-restrict') === 'on'){
				$toggleTarget.addClass(whichState);
				$whichTriggers.addClass('st-activated');
			}
		}
		else {
			if(!$this.hasClass('st-activated')){
				$inactiveTriggers.removeClass('st-activated');
				$whichTriggers.addClass('st-activated');
			}
			else{
				$whichTriggers.removeClass('st-activated');
				if(isRemove){
					$whichTriggers.addClass('st-activated');
				}
			}
			$removeTarget.removeClass(stateRemove);
			$toggleTarget.toggleClass(whichState);
		}
	}
});

$('[st-role="activate"]').on('click',function(){
	var whichToggle = $(this).attr('st-group');
	$('[st-role="trigger"][st-group="' + whichToggle + '"]').attr('st-ready','true');
});

$('[st-role="target"]').on('click',function(event){
	event.stopPropagation();
});


// Fixed header

var isFixedHeader = $('header').is('[g~="fixed"]'),
	headerHeight = $('header[g~="fixed"]').outerHeight();

if(isFixedHeader){
	$('body').css({
		marginTop: headerHeight + 'px'
	});
}

// Fixed modal content
var isFixedModalHeader = $('.modal_box .header').is('[g~="fixed"]'),
	modalHeaderHeight = $('.modal_box .header').outerHeight();

if(isFixedModalHeader){
	$('.modal_box header[g~="fixed"] .content').css({
		marginTop: modalHeaderHeight + 'px'
	});
}