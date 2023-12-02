import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const colors = {
  red: '#E66767',
  orange: '#FFEBD9',
  white: '#FFF'
}

export const Globalcss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: #F5F5F5;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
