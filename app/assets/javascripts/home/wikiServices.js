function wikiService($http, $q, $log) {

  // calls the rails wikipedia api end point
  this.getLatest = () => {
    const deferred = $q.defer();
    $http.get('/latest.json')
      .then((data) => {
        deferred.resolve(data);
      }, (error) => {
        deferred.reject(error);
      });
      return deferred.promise;
  };

};

angular.module('wikiTitles')
  .service('wikiService', wikiService);
