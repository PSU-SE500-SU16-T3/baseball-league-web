app.controller('SocialMedia-Controller' ,function ($scope, $uibModalInstance) {


  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});