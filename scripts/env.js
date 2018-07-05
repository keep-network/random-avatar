const fs = require('fs');
const KeepRandomBeacon = artifacts.require("./KeepRandomBeacon.sol");
const KeepRandomBeaconImplementation = artifacts.require("./KeepRandomBeaconStub.sol");

module.exports = async function() {
  const keepRandomBeacon = await KeepRandomBeacon.deployed();
  const keepRandomBeaconImplementation = await KeepRandomBeaconImplementation.deployed();

  // Write deployed contract addresses into the .env file
  fs.writeFileSync(process.cwd() + "/.env",
  "REACT_APP_RANDOM_BEACON_ADDRESS=" + keepRandomBeacon.address +
  "\nREACT_APP_RANDOM_BEACON_IMPLEMENTATION_ADDRESS=" + keepRandomBeaconImplementation.address);
};
