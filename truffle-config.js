require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stone crawl praise purse hard light army gas'; 
let testAccounts = [
"0xf8b9805f30d43f950c71d53a51caaaf9f91d93e07587f726a1655510c04c2651",
"0xc174cae63df4f55409e3d12728b87ca4d68718788144dbef78bf409e31963fc6",
"0x0dbdda08f0cd75569813be39858961a6729454eac0b1f397b1738124edd83863",
"0x81beb023dfb4cf7f806dbf8953f27a7ecc802405b77b0ce92113f7394495e644",
"0x0278993273687a83513a7bddb5807a1f104c7be0946d86a13f5c65b019f5afee",
"0x7d4a1ee679a434bcdc17337eff9926f79942e058bc1b45fdbced16c50d800127",
"0x5a66e51a1ee211126958efe9949e73045cc2007f56ffae042c76e159fb2d11c2",
"0x1f7f6e7e3d823664589192c0a6909012a02f51aa800c758688adf53c9c334fca",
"0x2b08a62e8256af1aaef41d27cb8c7396af26dbfffff5a8c3f90c77e1d5bb159a",
"0xdd34394105b6042d4000d855dd29946c9d3812aef7e3539323c04852c03b523e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
