var path = require('path');
module.exports = {
  contracts_build_directory: path.join(__dirname, "./contracts/output"),
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 6000000
    }
  }
};
