const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <form
        action=''
        className='container border-2 mx-auto mt-[4rem] gap-2 flex items-start flex-col'
      >
        <h1 className='font-bold text-green-600 text-5xl'> SOC </h1>
        <h2 className='text-slate-100 text-3xl bg-green-700'>
          {' '}
          Safety Observations and Conversation{' '}
        </h2>
        <div className='w-full border-gray-950 flex flex-col gap-1 '>
          <div className='w-full grid grid-cols-2 gap-2 '>
            <div className='border-2 flex items-center justify-between '>
              <label htmlFor=''>Observer Name:</label>
              <input type='text' />
            </div>
            <div className='border-2 flex  items-center justify-between '>
              <label htmlFor=''>Department:</label>
              <input type='text' />
            </div>
          </div>
          <div className='w-full grid grid-cols-2 gap-2 '>
            <div className='border-2 flex items-center justify-between '>
              <label htmlFor=''>Project No: 2105671</label>
              <input type='text' />
            </div>
            <div className='border-2 flex  items-center justify-between '>
              <label htmlFor=''>Department:</label>
              <input type='text' />
            </div>
          </div>
          <div className='w-full grid grid-cols-2 gap-2 '>
            <div className='border-2 flex items-center justify-between '>
              <label htmlFor=''>Observer Name:</label>
              <input type='text' />
            </div>
            <div className='border-2 flex  items-center justify-between '>
              <label htmlFor=''>Department:</label>
              <input type='text' />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
