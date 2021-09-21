import client from "../client/httpClient";
import * as model from "../models/model";
export default class DexGuru {
  private apiKey: string;
  private endpoint: string;
  constructor(apiKey: string, endpoint: string) {
    this.apiKey = apiKey;
    this.endpoint = endpoint;
  }
  getAllChains = async (): Promise<model.ChainsListModel> => {
    return client<model.ChainsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/",
      {}
    );
  };
  getChain = async (
    chain_id: model.ChainChoices
  ): Promise<model.ChainModel> => {
    return client<model.ChainModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}",
      { chain_id }
    );
  };
  getTransactions = async (
    chain_id: model.ChainChoices,
    amm?: model.AmmChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number,
    wallet_category?: model.CategoriesChoices
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/transactions",
      {
        chain_id,
        amm,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
        wallet_category,
      }
    );
  };
  getTxsSwaps = async (
    chain_id: model.ChainChoices,
    token_address?: string,
    amm?: model.AmmChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number,
    wallet_category?: model.CategoriesChoices
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/transactions/swaps",
      {
        chain_id,
        token_address,
        amm,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
        wallet_category,
      }
    );
  };
  getTxsBurns = async (
    chain_id: model.ChainChoices,
    token_address?: string,
    amm?: model.AmmChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/transactions/burns",
      {
        chain_id,
        token_address,
        amm,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getTxsMints = async (
    chain_id: model.ChainChoices,
    token_address?: string,
    amm?: model.AmmChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/transactions/mints",
      {
        chain_id,
        token_address,
        amm,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getAmmsSwaps = async (
    chain_id: model.ChainChoices,
    amms?: string,
    token_address?: string,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number,
    wallet_category?: model.CategoriesChoices
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/amms/swaps",
      {
        chain_id,
        amms,
        token_address,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
        wallet_category,
      }
    );
  };
  getAmmsBurns = async (
    chain_id: model.ChainChoices,
    amms?: string,
    token_address?: string,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/amms/burns",
      {
        chain_id,
        amms,
        token_address,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getAmmsMints = async (
    chain_id: model.ChainChoices,
    amms?: string,
    token_address?: string,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/amms/mints",
      {
        chain_id,
        amms,
        token_address,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getAmmSwaps = async (
    chain_id: model.ChainChoices,
    amm: model.AmmChoices,
    token_address?: string,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number,
    wallet_category?: model.CategoriesChoices
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/amms/{amm}/swaps",
      {
        chain_id,
        amm,
        token_address,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
        wallet_category,
      }
    );
  };
  getAmmBurns = async (
    chain_id: model.ChainChoices,
    amm: model.AmmChoices,
    token_address?: string,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/amms/{amm}/burns",
      {
        chain_id,
        amm,
        token_address,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getAmmMints = async (
    chain_id: model.ChainChoices,
    amm: model.AmmChoices,
    token_address?: string,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/amms/{amm}/mints",
      {
        chain_id,
        amm,
        token_address,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getAllAmmInventory = async (
    chain_id: model.ChainChoices
  ): Promise<model.AmmListModel> => {
    return client<model.AmmListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/amms",
      { chain_id }
    );
  };
  getAmmInventory = async (
    chain_id: model.ChainChoices,
    amm: model.AmmChoices
  ): Promise<model.AmmModel> => {
    return client<model.AmmModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/amms/{amm}",
      { chain_id, amm }
    );
  };
  getTokensFinance = async (
    chain_id: model.ChainChoices,
    token_addresses?: string,
    verified?: boolean,
    sort_by?: model.api_public__models_api__rest_token__RestTokenFinanceModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number
  ): Promise<model.TokensFinanceListModel> => {
    return client<model.TokensFinanceListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/tokens/market",
      { chain_id, token_addresses, verified, sort_by, order, limit, offset }
    );
  };
  getTokenFinance = async (
    chain_id: model.ChainChoices,
    token_address: string
  ): Promise<model.TokenFinanceModel> => {
    return client<model.TokenFinanceModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/tokens/{token_address}/market",
      { chain_id, token_address }
    );
  };
  getTokenMarketHistory = async (
    chain_id: model.ChainChoices,
    token_address: string,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.TokensHistoryListModel> => {
    return client<model.TokensHistoryListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/tokens/{token_address}/market/history",
      { chain_id, token_address, begin_timestamp, end_timestamp }
    );
  };
  getTokensInventory = async (
    chain_id: model.ChainChoices,
    name?: string,
    symbol?: string,
    limit?: number,
    offset?: number,
    verified?: boolean
  ): Promise<model.TokensInventoryListModel> => {
    return client<model.TokensInventoryListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/tokens",
      { chain_id, name, symbol, limit, offset, verified }
    );
  };
  getTokenInventory = async (
    chain_id: model.ChainChoices,
    token_address: string
  ): Promise<model.TokenInventoryModel> => {
    return client<model.TokenInventoryModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/tokens/{token_address}",
      { chain_id, token_address }
    );
  };
  getTokenTransactions = async (
    chain_id: model.ChainChoices,
    token_address: string,
    amm?: model.AmmChoices,
    wallet_category?: model.CategoriesChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/tokens/{token_address}/transactions",
      {
        chain_id,
        token_address,
        amm,
        wallet_category,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getTokenSwaps = async (
    chain_id: model.ChainChoices,
    token_address: string,
    begin_timestamp?: number,
    end_timestamp?: number,
    wallet_category?: model.CategoriesChoices,
    amm?: model.AmmChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/tokens/{token_address}/transactions/swaps",
      {
        chain_id,
        token_address,
        begin_timestamp,
        end_timestamp,
        wallet_category,
        amm,
        sort_by,
        order,
        limit,
        offset,
      }
    );
  };
  getTokenBurns = async (
    chain_id: model.ChainChoices,
    token_address: string,
    amm?: model.AmmChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/tokens/{token_address}/transactions/burns",
      {
        chain_id,
        token_address,
        amm,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getTokenMints = async (
    chain_id: model.ChainChoices,
    token_address: string,
    amm?: model.AmmChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/tokens/{token_address}/transactions/mints",
      {
        chain_id,
        token_address,
        amm,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getWalletTransactions = async (
    chain_id: model.ChainChoices,
    wallet_address: string,
    amm?: model.AmmChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/wallets/{wallet_address}/transactions",
      {
        chain_id,
        wallet_address,
        amm,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getWalletSwaps = async (
    chain_id: model.ChainChoices,
    wallet_address: string,
    amm?: model.AmmChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/wallets/{wallet_address}/transactions/swaps",
      {
        chain_id,
        wallet_address,
        amm,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getWalletBurns = async (
    chain_id: model.ChainChoices,
    wallet_address: string,
    amm?: model.AmmChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/wallets/{wallet_address}/transactions/burns",
      {
        chain_id,
        wallet_address,
        amm,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getWalletMints = async (
    chain_id: model.ChainChoices,
    wallet_address: string,
    amm?: model.AmmChoices,
    sort_by?: model.api_public__models_api__rest_swaps_burns_mints__RestSwapBurnMintModel__SortFields,
    order?: model.OrderChoices,
    limit?: number,
    offset?: number,
    begin_timestamp?: number,
    end_timestamp?: number
  ): Promise<model.SwapsBurnsMintsListModel> => {
    return client<model.SwapsBurnsMintsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/wallets/{wallet_address}/transactions/mints",
      {
        chain_id,
        wallet_address,
        amm,
        sort_by,
        order,
        limit,
        offset,
        begin_timestamp,
        end_timestamp,
      }
    );
  };
  getWalletsInfo = async (
    chain_id: model.ChainChoices,
    wallet_addresses: string
  ): Promise<model.WalletsListModel> => {
    return client<model.WalletsListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/wallets",
      { chain_id, wallet_addresses }
    );
  };
  getWalletInfo = async (
    chain_id: model.ChainChoices,
    wallet_address: string
  ): Promise<model.Wallet> => {
    return client<model.Wallet>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/chain/{chain_id}/wallets/{wallet_address}",
      { chain_id, wallet_address }
    );
  };
  getEvents = async (): Promise<model.EventsModelListModel> => {
    return client<model.EventsModelListModel>(
      "get",
      this.endpoint,
      this.apiKey,
      "/v1/event/",
      {}
    );
  };
}
