sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.nav.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			// Call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// Create the views based on the url/hash
			this.getRouter().initialize();
		}

	});

});
