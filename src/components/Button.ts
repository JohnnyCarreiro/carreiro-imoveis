import styled from 'styled-components'

type ButtonProps = {
  primary?: boolean
  large?: boolean
  rounded?: {
    display: boolean
    size: 'large' | 'small'
  }
}

export const Button = styled.a<ButtonProps>`
  background: ${({primary = false}) => primary ? '#000D1A' : '#CD853F'};
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: ${({rounded}) => (
    rounded?.display ? (rounded.size === 'large' ? '8px' : '4px') : '0'
  )};
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({large = false}) => large ? '16px 40px' : '14px 24px'};
  color: ${({primary = false}) => primary ? '#FFF' : '#000D1A'};
  font-size: ${({large = false}) => large ? '20px' : '14px'};

  &:hover {
    transform: translateY(-2px);
  }
`
