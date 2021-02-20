// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
         * 
         * @param {typeof sap.ui.core.mvc.Controller}           Controller
         * 
         */

    (Controller) => {
        "use strict";

        return Controller.extend("com.ui5.invoices.controller.Main", {

            onInit: () => {

            },
            onOpenDialog: function (){
                this.getOwnerComponent().openHelloDialog();
                
            },

        });

    });