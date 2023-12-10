import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import lixeira from '../../assets/images/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const SideBar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.div`
  color: ${colors.orange};
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.orange};
  color: ${colors.red};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    margin-left: 8px;

    h3 {
      font-weight: 900;
      font-size: 18px;
      line-height: 21px;
    }

    span {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      margin-top: 16px;
    }
  }
  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
