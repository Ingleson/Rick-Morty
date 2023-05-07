import Aside from './components/Aside/index.tsx'
import Main from './components/Main/index.tsx'
import Global from './style/Global.tsx'

import './style/App.css'

function App() {

  return (
    <div className='App'>
      <Global/>
      <Aside/>
      <Main/>
    </div>
  )
}

export default App
