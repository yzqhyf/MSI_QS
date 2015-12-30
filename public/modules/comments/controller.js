(function() {
    'use strict'
    angular.module('main')
        .controller('CommentsCtrl', function($scope, $stateParams,$http) {
        	var self = this;
        	self.co = [];
            console.log($stateParams)

            self.newComments = function(comment){
                $http.post('/api/cm',{
                    comments: comment,
                    _id: $stateParams.qid
                }).success(function(status){
                    if(status.ok) self.co.push(comment).push($stateParams.qid);

                    // self.co = data
                }).catch(console.error)
            }
        })
})()
