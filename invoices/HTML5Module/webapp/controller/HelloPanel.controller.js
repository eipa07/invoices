// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],
    /**
         * 
         * @param {typeof sap.ui.core.mvc.Controller}           Controller
         * @param {typeof sap.m..MessageToast}                  MessageToast
         * @param {typeof sap.ui.core.Fragment} Fragment
         * 
         */

    (Controller, MessageToast, Fragment) => {
        "use strict";

        return Controller.extend("com.ui5.invoices.controller.HelloPanel", {

            onInit: () => {

            },

            onShowHello: function () {

                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("Mensage", [sRecipient]);

                MessageToast.show(sMsg);
            },

            onOpenDialog: function (){
                const oView = this.getView();

                if (!this.byId("helloDialog")) {
                    Fragment.load({
                    id: oView.getId(),
                    name: "com.ui5.invoices.view.HelloDialog"
                }).then(function (oDialog){
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
                } else {
                    this.byId("helloDialog").open();
                }
                
            }

        });

    });