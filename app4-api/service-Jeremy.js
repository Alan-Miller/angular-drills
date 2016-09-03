//http://swapi.co/api/starships/

angular.module('apiApp').service('starshipService', function($http){

    var baseUrl = "http://swapi.co/api/starships/";

    this.getStarships = function(){
        //3
        var promise = $http({
            method: 'GET',
            url: baseUrl
        }).then(function(response){
            //8 - We got data back
            if(response.status === 200){
                return response.data;
            } else {
                return "Error getting data";
            }
        })

        //4
        return promise;
    }

})
