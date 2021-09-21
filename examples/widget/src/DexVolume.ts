import { html, IRenderer } from 'uland'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import numerify from 'numerify'

const DexVolume = ({
  title,
  value,
  change,
}: {
  title?: string
  value: number
  change?: number
}): IRenderer => {
  const formattedCurrency = `${numerify(value, '0.00a')}`.toUpperCase()
  return html`
    <div class="dexguru-widget-value">
      <div class="dexguru-widget-value__content">
        <div class="dexguru-widget-value__value">
          <span class="dexguru-widget-value__sign">$</span>
          ${formattedCurrency}
        </div>
        <div
          class="${`dexguru-widget-value__delta dexguru-widget-value__delta${
            change && change < 0 ? '--down' : '--up'
          }`}"
        >
          ${change ? Math.abs(change).toFixed(2) + '%' : ''}
        </div>
      </div>
      ${html`
        ${title
          ? html`
              <div class="dexguru-widget-value__title">${title}</div>
            `
          : ''}
      `}
    </div>
  `
}

export default DexVolume
