const KeepRandomBeacon = artifacts.require("./KeepRandomBeacon.sol");
const KeepRandomBeaconStub = artifacts.require("./KeepRandomBeaconStub.sol");

module.exports = function(deployer) {
  deployer.deploy(KeepRandomBeaconStub)
    .then(function() {
      return deployer.deploy(KeepRandomBeacon, 'v1', KeepRandomBeaconStub.address);
    });
};
