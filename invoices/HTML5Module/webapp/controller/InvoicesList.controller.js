// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/InvoicesFormatter"
], 
/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.ui.model.json.JSONModel} JSONModel 
 */

function(Controller, JSONModel, InvoicesFormatter){

    return Controller.extend("com.ui5.invoices.controller.InvoicesList", {
        
        formatter: InvoicesFormatter,

        onInit: function(){
            var oViewModel = new JSONModel({
                usd: "USD",
                eur: "EUR"
            });

            this.getView().setModel(oViewModel, "currency");
        }

    });

});