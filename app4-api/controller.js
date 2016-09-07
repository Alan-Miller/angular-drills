angular.module('apiApp').controller('apiController', function($scope, apiService) {


  $scope.getPeeps = function() {
    apiService.getPeeps().then(function(thePeeps) {
      $scope.peeps = thePeeps;
      // Pull images off the internet (not from API)
      for (var i = 0; i < thePeeps.length; i++) {
        if (thePeeps[i].name === 'Luke Skywalker') {
          $scope.peeps[i].img = 'http://screencrush.com/442/files/2015/10/luke-skywalker-evil-pic.jpg';
        } else if (thePeeps[i].name === 'C-3PO') {
          $scope.peeps[i].img = 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2015/11/23/c3po.jpg?itok=x9ybpx6a';
        } else if (thePeeps[i].name === 'R2-D2') {
          $scope.peeps[i].img = 'http://3.bp.blogspot.com/-HIG3BUXFfbw/Tolf92x5JsI/AAAAAAAAIUw/59_OxLSVYIY/s1600/StarWarsIV_047Pyxurz.jpg';
        } else if (thePeeps[i].name === 'Darth Vader') {
          $scope.peeps[i].img = 'http://static.srcdn.com/wp-content/uploads/darth-vader-10-most-dangerous-star-wars-villains.jpeg';
        } else if (thePeeps[i].name === 'Leia Organa') {
          $scope.peeps[i].img = 'http://dorksideoftheforce.com/files/2015/05/Princess_Leia_1.jpg';
        } else if (thePeeps[i].name === 'Owen Lars') {
          $scope.peeps[i].img = 'http://img.lum.dolimg.com/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=768';
        } else if (thePeeps[i].name === 'Beru Whitesun lars') {
          $scope.peeps[i].img = 'http://vignette3.wikia.nocookie.net/headhuntersholosuite/images/1/17/Beru_Lars_001.jpg/revision/latest?cb=20100317024358';
        } else if (thePeeps[i].name === 'R5-D4') {
          $scope.peeps[i].img = 'https://i.ytimg.com/vi/dnZykJGnSdw/maxresdefault.jpg';
        } else if (thePeeps[i].name === 'Biggs Darklighter') {
          $scope.peeps[i].img = 'http://img.lum.dolimg.com/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=768';
        } else if (thePeeps[i].name === 'Obi-Wan Kenobi') {
          $scope.peeps[i].img = 'http://twt-thumbs.washtimes.com/media/image/2015/11/02/ObiWanKenobi_c0-101-1200-800_s885x516.jpg?726f0dbe994d62d98413c8152ddfba4a033ba232';
        }
      }
      // Send species url in $http request to get species info back
      thePeeps.forEach(function(peepElem, peepIndex) {
        apiService.getSpecies(peepElem.species).then(function(speciesData) {
          $scope.peeps[peepIndex].species.classification = speciesData.classification;
          $scope.peeps[peepIndex].species.name = speciesData.name;
        });
      });
      // Send homeworld url in $http request to get homeworld info back
      thePeeps.forEach(function(peepElem, peepIndex) {
        apiService.getHomeworld(peepElem.homeworld).then(function(homeworldData) {
          $scope.peeps[peepIndex].homeworld = homeworldData.name;
        });
      });
      // Send film urls in $http request to get films info back
      thePeeps.forEach(function(peepElem, peepIndex) {
        peepElem.films.forEach(function(filmElem, filmIndex) {   // Tried a for loop. Browser said no. Nested .forEach works.
            apiService.getFilm(filmElem).then(function(filmData) {
              peepElem.films[filmIndex] = filmData;
              console.log(filmData);
            });
        });
      });
    });
  };
  $scope.getPeeps();


});
