window.GatherContent = window.GatherContent || {};

( function( window, document, $, undefined ) {
	'use strict';

	this.$id = function( id ) {
		return $( document.getElementById( id ) );
	};

	this.log = require( './log.js' ).bind( this );

	var main = this.main = {};

	main.init = function() {
		$( document.body )
			.on( 'click', '.gc-nav-tab-wrapper:not( .gc-nav-tab-wrapper-bb ) .nav-tab', main.changeTabs )
			.on( 'click', '.gc-reveal-items', main.maybeReveal );
	};

	main.changeTabs = function( evt ) {
		evt.preventDefault();

		main.$tabNav = main.$tabNav || $( '.gc-nav-tab-wrapper .nav-tab' );
		main.$tabs = main.$tabs || $( '.gc-template-tab' );

		main.$tabNav.removeClass( 'nav-tab-active' );
		$( this ).addClass( 'nav-tab-active' );
		main.$tabs.addClass( 'hidden' );
		$( document.getElementById( $( this ).attr( 'href' ).substring(1) ) ).removeClass( 'hidden' );
	};

	main.maybeReveal = function( evt ) {
		var $this = $( this );
		evt.preventDefault();

		if ( $this.hasClass( 'dashicons-arrow-right' ) ) {
			$this.removeClass( 'dashicons-arrow-right' ).addClass( 'dashicons-arrow-down' );
			$this.next().removeClass( 'hidden' );
		} else {
			$this.removeClass( 'dashicons-arrow-down' ).addClass( 'dashicons-arrow-right' );
			$this.next().addClass( 'hidden' );
		}
	};

	$( main.init );

} ).call( window.GatherContent, window, document, jQuery );
