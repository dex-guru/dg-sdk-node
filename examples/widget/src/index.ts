import { render } from 'uland'
import DexWidget, { Theme } from './DexWidget'

customElements.define(
  'dex-widget',
  class extends HTMLElement {
    constructor() {
      super()
      this.render()
    }

    render(): void {
      const tokenId = this.getAttribute('tokenId')
      const theme: Theme = (this.getAttribute('theme') as Theme) || Theme.dark
      const beginTimestamp = Number(this.getAttribute('beginTimestamp'))
      const currencyName = this.getAttribute('currencyName') || ''
      const endTimestamp = this.getAttribute('endTimestamp')
        ? Number(this.getAttribute('endTimestamp'))
        : undefined
      if (tokenId && beginTimestamp) {
        render(
          this,
          DexWidget({
            currencyName,
            beginTimestamp,
            tokenId,
            endTimestamp,
            element: this,
            theme: theme,
          })
        )
      } else {
        console.log('Please set tokenId and beginTimestamp attributes')
      }
    }

    static get observedAttributes(): unknown {
      return [
        'gradientColor',
        'strokeColor',
        'currency',
        'dateFrom',
        'dateTo',
        'theme',
      ]
    }

    attributeChangedCallback(): void {
      this.render()
    }
  }
)
