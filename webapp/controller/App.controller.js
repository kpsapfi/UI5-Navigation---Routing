sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/base/Log"
], function (BaseController, Log) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.App", {

		onInit: function () {

			// Only for tutorial use; log level doesn't need to be set again in app dev.
			Log.setLevel(Log.Level.INFO);

			let oRouter = this.getRouter();

			oRouter.attachBypassed(function (oEvent) {
				let sHash = oEvent.getParameter("hash");

				// Action would go here, like logging data to backend for analysis
				Log.info("Sorry, but the has '" + sHash + "' is invalid.", "The resource was not found.");
			});

			oRouter.attachRouteMatched(function (oEvent) {
				let sRouteName = oEvent.getParameter("name");

				// Action here, like logging stats to back end to help improve app
				Log.info("user accessed route " + sRouteName + ", timestamp = " + Date.now());
			});
		}
	});
});

