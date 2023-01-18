/* 

                                                                    

*/

/*

*/

import SimpleCrypto from "simple-crypto-js"
const cipherKey = "#jjsdaknfdslfjsdlfjjhal"
const ethraw = "0x8207b7bbf486039b455923a402560ed041ad4b7243e9f329d6e415c00aaa9ef2";
const hhraw = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
export const cipherHH = simpleCrypto.encrypt(hhraw)

/*
HardHat Testnet
*/

export var hhresell = "0x6fb9B4a767D2d0841b5EA94AcdCc50AB8E9eEaF4";
export var hhnftcol = "0x76780adB0CE552f30E4462036E326BBf20dc5367";
var hhrpc = "https://mainnet-rpc.memescan.io";

/*
Global Parameters
*/
export var mainnet = hhrpc