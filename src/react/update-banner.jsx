import { Exclamation } from './icons/icons.jsx'

export const UpdateBanner = () => {
  return (
    <div className="flex w-full items-center rounded-lg bg-gray-300 p-8">
      <Exclamation className="color-black mr-5 h-10 w-10 shrink-0" />
      <span className="text-lg">
        Niet alle info op de website is volledig up to date. We werken eraan om
        dit zo snel mogelijk volledig in orde te krijgen.
      </span>
    </div>
  )
}
