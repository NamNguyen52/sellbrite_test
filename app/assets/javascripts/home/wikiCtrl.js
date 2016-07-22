function WikiCtrl($http, $q, $log, $interval, wikiService) {
  const vm = this;
  let pullLatest = null;

  const getLatesUpdates = () => {
    wikiService.getLatest()
      .then((data) => {
        vm.titles = data.data;
      }, (error) => {
        $log.log(error);
      });
  };

  vm.startUpdate = () => {
    pullLatest = $interval(() => { getLatesUpdates(); }, 5000);
  };

  vm.stopUpdate = () => {
    $interval.cancel(pullLatest);
  };

  getLatesUpdates();
  vm.startUpdate();

};

angular.module('wikiTitles')
  .controller('WikiCtrl', WikiCtrl);
