import Image from 'next/image'
import { Button } from '../Button'

import { Background, ColumnLeft, ColumnRight, Container, Section } from './styles'

interface InfoSectionProps {
  heading: string
  paragraphOne: string
  paragraphTwo: string
  buttonLabel: string
  link: string
  image: StaticImageData
  alt: string
  reverse: boolean
  delay: number
}

export const InfoSection: React.FC<InfoSectionProps> = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  link,
  image,
  alt,
  reverse,
  delay
}) => {

  // const {
  //   heading,
  //   paragraphOne,
  //   paragraphTwo,
  //   buttonLabel,
  //   link,
  //   image,
  //   alt,
  //   reverse,
  //   delay
  //  } = infoSectionData
  return (
    <Section>
      <Container>
        <ColumnLeft reverse={reverse} >
          <h2>{heading}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button
            primary={true}
            rounded={{display: true, size: 'small'}}
            large={true}
            href={link}
          >
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse} >
          <Image src={image} alt={alt}/>
        </ColumnRight>
        <Background />
      </Container>
    </Section>
  )
}
