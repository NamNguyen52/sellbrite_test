function WikiCtrl($http, $q, $log) {
  var vm = this;
  vm.titles = [];

  function getLatesUpdates() {
    $http.get('/latest.json')
      .success(function(data) {
        vm.titles = data;
      });
  };
  getLatesUpdates();
};

angular.module('wikiTitles')
  .controller('WikiCtrl', WikiCtrl);
