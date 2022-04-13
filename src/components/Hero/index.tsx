import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import {
  Arrow,
  HeroContainer,
  HeroContent,
  HeroIamge,
  HeroImageWrapper,
  HeroSlide,
  HeroSlider,
  HeroWrapper,
  NextArrow,
  PrevArrow,
  SliderButtons
} from './styles'

type SlideProps = {
  title: string
  price: string
  path: string
  label: string
  image: StaticImageData
  alt: string
}
interface HeroProps {
  slides: SlideProps[]
}

export const HeroSection:React.FC<HeroProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeout = useRef(null as any)

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => current === length - 1 ? 0 : current + 1)
    }

    timeout.current = setTimeout(nextSlide, 5000)
    return function() {
      if(timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  },[current, timeout])

  const nextSlide = useCallback(() => {
    setCurrent(current === length -1 ? 0 : current + 1)
    if(timeout.current) {
      clearTimeout(timeout.current)
    }
  },[current])
  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length -1 : current - 1)
    if(timeout.current) {
      clearTimeout(timeout.current)
    }
  },[current])

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <HeroContainer>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide key={index}>
            {index === current && (
              <HeroSlider>
                <HeroImageWrapper>
                  <HeroIamge placeholder="blur" loading="lazy" src={slide.image} alt={slide.alt} />
                </HeroImageWrapper>
                <HeroContent
                  onMouseEnter={() => clearTimeout(timeout.current)}
                  onMouseLeave={() => timeout.current = setTimeout(nextSlide, 5000)}
                >
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button
                    href={slide.path}
                    primary={true}
                    style={{
                      maxWidth: '160px',
                    }}
                    onMouseEnter={() => clearTimeout(timeout.current)}
                    onMouseLeave={() => timeout.current = setTimeout(nextSlide, 5000)}
                  >
                    {slide.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroContainer>
  )
}
