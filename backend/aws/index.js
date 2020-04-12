var AWS = require('aws-sdk');

var creds = new AWS.Credentials();

var config = new AWS.Config({
	credentialProvider: new AWS.CredentialProviderChain([
	  // function () { return new AWS.EnvironmentCredentials('AWS'); },
	  // function () { return new AWS.EnvironmentCredentials('AMAZON'); },
	  function () { return new AWS.EC2MetadataCredentials() },
	  function () { return new AWS.SharedIniFileCredentials(); }
	  // function () { return new AWS.ECSCredentials(); },
	  // function () { return new AWS.ProcessCredentials(); },
	  // function () { return new AWS.TokenFileWebIdentityCredentials(); },
	])
})

// config.update({region: 'us-east-2'});

module.exports = AWS;