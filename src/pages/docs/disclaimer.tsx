import Card from '@/components/Card'
import React from 'react'

export default function DisclaimerPage() {
  return (
    <div
      className="p-44 mobile:p-2"
      style={{
        minHeight: '100vh',
        backgroundColor: '#141041',
        backgroundImage: "url('/backgroundImages/home-page-bg-lights.webp')",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        display: 'flow-root'
      }}
    >
      <Card className="frosted-glass-lightsmoke rounded-xl py-24 px-24 mobile:p-4">
        <div className="text-center text-5xl mobile:text-2xl mb-8 mobile:mb-2">Disclaimer</div>
        <div>
          <div className="text-[#adc6ff] mobile:text-sm leading-relaxed mb-4">
            This website-hosted user interface (this “Interface”) is made available by the Raydium Holding Foundation.
          </div>
          <div className="text-[#adc6ff] mobile:text-sm leading-relaxed mb-4">
            This Interface is an open source software portal to Raydium, a protocol which is a community-driven
            collection of blockchain-enabled smart contracts and tools maintained by the Raydium Holding Foundation.
          </div>
          <div className="text-[#adc6ff] mobile:text-sm leading-relaxed mb-4">
            THIS INTERFACE AND THE RAYDIUM PROTOCOL ARE PROVIDED ”AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF
            ANY KIND. The Raydium Holding Foundation does not provide, own, or control Raydium. By using or accessing
            this Interface or Raydium, you agree that no developer or entity involved in creating, deploying or
            maintaining this Interface or Raydium will be liable for any claims or damages whatsoever associated with
            your use, inability to use, or your interaction with other users of, this Interface or Raydium, including
            any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits,
            cryptocurrencies, tokens, or anything else of value.
          </div>
          <div className="text-[#adc6ff] mobile:text-sm leading-relaxed mb-4">
            By using or accessing this Interface, you represent that you are not subject to sanctions or otherwise
            designated on any list of prohibited or restricted parties or excluded or denied persons, including but not
            limited to the lists maintained by the United States’ Department of Treasury’s Office of Foreign Assets
            Control, the United Nations Security Council, the European Union or its Member States, or any other
            government authority.
          </div>
        </div>
      </Card>
    </div>
  )
}
