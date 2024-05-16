import useAppSettings from '@/application/common/useAppSettings'
import { buildSimpleTransaction, InnerSimpleTransaction, LOOKUP_TABLE_CACHE, TxVersion } from '@raydium-io/raydium-sdk'
import { Connection, PublicKey, Transaction, VersionedTransaction } from '@solana/web3.js'

export async function buildTransactionsFromSDKInnerTransactions({
  connection,
  wallet,
  txVersion,
  transactions
}: {
  connection: Connection
  wallet: PublicKey
  txVersion: TxVersion
  transactions: InnerSimpleTransaction[]
}): Promise<(Transaction | VersionedTransaction)[]> {
  const inDev = useAppSettings((s) => s.inDev)
  const spawnedTransactions = await buildSimpleTransaction({
    connection,
    payer: wallet,
    innerTransactions: transactions,
    makeTxVersion: txVersion,
    addLookupTableInfo: !inDev ? LOOKUP_TABLE_CACHE : undefined,
  })
  return spawnedTransactions
}
