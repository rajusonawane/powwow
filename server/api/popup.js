'use strict';

var logger = require('powwow-server-common').logger;
var stateManager = require('powwow-server-common').stateManager;
var states = stateManager.states;
var config = require('../config');

//API to handle alert popup
exports.alert = function (page, params) {
    page
        .action("alert", "alertAction")
        .onAlert("_alert")
        .onTimer(600)
        .data(function(data) {
            data.alertMessage = { type: "Alert", message: data._alert };
            delete data._alert;
        })
        .extract("alert")
        .screen('popup');
};

exports.cancelButton = function (page, params) {
    page.confirmClickCancel();
    page.onConfirm('confirmQuestion')
        .screen('popup');

    // Do the action that will cause the confirm to popup.  We will answer "Cancel".
    page.action("alert", "confirm")
        .onTimer(500)
        .extract("alert")
        .screen('popup');
};

// Method called by client once user answers confirm question on mobile client.
exports.confirmAnswer = function (page, params) {
    if (params.confirmAnswer == "true") {
        page.confirmClickOK()
            // Again, do the action that will cause the confirm to popup.  We will answer "OK" this time.
            .action("alert", "confirm")
            .onTimer(500)
            .extract("alert")
            .screen('popup');
    } else {
        // Do nothing, we already said "Cancel" to original app.
    }
};
