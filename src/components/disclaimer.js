import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { Clickable } from './a11y'

const whiteText = 'text-white text-sm text-center'

const FullTextPopup = ({ hideDisclaimer }) => (
  <div
    className={`z-60 bg-green-dark w-full fixed top-32vh h-auto px-8 py-8 flex flex-col`}
  >
    <h1 className={whiteText}>Disclaimer</h1>
    <div className={whiteText}>
      Dit is de beta versie van onze nieuwe website. Het is zeer waarschijnlijk
      dat niet alle informatie correct is.
    </div>
    <div className={whiteText}>
      Alle ideeën en verbeteringen zijn welkom op website@noorse.be
    </div>
    <button
      type="button"
      className={'mt-4 text-black text-sm text-center'}
      onClick={hideDisclaimer}
    >
      Verbergen
    </button>
  </div>
)

const BetaBanner = ({ showDisclaimer, fixed, ...props }) => (
  <div
    {...props}
    className={`z-60 bg-green-dark w-full ${
      fixed && 'absolute'
    }  h-12 flex justify-between items-center px-8 mb-4`}
  >
    <FontAwesomeIcon color={'white'} size="1x" icon={faExclamation} />
    <span>BETA versie</span>
    <FontAwesomeIcon color={'white'} size="1x" icon={faExclamation} />
  </div>
)

export const DisclaimerPopup = ({ showOnPageLoad = true, fixed = true }) => {
  const [popupShown, setPopupShown] = useState(showOnPageLoad)

  const hideDisclaimer = () => {
    setPopupShown(false)
  }

  const showDisclaimer = () => {
    setPopupShown(true)
  }

  return popupShown ? (
    <FullTextPopup hideDisclaimer={hideDisclaimer} />
  ) : (
    Clickable(BetaBanner, showDisclaimer, { fixed })
  )
}
