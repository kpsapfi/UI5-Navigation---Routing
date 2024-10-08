sap.ui.define([
    "sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
    "use strict";
    return BaseController.extend("sap.ui.demo.nav.controller.NotFound", {
        onInit: function() {

            let oRouter;
            let oTarget;

            oRouter = this.getRouter();
            oTarget = oRouter.getTarget("notFound");
            oTarget.attachDisplay(function (oEvent) {
                this._oData = oEvent.getParameter("data"); // store the data
            }, this)

        },

        // Override the parent's onNavBack (inherited from BaseController)
        onNavBack: function () {
            // In some cases, we could display a certain target when the back button is pressed
            if (this._oData && this._oData.fromTarget) {
                this.getRouter().getTargets().display(this._oData.fromTarget);
                delete this._oData.fromTarget;
                return;
            }

            // Call the parent's onNavBack
            BaseController.prototype.onNavBack.apply(this, arguments);
        }
    });
});