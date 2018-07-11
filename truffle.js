module.exports = {
  contracts_build_directory: "./contracts/output",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 6000000
    }
  }
};
