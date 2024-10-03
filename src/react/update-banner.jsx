import { Exclamation } from './icons/icons.jsx'
import ctl from '@netlify/classnames-template-literals'

export const UpdateBanner = (props) => {
  return (
    <div
      className={ctl(
        `flex items-center rounded-lg bg-gray-300 p-8
       ${props.fixed ? 'fixed top-12 z-[40] mx-8 w-[90vw]' : 'w-full'}`
      )}
    >
      <Exclamation className="color-black mr-5 h-10 w-10 shrink-0" />
      <span className="text-lg">
        Niet alle info op de website is volledig up to date. We werken eraan om
        dit zo snel mogelijk volledig in orde te krijgen.
      </span>
    </div>
  )
}
