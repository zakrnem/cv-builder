import './App.css'
import PersonalDetails from './components/PersonalDetails'

function App() {

  return (
    <>
      <header>
        <img src="./src/assets/square-cv-svgrepo-com.svg" className='title-logo'/>
        <h1>CV Builder</h1>
      </header>
      <PersonalDetails />
    </>
  )
}

export default App
