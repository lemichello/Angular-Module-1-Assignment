(function () {
    'use-strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.inputText = "";
        $scope.resultMessage = "";

        $scope.checkButtonClick = function () {
            let arrLength = $scope.inputText.split(", ").length;

            if ($scope.inputText === "") {
                $scope.resultMessage = "Please enter data first"
            } else if (arrLength <= 3) {
                $scope.resultMessage = "Enjoy!"
            } else {
                $scope.resultMessage = "Too much!"
            }
        }
    }
})();