export const footer = {
    display: 'flex',
    flexDirection: 'column',
    height: 96
  }

  export const handler = () => ({
    alignSelf: 'flex-end',
    textAlign: 'center'
  })
  
export const handlerIcon = {
  base: () => ({ marginBottom: '8px' }),
  open: () => ({
    transform: 'rotate(180deg)'
  }),
  closed: () => ({
    transform: 'rotate(0)'
  })
}