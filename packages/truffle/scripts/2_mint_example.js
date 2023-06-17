// cannoli addresses
// const addrNFT = "0xc9827DFb15B8f3A646Df3e23A8a40EbE89B24d1C"
// const addrStaking = "0x546eBc83a3135C4b5B27F27266785E4a3F0900A0"
// const addrToken = "0xa7515F69F9AdCb9e56Af4DAdf96554B3F8ce987B"

// // ganache
const addrNFT = "0xFDceb7D5B84f7F761dD7e29393cB5518538Fa4B8"
const addrStaking = "0x4d0766FB1891f057f1bBC1b97aFc1695eA7F29BA"
const addrToken = "0xe20A9fBA8fE32a209B9f764dC055dEc9C36fF506"

// Contracts
const CamoNFT = artifacts.require("CamoNFT")
const CamoStaking = artifacts.require("CamoStaking")
const CamoToken = artifacts.require("CamoToken")



module.exports = async function (callback) {
	try {
		// Fetch accounts from wallet - these are unlocked
		const accounts = await web3.eth.getAccounts()
		const minter = accounts[0];
		console.log(accounts);

		const camoToken = await CamoToken.at(addrToken);
		const camoStaking = await CamoStaking.at(addrStaking);
		const camoNFT = await CamoNFT.at(addrNFT);

		try {
			await camoNFT.mintNFT.sendTransaction(0, { from: minter, value: 100000000 });
		}
		catch (error) {
			console.error(error)
		}

		try {
			await camoStaking.stakeWallet.sendTransaction({ from: minter });
		} catch (error) {
			console.log(error);
		}
	}
	catch (error) {
		console.log(error)
	}

	callback()
}