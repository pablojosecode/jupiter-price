import bs58 from 'bs58'
import fetch from 'node-fetch'
import JSBI from 'jsbi';
import { Connection, PublicKey, Keypair } from '@solana/web3.js'
import { Jupiter, RouteInfo, TOKEN_LIST_URL } from '@jup-ag/core'


import { Jupiter, TOKEN_LIST_URL } from "@jup-ag/core";
​
export const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || "fiber relief help place adult bitter ethics lab census target version gesture";
export const USER_PRIVATE_KEY = bs58.decode(WALLET_PRIVATE_KEY);
export const USER_KEYPAIR = Keypair.fromSecretKey(USER_PRIVATE_KEY);
​
const jupiter = async () => {
    // ...
    
    //  Load Jupiter
    const jupiter = await Jupiter.load({
      connection,
      cluster: ENV,
      user: USER_KEYPAIR, // or public key
      // platformFeeAndAccounts:  NO_PLATFORM_FEE,
      // routeCacheDuration: CACHE_DURATION_MS
      // wrapUnwrapSOL: true (default) | false 
    });
    
    // ...
}
​
export default jupiter;
