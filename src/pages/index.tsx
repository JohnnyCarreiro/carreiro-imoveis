import Head from 'next/head'

import { HeroSection } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { sliderData } from '@/data/sliderData'
import { Dropdown } from '@/components/Dropdown'
import { useState } from 'react'
import { InfoSection } from '@/components/InfoSection'
import { InfoData, InfoDataTwo } from '@/data/InfoData'


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Head>
        <title>Template Next Tipescript</title>
      </Head>
      <Navbar toggle={toggle} />
      <main>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <HeroSection slides={sliderData} />
        <InfoSection {...InfoData} />
        <InfoSection {...InfoDataTwo} />
      </main>
    </>
  )
}
