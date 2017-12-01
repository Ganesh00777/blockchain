var Voting = artifacts.require("./PatientInfo.sol");
module.exports = function(deployer) {
  deployer.deploy(Voting, 123, 'ganesh','weqweqwe',12323);
  deployer.deploy(Voting, 12333, 'gaa','weqweqwe',12323);
};