function WikiCtrl($http, $q, $log, $interval, wikiService) {
  const vm = this;
  vm.error = false;
  vm.btnTxt = 'Geeze, pause the update! I want to read one these';
  let pullLatest = null;
  let shouldUpdate = true;

  // calls the custom wikipedia api angular service end point to pull in new titles
  const getLatesUpdates = () => {
    wikiService.getLatest()
      .then((data) => {
        vm.titles = data.data;
      }, (error) => {
        vm.error = true;
        stopUpdate();
      });
  };

  // starts pulling in new titles every 5 seconds
  const startUpdate = () => {
    getLatesUpdates();
    pullLatest = $interval(() => { getLatesUpdates(); }, 5000);
  };

  // stops the pulling of new titles
  const stopUpdate = () => {
    $interval.cancel(pullLatest);
  };

  // updates btn text
  const updateBtnText = () => {
    shouldUpdate ? vm.btnTxt = 'Geeze, pause the update! I want to read one these' : vm.btnTxt = 'Mmk! Start updating again';
  };

  // toggles between starting and stopping pulling titles
  vm.toggleUpdatePull = () => {
    shouldUpdate = !shouldUpdate
    updateBtnText();
    shouldUpdate ? startUpdate() : stopUpdate();
  };

  // initial functions ran on app startup
  getLatesUpdates(); // gets the initial titles
  startUpdate(); // starts pulling in new titles every 5 seconds

};

angular.module('wikiTitles')
  .controller('WikiCtrl', WikiCtrl);
