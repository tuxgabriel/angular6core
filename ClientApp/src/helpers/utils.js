export const getDateStringEg = () => {
  const date = new Date()

  let day = date.getDate() + ''
  day = day.length === 1 ? '0' + day : day

  let month = (date.getMonth() + 1) + ''
  month = month.length === 1 ? '0' + month : month

  return `${date.getFullYear()}-${month}-${day}`
}

export const getDateFromStringEg = (value) => {
  if (!value)
    return null

  const date = value.split('-')
  const year = date[0]
  const month = date[1]
  const day = date[2]

  return new Date(`${month}-${day}-${year}`)
}

export const toReal = (val) => {
  return isNaN(val) ? val : `R$ ${Number(val)
    .toFixed(2).replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
}