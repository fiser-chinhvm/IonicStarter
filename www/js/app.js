// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var db = null;

var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova']);

app.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if (window.cordova) {
      db = $cordovaSQLite.openDB({ name: "my.db", location:1 });
      // window.alert("device") //device
    }else{
      db = window.openDatabase("my.db", '1', 'my', 1024 * 1024 * 100); // browser
    }
    // console.log(data[0]);
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS diction(id integer primary key, word text, translate text, img text, audio text)");
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('select-all', {
    url: '/',
    templateUrl: 'templates/home.html'
  })
  .state('details', {
    url: '/detail/{id}',
    templateUrl: 'templates/detail.html',
    controller: 'DetailController'
  });
   
  $urlRouterProvider.otherwise('/');
});
