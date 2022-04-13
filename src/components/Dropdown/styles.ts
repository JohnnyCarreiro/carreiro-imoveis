import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

type ContainerProps = {
  isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #CD853F;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({isOpen}) => isOpen ? '1' : '0'};
  top: ${({isOpen}) => isOpen ? '1' : '-100%'};
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
export const CloseIcon = styled(FaTimes)`
  color: #000D1A;

`
export const DropdownWrapper = styled.div``
export const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`
export const DropdownLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000D1A;
  }
`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
