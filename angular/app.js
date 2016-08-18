'use strict';

angular.module('myApp', [])
.controller('BusinessCardController', function($scope){
  $scope.user = {
    name: 'Lim Kimhuor',
    occupation: 'Ruby Dev',
    email: 'kimhuorlim@gmail.com',
    link1: 'www.google.com',
    tusername:'kimhuorlim',
    companylogo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/logo.png',
    color1: '#c0c0c0',
    color2: 'white',
    textcolor1: '#287cc2',
    textcolor2: '#666',
    fusername:'...',
    gusername:'kimhuorlim'
  }
});
