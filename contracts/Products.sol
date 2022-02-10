// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract Products {
    struct ProductInfo {
        string nameOfProd;
        uint256 uniqueId;
        string orgnCounty;
        address owner;
    }
    // map the address to the productInfo
    // defining the array the products or structs
    ProductInfo[] private prodArr;
    event productAdded(ProductInfo product);

    // mapping (address => productInfo)
    // mapping(address=>ProductInfo) private ownerAdd;

    // To add the products
    function addProd(
        string memory _productName,
        string memory _originCountry,
        uint256 _id
    ) external {
        ProductInfo memory newProd = ProductInfo({
            nameOfProd: _productName,
            uniqueId: _id,
            orgnCounty: _originCountry,
            owner: msg.sender
        });
        prodArr.push(newProd);
        emit productAdded(newProd);
    }

    // To reterive all the information about registered product
    // Pass the whole storage level ProductInfo array as we wanted to return all the array items.

    function getProd() public view returns (ProductInfo[] memory) {
        return prodArr;
    }
}
