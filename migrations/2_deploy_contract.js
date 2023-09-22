const FreelancePlatform = artifacts.require("FreelancePlatform");

module.exports = function (deployer) {
  deployer.deploy(FreelancePlatform, "0x64e6c1F92eFA24A27A4833292948c1D8E6554D74", 1000);
};
