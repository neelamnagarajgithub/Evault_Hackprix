const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTmodule", (m) => {

  const NFT_ERC721 = m.contract("NFT_ERC721", []);
  console.log(NFT_ERC721.address);
  return { NFT_ERC721 };
});
