// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
         * 
         * @param {typeof sap.ui.core.mvc.Controller}           Controller
         * @param {typeof sap.m..MessageToast}                  MessageToast
         * 
         * 
         */

    (Controller, MessageToast) => {
        "use strict";

        return Controller.extend("com.ui5.invoices.controller.HelloPanel", {

            onInit: () => {

            },

            onShowHello: function () {

                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("Mensage", [sRecipient]);

                MessageToast.show(sMsg);
            }

        });

    });