import { createGlobalStyle } from 'styled-components'

export const colors = {
  bgColor: '#F5F5F5',
  white: '#FFF',
  orange: '#FFEBD9',
  red: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      list-style: none;
      text-decoration: none;
  }

  body{
      background: ${colors.bgColor};
  }

    .container {
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
}
`
