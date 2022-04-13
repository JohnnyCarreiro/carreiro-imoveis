import styled from 'styled-components'

type BgProps = {
  BGImage: StaticImageData
}

export const Container = styled.div`
  background: #f9f9f9;
  font-size: 24px;
  padding: 25px 0;
  color: #000;
`
export const Wrapper = styled.div`
  max-width: 960px;
  margin: 32px auto;
  p {
    margin: 32px auto;
  }
`
export const Parallax = styled.div<BgProps>`
  position: relative;
  background: url(${({BGImage}) => BGImage.src}) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left:0;
    /* height: 500px; */
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%);
  }
  > div > p {
    margin: 32px auto;
    color: #fff;

    //Use it to giv a blur background to layer above element
    backdrop-filter: blur(3px);

    margin: -16px -32px;
    padding: 16px 32px;
    text-align: center;
  }
`
