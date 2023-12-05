import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  display: flex;
  background-color: ${colors.red};
  flex-direction: column;
  align-items: baseline;
  position: relative;
  padding: 8px;
  width: 100%;

  img {
    top: 0px;
    left: 0px;
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  button {
    width: 100%;
  }
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  color: ${colors.orange};
  margin-top: 8px;
  display: block;
`

export const Description = styled.p`
  color: ${colors.orange};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const ModalOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.visible {
    display: flex;
  }
`

export const ModalContainer = styled.div`
  background-color: ${colors.red};
  width: 1024px;
  padding: 32px;
  position: relative;
  display: flex;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
`

export const ModalContent = styled.div`
  margin-left: 20px;

  h2 {
    color: ${colors.white};
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 16px;
  }

  p {
    color: ${colors.white};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }

  span {
    display: block;
    color: ${colors.white};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
