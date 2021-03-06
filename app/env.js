module.exports = {
	cookiePassword: "0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
	debug: false,
	showForkBanner: false,
	coin: "BTC",

	rpcBlacklist:[
		"stop",
		"stop",
		"savemempool",
		"addnode",
		"disconnectnode",
		"setban",
		"setnetworkactive",
		"lockunspent",
		"move",
		"removeprunedfunds",
		"rescanblockchain",
		"encryptwallet",
		"backupwallet",
		"importwallet",
		"walletlock",
		"walletpassphrase",
		"walletpassphrasechange"
	],

	// Uncomment "rpc" below to automatically connect via RPC.
	// Otherwise, you can manually connect via the UI.

	/*rpc: {
		host:"127.0.0.1",
		port:8332,
		username:"rpc-username",
		password:"rpc-password"
	}*/
};