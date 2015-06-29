'use strict';

angular.module('Home')

.factory('HomeService',
    ['$http', '$cookieStore', '$rootScope', 
    function ($http, $cookieStore, $rootScope) {
        var service = {};
        console.log('rs', $rootScope);

        service.getUser = function (userid, callback) {
            $http.get('/wordpress/wp-json/users/' + userid)
                .success(function (response) {
                    console.log("GET success!(in HomeService)");
                    console.log('response.username(from wp)(in HomeService)', response.username);
                    console.log('response.ID(from wp)(in HomeService)', response.ID);
                    console.log(response);
                    callback(response);
                })
               .error(function() {
                    console.log("GET failed");

                });
           };

        // service.SetCredentials = function (username, password) {
        //     var authdata = Base64.encode(username + ':' + password);
        //     //console.log(authdata);
        //     $rootScope.globals = {
        //         currentUser: {
        //             username: username,
        //             authdata: authdata
        //         }
        //     };

        //     $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
        //     $cookieStore.put('globals', $rootScope.globals);
        //     console.log('authdata= ", authdata');
        // };

        // service.ClearCredentials = function () {
        //     $rootScope.globals = {};
        //     $cookieStore.remove('globals');
        //     $http.defaults.headers.common.Authorization = 'Basic ';
        //     //alert('hey');
        // };

        service.StoreUser = function () {
            alert('Hi');
            //alert('hey');
        };


        return service;


    }]);