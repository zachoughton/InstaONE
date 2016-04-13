(function(){

  var client_id = '1eec66a4d2424cfbb2a9c225e28a7c65';

  var app = angular.module('instaONE', []);

  app.factory("InstagramAPI", ['$http', function($http) {
    return {
      fetchPopular: function(callback){
        var endpoint = "https://api.instagram.com/v1/media/popular";
        endpoint += "?count=99";
        endpoint += "&client_id=" + client_id;
        endpoint += "&callback=JSON_CALLBACK";
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);
        });
      }
    }
  }]);

  app.controller('ShowImages', function($scope, InstagramAPI){
    $scope.data = {};
    InstagramAPI.fetchPopular(function(data){
      $scope.pics = data;
    });
  });

})();