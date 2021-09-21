export * from "./enums";
export interface HTTPValidationError {
  detail?: ValidationError[];
}
export interface AmmListModel {
  total: number;
  data: AmmModel[];
}
export interface AmmModel {
  chain_id: number;
  name: string;
  description: string;
  type: string;
}
export interface ChainModel {
  chain_id: number;
  name: string;
  description: string;
}
export interface ChainsListModel {
  total: number;
  data: ChainModel[];
}
export interface EventModel {
  chain_id: number;
  type: string;
  tokens: string[];
  message: string;
  timestamp: number;
}
export interface EventsModelListModel {
  total: number;
  data: EventModel[];
}
export interface SwapBurnMintModel {
  amm: string;
  chain_id: undefined;
  direction?: undefined;
  transaction_address: string;
  timestamp: number;
  block_number: number;
  to: string;
  sender: string;
  amount_usd: number;
  tokens_in: object[];
  tokens_out: object[];
  pair_address: string;
  wallet_address: string;
  wallet_category: string;
  transaction_type: undefined;
}
export interface SwapsBurnsMintsListModel {
  total: number;
  data: SwapBurnMintModel[];
}
export interface TokenFinanceModel {
  address: string;
  volume_24h: number;
  liquidity: number;
  volume_24h_usd: number;
  liquidity_usd: number;
  price_usd: number;
  volume_24h_delta: number;
  liquidity_24h_delta: number;
  price_24h_delta: number;
  volume_24h_delta_usd: number;
  liquidity_24h_delta_usd: number;
  price_24h_delta_usd: number;
  timestamp: number;
}
export interface TokenHistory {
  address: string;
  volume24h_eth: number;
  liquidity: number;
  price_eth: number;
  volume_24h_delta?: number;
  liquidity_24h_delta?: number;
  price_24h_delta?: number;
  volume24h_usd: number;
  liquidity_usd: number;
  price_usd: number;
  volume_24h_delta_usd?: number;
  liquidity_24h_delta_usd?: number;
  price_24h_delta_usd?: number;
  timestamp: number;
}
export interface TokenInventoryModel {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
}
export interface TokensFinanceListModel {
  total: number;
  data: TokenFinanceModel[];
}
export interface TokensHistoryListModel {
  total: number;
  data: TokenHistory[];
}
export interface TokensInventoryListModel {
  total: number;
  data: TokenInventoryModel[];
}
export interface Wallet {
  wallet_address: string;
  volume_1m_usd?: number;
  txns_1m?: number;
  category?: string;
  timestamp?: number;
}
export interface WalletsListModel {
  total: number;
  data: Wallet[];
}
export interface ValidationError {
  loc: string[];
  msg: string;
  type: string;
}
