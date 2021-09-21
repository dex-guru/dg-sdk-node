![logo](https://warehouse-test-camo.ingress.cmh1.psfhosted.org/6b1fce270454205fb5c8f8eba0f2ad3594141ed4/68747470733a2f2f67626c6f627363646e2e676974626f6f6b2e636f6d2f6173736574732532462d4d4f326e726d77685f446f784b63317638306e2532462d4d546e6b6e6f6878595f515157715a3572702d2532462d4d546e6d375a674e377342575f764e585f7a31253246686f72697a6f6e74616c2d6c6f676f2d77686974652d6261636b67726f756e642e706e673f616c743d6d6564696126746f6b656e3d66366533376632332d616664352d346131332d626236612d313632653164393564313864)

dexguru-sdk is a light wrapper around [dex.guru](https://dex.guru) REST API.

# Installation

**NPM**

`npm install dexguru-sdk`

**Yarn**

`yarn install dexguru-sdk`

# Getting Started

Get an API key from [dev.dex.guru](https://dev.dex.guru)

```javascript
import DexGuru, { ChainsListModel } from "dexguru-sdk";

const YOUR_API_KEY = 'abc123';

const sdk = new DexGuru(YOUR_API_KEY, "https://api.dev.dex.guru/");
const chains: ChainsListModel = await sdk.getAllChains();
```

# SDK providers all responses with Typescript models

```javascript
export interface ChainModel {
    chain_id: number;
    name: string;
    description: string;
}

export interface ChainsListModel {
  total: number;
  data: ChainModel[];
}
```

# Usage Examples

See a wallet:

```javascript
import DexGuru, { ChainsListModel } from 'dexguru-sdk';

const YOUR_API_KEY = 'abc123';
const wallet = 'bot_wallet_address';

const sdk = new DexGuru(YOUR_API_KEY, "https://api.dev.dex.guru/");

const response = await sdk.getWalletInfo(ChainChoices._1, wallet)
console.log(response)
```

Note that a valid wallet id need to be provided.

The response:

```json
{
    wallet_address: 'bot_wallet_address',
    volume_1m_usd=5000.123456,
    txns_1m=999999,
    category='bot',
    timestamp=1621635936 # last tx timestamp
}
```

Check trades on that same wallet:

```javascript
import DexGuru, { ChainChoices, SwapsBurnsMintsListModel } from 'dexguru-sdk';

const trades: SwapsBurnsMintsListModel = sdk.getWalletTransactions(ChainChoices._1, "bot_wallet_address");
console.log(trades);
```
