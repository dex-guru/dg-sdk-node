import DexGuru, {
  ChainChoices,
  ChainModel,
  ChainsListModel,
  TokenHistory,
} from 'dexguru-sdk'

const apiKey = '...apiKey...'
const endpoint = 'https://api.dev.dex.guru'

const sdk = new DexGuru(apiKey, endpoint)

const getDataFromSdk = async ({
  tokenId,
  beginTimestamp,
  endTimestamp,
}: {
  tokenId: string
  beginTimestamp: number
  endTimestamp?: number
}): Promise<{
  allChains: ChainsListModel
  tokenChain: ChainModel
  tokenMarketHistoryData: Array<TokenHistory>
}> => {
  const [tokenAddress, chainName] = tokenId.split('-')

  const allChains = await sdk.getAllChains()

  const chainRecord = allChains.data.find((chain) => chain.name === chainName)

  if (!chainRecord) {
    throw new Error(`chain ${chainName} not found`)
  }
  const currentTime = new Date().getTime()

  const tokenMarketHistory = await sdk.getTokenMarketHistory(
    chainRecord.chain_id as unknown as ChainChoices, // TODO: ChainModel.chain_id: ChainChoices
    tokenAddress,
    beginTimestamp,
    endTimestamp || Math.floor(currentTime / 1000)
  )

  const tokenMarketHistoryData = tokenMarketHistory?.data || []

  return {
    allChains,
    tokenChain: chainRecord,
    tokenMarketHistoryData,
  }
}

export default getDataFromSdk
