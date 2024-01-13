import SmNav from '../../components/navbar/SmNav'

const Home = () => {
  //   const [theme, setTheme] = useState('dark')

  //   useEffect(() => {
  //     if (theme === 'dark') {
  //       document.querySelector('body').classList.add('dark')
  //     } else {
  //       document.querySelector('body').classList.remove('dark')
  //     }
  //   }, [theme])
  //   console.log(document.documentElement)

  //   const handleTheme = () => {
  //     setTheme(theme == 'light' ? 'dark' : 'light')
  //   }

  return (
    <div className='w-full min-h-screen bg-slate-50 dark:bg-black'>
      <SmNav />
    </div>
  )
}

export default Home
