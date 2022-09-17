pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ProofIdNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(address => uint256[]) private nfts;

    constructor() ERC721("ProofIdNFT", "PNFT") {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        nfts[recipient].push(newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function getAllNFTs(address _owner)
        external
        view
        returns (string[] memory result)
    {
        uint256[] memory allIds = nfts[_owner];
        uint256 totalItems = allIds.length;

        result = new string[](totalItems);

        for (uint256 index = 0; index < totalItems; index++) {
            uint256 currentId = allIds[index];
            result[index] = tokenURI(currentId);
        }

        return result;
    }
}
