function Navigation(el) {
	function init() {
		this.leftNavigationBtn = this.el.querySelector('js-navigation-left');
		this.rightNavigationBtn = this.el.querySelector('js-navigation-right');
		leftNavigationBtn.addEventListener('click', this.goToPreviousPage.bind(this));
		rightNavigationBtn.addEventListener('click', this.goToNextPage.bind(this));
	}
	this.el = el;
	init.apply(this, arguments);
}

Navigation.prototype = {
	goToPreviousPage: function(evt) {
		fetch('http://localhost:3000/previousPage')
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			var template = '<div class="navigation" id="{{id}}">' +
			'{{#navigation}}<span class="current-page-description">' +
			'{{start}} to {{count}} of {{total}}' +
			'</span>{{#if isFirstPage}}'+
		'<button class="left-arrow js-navigation-left" disabled></button>'+
	'{{else}}<button class="left-arrow js-navigation-left"></button>{{/if}}'+
	'{{#if isLastPage}}<button class="right-arrow js-navigation-right" disabled>'+
	'</button>{{else}}<button class="right-arrow js-navigation-right"></button>'+
	'{{/if}}{{/navigation}}</div>';
		var renderFunction = Handlebars.compile(template);
		this.el.innerHTML = renderFunction(json);	
		});
	};
}

