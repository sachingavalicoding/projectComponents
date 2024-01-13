/* eslint-disable react/prop-types */
const Heading = ({ text, BgColor, color }) => {
  return (
    <div className='w-full flex items-center justify-center flex-col gap-2 '>
      <h2
        className={` ${BgColor} , ${color}  text-center font-medium text-2xl `}
      >
        {' '}
        {text}{' '}
      </h2>
      <p className='text-xs text-slate-400'>Lorem ipsum dolor sit amethic.</p>
    </div>
  )
}

export default Heading
