'use strict';

/**
 * @ngdoc service
 * @name hcmBetaGruntApp.awsService
 * @description
 * # awsService
 * Service in the hcmBetaGruntApp.
 */
angular.module('hcmBetaGruntApp')
  .service('awsService', function ( dynDbFact) {
	return{
	addNewItem: function(name, pwd){
		var params = {
		Item: {
			username : {'S' : name},
			password : {'S' : pwd}
		},
		TableName: 'HCMUsers'
		};
		dynDbFact.getDynDbInstance().putItem(params, function(err, data) {
		if (err){ console.log(err, err.stack); // an error occurred
			return err;
		}
		else {     console.log(data);           // successful response
			return data;
		}
		});
	},
	
	queryTable: function(attr, name, tableName, callback){
		var queryResult;
		var params = {
		TableName: tableName,
		KeyConditionExpression: "#attr = :name ",
		 ExpressionAttributeNames:{
			"#attr": attr,
		},
		ExpressionAttributeValues: {
			":name":name,
		}
		}
		function searchDb(onComplete) { 
			dynDbFact.getDocClientInstance().query(params,  function(err, data) {
				if (err) {
				console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
				} else {
				console.log("Query succeeded.");
				queryResult = data;
				onComplete();
				}
			})
		};
		function onComplete() {
			callback(queryResult);
		};
		searchDb(onComplete);
		
	}
	};
  });
