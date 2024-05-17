import toPubString, { toPub } from '@/functions/format/toMintString'
import { PublicKey } from '@solana/web3.js'
import { ApiPoolInfoV4, DEVNET_PROGRAM_ID, Liquidity, Market } from '@raydium-io/raydium-sdk'
import { WSOLMint } from './quantumSOL'

export const BulbaMint = toPub('5P7a3jm2g7vX3dTh9LqWYFYH1jDR4wq5PE7SbogcDKVX')
export const PAIMint = toPub('Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS')
export const SRMMint = toPub('SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt')
export const USDCMint = toPub('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v')
export const USDTMint = toPub('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB')
export const mSOLMint = toPub('mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So')
export const stSOLMint = toPub('7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj')
export const USDHMint = toPub('USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX')
export const NRVMint = toPub('NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa')
export const ANAMint = toPub('ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo')
export const ETHMint = toPub('7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs')
export const USHMint = toPub('9iLH8T7zoWhY7sBmj1WK9ENbWdS1nL8n9wAxaeRitTa6')

export const SOLMint = PublicKey.default

export const routeMiddleMints = {
  //TODO: actually just use getToken() is ok, this structure is build when getToken() is not ready
  USDT: toPubString(USDTMint),
  USDC: toPubString(USDCMint),
  Bulba: toPubString(BulbaMint),
  WSOL: toPubString(WSOLMint),
  SRM: toPubString(SRMMint),
  PAI: toPubString(PAIMint),
  mSOL: toPubString(mSOLMint),
  stSOL: toPubString(stSOLMint),
  USDH: toPubString(USDHMint),
  // NRV: toPubString(NRVMint),
  // ANA: toPubString(ANAMint),
  ETH: toPubString(ETHMint),
  USH: toPubString(USHMint)
}

export const addToken = {
  [BulbaMint.toBase58()]: {
    name: 'Bulba',
    symbol: 'Bulba',
    decimals: 9,
    mint: BulbaMint.toBase58(),
    icon: 'https://bafkreiectrpmrbh5fg6dxsnoxetus7l7hw6b4g5pcijvmzadr3dcm7gghm.ipfs.nftstorage.link',
    isToken2022: false,
    hasFreeze: false
  }
}

export const bulbaPool: ApiPoolInfoV4 = {
  id: 'DpyoDeZpBg46LgHd1o7VNE6jr3yCt7yM9wbcnCV7FjAR',
  baseMint: '5P7a3jm2g7vX3dTh9LqWYFYH1jDR4wq5PE7SbogcDKVX',
  quoteMint: 'So11111111111111111111111111111111111111112',
  lpMint: 'emKAWYBzoJvQN99UcAvCmYFtdDhFzScn6NVZgDiMTQL',
  baseDecimals: 9,
  quoteDecimals: 9,
  lpDecimals: 9,
  version: 4,
  programId: DEVNET_PROGRAM_ID.AmmV4.toBase58(),
  authority: Liquidity.getAssociatedAuthority({
    programId: DEVNET_PROGRAM_ID.AmmV4,
  }).publicKey.toBase58(),
  openOrders: '6GbZGJ5rzQECvDPhZ5CvJc1rUSgYzWv1JL8dZSFdLsTV',
  targetOrders: 'Cvt43N1CHY5fWuzoq34gU3Ychkzy3oiCffkGoq8qf6rm',
  baseVault: 'GPuyLAzticTy12VSfkkzTBJn3WLnvS3tAgVH7fJyBpsz',
  quoteVault: 'A7g2qP7PvEwFWFfJLcyfS75G6xuvcabjTzxKL2Ko16rc',
  withdrawQueue: '11111111111111111111111111111111',
  lpVault: '11111111111111111111111111111111',
  marketVersion: 3,
  marketProgramId: 'EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj',
  marketId: 'BkXLy7XYJXYWV64C1UF3UgHMwPgWVMzSjJrCF5oae2zy',
  marketAuthority: Market.getAssociatedAuthority({
    programId: new PublicKey('EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj'),
    marketId: new PublicKey('BkXLy7XYJXYWV64C1UF3UgHMwPgWVMzSjJrCF5oae2zy'),
  }).publicKey.toBase58(),
  marketBaseVault: 'FqEtQ8byDVL4t77Pno1K5Y7A6XhVdzsH8ocHaW9SwfGX',
  marketQuoteVault: 'CVWTY4moxd8Ex5ZKwtaTwkAEjkp1iJHWxWLoiftFqiPu',
  marketBids: 'HrsmGtSQCX881mtsX4XQsyUpitwxSbjNAKczug9LgP8Q',
  marketAsks: 'GyLajq9YumcEzBntKjDQHrSLQmMBBaCZxW2nZk44VEW5',
  marketEventQueue: 'Bk72frMGgwy77HYNW5G1Jpf8XXkm7LEmvCEdAc4j2in7',
  lookupTableAccount: '11111111111111111111111111111111'
}
