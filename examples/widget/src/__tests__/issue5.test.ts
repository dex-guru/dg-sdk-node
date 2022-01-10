import DexGuru, {ChainChoices} from 'dexguru-sdk'

const apiKey = 'API_KEY_HERE'
const endpoint = 'https://api.dev.dex.guru'

const sdk = new DexGuru(apiKey, endpoint)

// To run the test, remove skip and add a valid api key above
describe.skip('https://github.com/dex-guru/dg-sdk-node/issues/5',  () => {
    it('Limit and sort functionality test', async () => {
        const swaps = await sdk.getTokenSwaps( ChainChoices._56, '0xc2098a8938119a52b1f7661893c0153a6cb116d5', 1635794413, 1638040819, undefined, undefined, undefined, undefined, 100 );
        expect(swaps.data.length).toEqual(100)
    }, 60 * 1000)
})
