'use strict';

/**
 * @ngdoc service
 * @name hcmBetaGruntApp.dynDbFact
 * @description
 * # dynDbFact
 * Factory in the hcmBetaGruntApp.
 */
angular.module('hcmBetaGruntApp')
  .factory('dynDbFact', function () {

    var cognitoAuth = function cognitoAuth() {
		var creds = new AWS.CognitoIdentityCredentials({
		
		})

		AWS.config.update({
			region: 'us-east-1',
			credentials: creds
		});
	}
	
	return {
	getDynDbInstance: function() {
	  cognitoAuth();
		var dynamodb = new AWS.DynamoDB();
        return dynamodb;
      },
	  
	  getDocClientInstance: function() {
	  cognitoAuth();
		var docClient = new AWS.DynamoDB.DocumentClient();
        return docClient;
      }
	
    };
  });
