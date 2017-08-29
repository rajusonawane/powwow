angular.module('app').controller('app_popup', app_popup);
function app_popup($scope, app, $ionicPopup) {
    'use strict';
    var isSetup = false;
    var confirmQuestion = "";
    app.init($scope, function (data) {
        if (!isSetup) {
            app.call('popup.cancelButton');
            isSetup = true;
        }
        if ($scope.app.data && $scope.app.data.confirmQuestion) {
            confirmQuestion = $scope.app.data.confirmQuestion;
        }
    });

    //Method to handle Alert popup
    $scope.alert = function () {
        $ionicPopup.show({
            title: 'Alert/Confirm',
            subTitle: 'This is an alert box, click OK button',
            scope: $scope,
            buttons: [
                {
                    text: '<b>Ok</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (window.mocks) {
                            $scope.app.data.alertConfirmationMessage = "This is a warning message!";
                        }
                        else {
                            app.call('popup.alert');
                        }
                    }
                },
            ]
        });
    }

    //Method to handle confirm popup
    $scope.confirm = function () {
        $ionicPopup.show({
            title: 'Alert/Confirm',
            subTitle: confirmQuestion,
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel', onTap: function (e) {
                        if (window.mocks) {
                            $scope.app.data.confirmPopupText = "You pressed Cancel!";
                        }
                        else {
                            app.call('popup.cancelButton', { "confirmAnswer": "false" });
                        }
                    }
                },
                {
                    text: '<b>Ok</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (window.mocks) {
                            $scope.app.data.confirmPopupText = "You pressed OK!";
                        }
                        else {
                            app.call('popup.confirmAnswer', { "confirmAnswer": "true" });
                        }
                    }
                },
            ]
        });
    }
}