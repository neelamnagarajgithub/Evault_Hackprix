
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT_ERC721 is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor()  ERC721("NFT_ERC721", "NFT") {}

    struct User {
        address _useraddr;
        string username;
        string email;
        uint256 _tokenId;
    }

    mapping(address => User[]) public users;

    function awardDoc(address _useraddr, string memory username, string memory _email, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newDocId = _tokenIds.current();
        _mint(_useraddr, newDocId);
        _setTokenURI(newDocId, tokenURI);

        User memory newdoc = User({
            _useraddr: _useraddr,
            username: username,
            email: _email,
            _tokenId: newDocId
        });

        users[_useraddr].push(newdoc);

        return newDocId;
    }

    function viewDoc(uint256 _tokenId) public view returns(string memory) {
        return tokenURI(_tokenId);
    }

    function viewOwner(uint256 _tokenId) public view returns(User memory) {
    address _owneraddr = ownerOf(_tokenId);
    require(users[_owneraddr].length > 0, "No users for this address");
    return users[_owneraddr][0];
}

    function cancelDoc(uint256 _tokenId) public {
        require(ownerOf(_tokenId) == msg.sender, "You are not the owner of this token");
        _burn(_tokenId);
    }

    function transferDoc(address _to, uint256 _tokenId) public {
        safeTransferFrom(msg.sender, _to, _tokenId);
    }
}