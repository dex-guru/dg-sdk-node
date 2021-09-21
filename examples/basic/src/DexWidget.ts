import { Component, html, useState, useEffect } from 'uland'
import cn from 'classnames'
import { format } from 'light-date'
import { TokenHistory } from 'dexguru-sdk'

import DexValue from './DexVolume'
import calcChange from './calcChange'
import fetchDataFromSdk from './getDataFromSdk'
import logoSvg from './logo.svg'
import './styles.scss'

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export const formatDate = (date?: Date): string =>
  date ? format(date, '{HH}:{mm} EDT on {dd}.{MM}.{yyyy}') : ''

export const DexWidget = Component(
  ({
    currencyName,
    tokenId,
    beginTimestamp,
    endTimestamp,
    theme = Theme.dark,
  }: {
    element: HTMLElement
    currencyName: string
    tokenId: string
    beginTimestamp: number
    endTimestamp?: number
    theme?: Theme
  }) => {
    const [network, setNetwork] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<null | string>(null)

    const [data, setData] = useState<Array<TokenHistory>>([])

    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const selected: TokenHistory | null = data[selectedIndex] || null

    const previous: TokenHistory | null = data[selectedIndex - 1] || null

    const selectedDate: Date | null = selected?.timestamp
      ? new Date(selected.timestamp * 1000)
      : null

    const modifier = 240

    useEffect(() => {
      fetchDataFromSdk({
        tokenId,
        beginTimestamp,
        endTimestamp,
      })
        .then(({ tokenChain, tokenMarketHistoryData }) => {
          setNetwork(tokenChain.name)
          setData(tokenMarketHistoryData)
          setSelectedIndex(tokenMarketHistoryData.length - 1)
        })
        .catch((error: unknown) => setErrorMessage(`initData error ${error}`))
    }, [])

    if (errorMessage) {
      return html`
        <div>${errorMessage}</div>
      `
    }

    if (!data) {
      return html`
        <div>loading...</div>
      `
    }
    const formattedDate = selectedDate ? formatDate(selectedDate) : ''
    const priceUSD = DexValue({
      value: selected?.price_usd || 0,
      change: calcChange('price_usd', selected, previous),
    })
    const liquidity = DexValue({
      title: 'Liquidity',
      value: selected?.liquidity || 0,
      change: calcChange('liquidity', selected, previous),
    })
    const dailyVolumeUSD = DexValue({
      title: 'Trading Volume',
      value: selected?.liquidity_24h_delta || 0,
      change: calcChange('liquidity_24h_delta', selected, previous),
    })
    return html`
      <div
        class="${`dexguru-widget dexguru-widget--${modifier} dexguru-widget--${theme}`}"
      >
        <div class="dexguru-widget__header">
          <div class="dexguru-widget__logo">
            <a href="https://dex.guru" class="dexguru-widget-logo">
              ${logoSvg()}
            </a>
          </div>
          <div class="dexguru-widget__main">
            <div
              class="${cn('dexguru-widget-token', {
                [`dexguru-widget-token--${network}`]: !!network,
              })}"
            >
              <span class="dexguru-widget-token__name">${currencyName}</span>
            </div>
            <div class="dexguru-widget__time">${formattedDate}</div>
          </div>
        </div>
        <div class="dexguru-widget__body">
          <div class="dexguru-widget__price">${priceUSD}</div>
          <div class="dexguru-widget__inner">
            <div class="dexguru-widget__values">
              <div class="dexguru-widget__liquidity">${liquidity}</div>
              <div class="dexguru-widget__volume">${dailyVolumeUSD}</div>
            </div>
          </div>
        </div>
      </div>
    `
  }
)

export default DexWidget
