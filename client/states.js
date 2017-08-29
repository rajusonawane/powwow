angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.popup', {
        views: {
            app: {
                controller: 'app_popup',
                templateProvider: function (app) {
                    return app.templateProvider('app.popup');
                }
            }
        }
    }).state('app.howto', {
        views: {
            app: {
                controller: 'app_howto',
                templateProvider: function (app) {
                    return app.templateProvider('app.howto');
                }
            }
        }
    });
});