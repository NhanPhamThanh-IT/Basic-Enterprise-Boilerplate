import ThemeControl from 'components/theme-control/ThemeControl'

function App() {
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900'>
        <ThemeControl />
        <p className='text-2xl text-center text-blue-100 dark:text-blue-500'>
          Edit <code>src/App.tsx</code> and save to test HMR updates.
        </p>
        <p className='text-2xl text-center text-blue-500 dark:text-blue-300'>
          <code>src/defines/index.ts</code> has been updated.
        </p>
      </div>
    </>
  )
}

export default App
