require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun foot notice rival right purchase install another army gesture'; 
let testAccounts = [
"0x18132d6fc6bd2f2d769b96dbf07d6cef1de30bf59aab358cefabcc7632304023",
"0x374b65acc1b686fee17def47eb2b2e00d7339b2d91a23e1903e677a8a71c21b5",
"0x5a34295b2164df3e60507e362d7441ceca785269d7e63aa6f2325bdab8fadf99",
"0x066da4a2d70dc3eb01f054a13e9cead3eb7cd12593e0ebdf1110710fcc25da05",
"0xe46221fc442d6105f882d8d381b50a8a654d26d490428151fec20bffda91d069",
"0xc48c39678701c479e957a231f00e0a4b689c27376c79a6f022da0fb7aca93bba",
"0xdac893f75df20d8f1c0b6b69e996d97d06313ec351c6da5997f0b59967cf51b1",
"0xaba356418a6deac1ff834431fa35657c90c0e81d26e428716c781346a06a50e6",
"0x64f6fbb1fc66277d8ec08dabb5008724c91be08fd51a0acde520ff0bbaf7f119",
"0x57ec5c2c596c50fef456f0bc9f4285bb9bfa1d8609fbc2b87964f8680f8bdd1a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

