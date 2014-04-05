angular.module('cms.alertServices', [])
    .factory('addAlert', ['$rootScope',
    function($rootScope){
        return function(type, message, scope) {
            scope.alerts.push({ type: type, msg: message});
        }
    }])
    .factory('closeAlert', ['$rootScope',
    function($rootScope){
        return function(index, $scope) {
            scope.alerts.splice(index, 1);
        }
    }])
    .factory('alertDisplay', ['$rootScope', 'addAlert',
        function($rootScope, addAlert){
            return function(data, scope, successMsg) {
                if ( data.error != 0 ) {
                    angular.forEach(data, function(v, i){
                        if (angular.isArray(v)) {
                            angular.forEach(v, function(e,i2){
                                addAlert('danger', v[0], scope);
                            })
                        }
                    })
                } else {
                    var type = data || 'success';
                    addAlert(type, successMsg, scope);
                }
            }
    }]).factory('alertDisplayJsonResponse', ['$rootScope', 'addAlert',
        function($rootScope, addAlert){
            return function(data, scope) {
                angular.forEach(data, function(v,i){
                    console.log(data[i][0]);
                    addAlert('danger', data[i][0], scope);
                })
            }
        }]);