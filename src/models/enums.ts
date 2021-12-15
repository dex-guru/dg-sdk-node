export enum AmmChoices {
  all = "all",
  uniswap_v3 = "uniswap_v3",
  uniswap = "uniswap",
  uniswap_v2 = "uniswap_v2",
  pancakeswap = "pancakeswap",
  sushiswap = "sushiswap",
  quickswap = "quickswap",
  pangolin = "pangolin",
  traderjoe = "traderjoe",
  ubeswap = "ubeswap",
  spookyswap = "spookyswap",
  spiritswap = "spiritswap",
  kyber = "kyber",
  lydia = "lydia",
}
export enum CategoriesChoices {
  noob = "noob",
  casual = "casual",
  medium = "medium",
  heavy = "heavy",
  bot = "bot",
}
export enum ChainChoices {
  _1 = "1",
  _56 = "56",
  _137 = "137",
  _43114 = "43114",
  _42161 = "42161",
  _42220 = "42220",
  _250 = "250",
}
export enum OrderChoices {
  asc = "asc",
  desc = "desc",
}
export enum TokenTradeDirections {
  in = "in",
  out = "out",
}
export enum TransactionChoices {
  swap = "swap",
  burn = "burn",
  mint = "mint",
}
export enum api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields {
  transaction_address = "transaction_address",
  timestamp = "timestamp",
  block_number = "block_number",
  to = "to",
  sender = "sender",
  amount_usd = "amount_usd",
  pair_address = "pair_address",
  wallet_address = "wallet_address",
}
export enum api_public__models_api__rest_token__RestTokenFinanceModel__SortFields {
  address = "address",
  volume_24h = "volume_24h",
  liquidity = "liquidity",
  volume_24h_usd = "volume_24h_usd",
  liquidity_usd = "liquidity_usd",
  price_usd = "price_usd",
  volume_24h_delta = "volume_24h_delta",
  liquidity_24h_delta = "liquidity_24h_delta",
  price_24h_delta = "price_24h_delta",
  volume_24h_delta_usd = "volume_24h_delta_usd",
  liquidity_24h_delta_usd = "liquidity_24h_delta_usd",
  price_24h_delta_usd = "price_24h_delta_usd",
  timestamp = "timestamp",
}
