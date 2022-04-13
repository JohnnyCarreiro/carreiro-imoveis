import { menuData } from '@/data/MenuData'
import { Button } from '../Button'

import Bars from '@/images/bars.svg'

import { Header, Logo, MenuBars, Nav, NavBtn, NavMenu, NavMenuLink } from './styles'

interface NavbarProps {
  toggle: () => void
}

export const Navbar: React.FC<NavbarProps> = ({toggle}) => {
  return (
    <Header>
      <Nav>
        <Logo href="/" >ELIXR</Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavMenuLink href={item.link} key={`${index}-${item.id}`} >
              {item.title}
            </NavMenuLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button href="/contact" primary={false}>
            Contact Us
          </Button>
        </NavBtn>
      </Nav>
    </Header>
  )
}
