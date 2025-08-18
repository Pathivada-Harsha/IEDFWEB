import { useEffect, useState } from "react"
import { useNavigationType } from "react-router-dom"

import Hero from "../components/Hero"
import InvestibleSectors from "../components/InvestableSectors.js"
import InvestPhilosophy from "../components/InvestPhilosophy.js"
import FundSnapShot from "../components/FundSnapShot.js"
import OurOfferings from "../components/OurOfferings.js"
export default function Home() {


  return (
    <div>
      
        <Hero />
        <InvestibleSectors />
      <InvestPhilosophy />
      <FundSnapShot />
      <OurOfferings />
    </div>
  )
}
