import { menuData } from '@/data/MenuData'
import { ReactNode, useState } from 'react'
import { Button } from '../Button'

import { BtnWrap, CloseIcon, Container, DropdownLink, DropdownMenu, DropdownWrapper, Icon } from './styles'

interface DropdownProps {
  toggle: () => void
  isOpen: boolean
}

export const Dropdown: React.FC<DropdownProps> = ({ toggle, isOpen }) =>{
  return (
    <Container isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle} >
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink key={index} href={item.link} id={item.id}>{item.title}</DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary={true} rounded={{display: true, size: 'small'}} large={true} href={'/contact'} >Contact Us</Button>
        </BtnWrap>
      </DropdownWrapper>
    </Container>
  )
}
