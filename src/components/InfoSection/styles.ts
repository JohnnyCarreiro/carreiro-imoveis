import styled from 'styled-components'

type ImageOrder = {
  reverse: boolean
}

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  position: relative;

`
export const Container = styled.div`
  padding: calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const ColumnLeft = styled.div<ImageOrder>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({reverse}) => reverse ? '2' : '1'};

  h2 {
    margin-bottom: 1rem;
    font-size: clamp( 1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`
export const ColumnRight = styled.div<ImageOrder>`
  padding: 1rem 2rem;
  order: ${({reverse}) => reverse ? '1' : '2'};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    order: 2;
  }

  > span {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;

    @media screen and (max-width: 768px) {
      width: 90% !important;
      height: 90% !important;
    }
  }

`
export const Background =  styled.div`
  position: absolute;
  z-index: -1;
  /* top: 26%; */
  top: calc(800px - (100% / 3));
  left: 0;
  width: 100%;
  height: calc(800px - 20%);
  background: #CD853F;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    top: 0;
    height: 800px;
  }
`
