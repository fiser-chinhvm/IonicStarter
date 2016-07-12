var app =  angular.module('starter.controllers', ['ionic','ngCordova','starter.services'])

app.controller("DemoController", function($scope, $ionicHistory, $cordovaSQLite, Data){
    console.log($ionicHistory);
    $scope.myGoBack = function() {
      $ionicHistory.goBack();
    };

    $scope.load = function(){
       var exampleData = "INSERT INTO diction(word, translate, img, audio) VALUES (?,?,?,?)";
      console.log(Data.all());
      angular.forEach(Data.all(),function(value,key){
        $cordovaSQLite.execute(db, exampleData,[value.word, value.translate, value.img, value.audio]).then(function(res){
          console.log(res);       
        }, function (err) {
            console.error(err);
        });
      })
    }

    $scope.insert = function(word, translate) {
        var query = "INSERT INTO diction(word, translate) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [word, translate]).then(function(res) {
          console.log(res.insertId);
        }, function (err) {
            console.error(err);
        });
    }

    $scope.selectAll = function(){
      var query = "SELECT id, word, translate, img, audio FROM diction";
      var a=[];
      $cordovaSQLite.execute(db,query,[]).then(function(res){
        for(var i = 0; i < res.rows.length; i++){
          a[i] = res.rows[i];
        }   
      }, function (err) {
        console.error(err);
      });
      $scope.lists = a;
      console.log(a);
    }
    
    $scope.select = function(word) {
        var query = "SELECT id, word, translate, img, audio FROM diction WHERE word = ?";
        $cordovaSQLite.execute(db, query, [word]).then(function(res) {
            if(res.rows.length > 0) {
              $scope.dataRow = res.rows.item(0);
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }

    $scope.delete = function(){
      var query = "DELETE FROM diction";
      $cordovaSQLite.execute(db,query,[]).then(function(res){
        console.log(res);
      }, function (err) {
            console.error(err);
      });
    }
});

app.controller('DetailController', function($scope, $stateParams, Data) {
  $scope.select($stateParams.id);
});