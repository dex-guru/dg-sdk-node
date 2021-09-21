import { TokenHistory } from 'dexguru-sdk'

const calcChange = (
  parameter: keyof TokenHistory,
  curr: TokenHistory,
  prev: TokenHistory
): number => {
  if (!curr || !prev) {
    return -1
  }
  const currentValue = Number(curr[parameter])
  const previousValue = Number(prev[parameter])
  return (100 * (currentValue - previousValue)) / previousValue
}

export default calcChange
