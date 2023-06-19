
# Vault Boost Contracts

This Truffle project consists of three smart contracts deployed on the Celo Alfajores Testnet: CamoStaking, CamoNFT, and CamoToken.

## Contracts

### CamoStaking

The `CamoStaking` contract implements a staking mechanism where users can stake their wallet and earn rewards on applicable NFTs without sending NFTs out of their wallet. It provides functions to register as staker, claim the rewards collected.

### CamoNFT

The `CamoNFT` contract is an ERC721 NFT (Non-Fungible Token) contract that allows the creation and management of unique digital assets. Users can mint new NFTs, transfer ownership, and check token balances.

### CamoToken

The `CamoToken` contract is an ERC20 token contract representing the native token of the Vault Boost ecosystem. It is used as the staking reward token in the `CamoStaking` contract and can also be transferred between addresses.

## Deployment

The contracts have been deployed on the Celo Alfajores Testnet. The deployment addresses are as follows:

- `CamoStaking`: [0x1C1cc2C323d0C0257Dd9Bc05AD7608c4d2a208c0](https://explorer.celo.org/alfajores/address/0x1C1cc2C323d0C0257Dd9Bc05AD7608c4d2a208c0)
- `CamoNFT`: [0xCf4EB4d955b7045430841487610D596555139D44](https://explorer.celo.org/alfajores/address/0xCf4EB4d955b7045430841487610D596555139D44)
- `CamoToken`: [0x5d71c55718cA8c30D2CE8B60b5f15fB323f86C10](https://explorer.celo.org/alfajores/address/0x5d71c55718cA8c30D2CE8B60b5f15fB323f86C10)

## Usage

To interact with the deployed contracts, you can use a Celo-compatible wallet or a DApp browser with Celo support. Connect your wallet to the Celo Alfajores Testnet and use the contract addresses to interact with the respective contracts.

The contracts provide various functions and features that can be accessed through their respective contract addresses.

## Development

To modify or extend the contracts, you can make changes to the contract files located in the Truffle project's contracts directory. Use Truffle commands to compile, migrate, and test the contracts.
