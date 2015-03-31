$(function () {
	window.supporthero.base = {

		init: function init(){
			this.bindUI();
			this.manageSubNav();
			this.manageFooter();
			this.listenOnResize();
//			this.manageBullets();
			this.manageSidebarComparedHeight();
			this.manageSidebarHeight();
		},

		bindUI: function bindUI(){
			this.ui = {};
			this.ui.$win = $(window);
			this.ui.$wrapper = $('#wrapper');
			this.ui.$header = $('.navbar');
			this.ui.$footer = $('#footer');
			this.ui.$headerPopover = $('#header .popover');
		},

		manageSubNav: function manageSubNav(){
			$('.subnavbar').find ('li').each (function (i) {
				var mod = i % 3;
				if (mod === 2) {
					$(this).addClass('subnavbar-open-right');
				}
			});
		},

		manageBullets: function manageBullets() {
			if($('.js-bullet').length > 0){
				var $bullets = $('.js-bullet'),
					$firstBullet = $('.js-bullet.first'),
					$lastBullet = $('.js-bullet.last'),
					$line = $('.js-bullet-line'),
					$stepList = $('.step-manager'),
					offsetList = $stepList.offset().top,
					offsetFirstBullet = $firstBullet.offset().top,
					offsetLastBullet = $lastBullet.offset().top;
					offsetBetweenLastFirst = (offsetLastBullet - offsetFirstBullet);

				// Adding + 1 to avoid the line to be at the top of the first bullet
				// Which makes it -too- visible
				var topLine = ((offsetFirstBullet - offsetList) + 1);
				var heightLine = offsetBetweenLastFirst;

				$line.css({
					'top': topLine,
					'height': heightLine,
					'display': 'block'
				});
			}
		},

		managePopover: function managePopover(){
			if(this.ui.$headerPopover.length && this.ui.$headerPopover.hasClass('in')){
				this.ui.$headerPopover.popover('hide');
			}
		},

		manageFooter: function manageFooter(){
			var footerOuterHeight = this.ui.$footer.outerHeight(true),
				headerOuterHeight = this.ui.$header.outerHeight(true),
				wrapperMargin = parseInt(this.ui.$wrapper.css('margin-bottom'), 10),
				wrapperPadding = parseInt(this.ui.$wrapper.css('padding-top'), 10),
				windowHeight = this.ui.$win.height();

			var finalHeight = (windowHeight - headerOuterHeight - footerOuterHeight - wrapperMargin);

			if(this.ui.$wrapper.hasClass('embedded')){
				finalHeight = (finalHeight - wrapperPadding);
			}

			this.ui.$wrapper.css('min-height', finalHeight);
		},

		manageSidebarComparedHeight: function manageSidebarComparedHeight() {
			if($('.js-height-compare-target').length > 0){
				var $tableWrapper = $('.js-height-compare-target'),
					$sidebar = $('.sidebar'),
					tableHeight = $tableWrapper.outerHeight(true),
					sidebarHeight = $sidebar.outerHeight(true);

				if(tableHeight > sidebarHeight) {
					$sidebar.css('min-height', tableHeight);
				} else {
					$tableWrapper.css('min-height', sidebarHeight);
				}
			}
		},

		manageSidebarHeight: function manageSidebarComparedHeight() {
			if($('.js-sidebar-target').length > 0) {
				var $sidebar = $('.js-sidebar-target'),
					$urlList = $('.url__list-view'),
					listHeight = $urlList.outerHeight(true);

				$sidebar.css('min-height', listHeight);
			}
		},

		listenOnResize: function listenOnResize(){
			var self = this;
			this.ui.$win.smartresize(function(){
				self.managePopover();
				self.manageFooter();
			})
		}
	}

});
