import styled from 'styled-components'

import headerImage from '../../assets/images/fundo.png'

export const HeaderContainer = styled.header`
  background-image: url(${headerImage});
  width: 100%;
  height: 186px;
  background-size: auto 100%;

  img {
    margin-top: 63px;
  }

  .link {
    cursor: pointer;
    color: #000000;
  }
`

export const ProductText = styled.p`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin-top: 82px;
`
export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
