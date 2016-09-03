angular.module('apiApp').controller("mainCtrl", function($scope, starshipService){
    $scope.test = "Hey good lookin"

    $scope.retrieveStarships = function(){
         // 5               //2
        var cPromise = starshipService.getStarships();

        //6
        cPromise.then(function(starships){
            //9
            $scope.starships = starships;
        })

        //7 Wait for data to come back
    }

    //1
    $scope.retrieveStarships();


})
