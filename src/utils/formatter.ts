import { differenceInDays } from 'date-fns'

export function dateFormatter(dateISO: string) {
  const date = new Date(dateISO)
  return new Intl.DateTimeFormat('pt-BR').format(date)
}

export function relativeDateFormatter(dateISO: string) {
  const date = new Date(dateISO)
  const difference = differenceInDays(Date.now(), date)

  if (difference < 1) {
    return 'Há algumas horas'
  }

  return new Intl.RelativeTimeFormat('pt-BR', {
    style: 'narrow'
  })
    .format(-difference, 'day')
}

export function pluralize(word: string, amount: number) {
  if (amount < 2) {
    return word
  }

  if (/ção$/g.test(word)) {
    return word.replace('ção', 'ções')
  } else if (/dor$/g) {
    return word.replace('dor', 'dores')
  }

  return word
}
