sap.ui.define([
    "sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
    "use strict";
    
    return BaseController.extend("sap.ui.demo.nav.controller.employee.EmployeeList", {
        onListItemPressed : function(oEvent) {
            let oItem;
            let oCtx;

            oItem = oEvent.getSource();
            oCtx = oItem.getBindingContext();

            this.getRouter().navTo("employee", {
                employeeId : oCtx.getProperty("EmployeeID")
            });
        }
    });
});