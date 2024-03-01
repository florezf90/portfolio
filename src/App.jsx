
import './App.css'
import DOMPurify from 'dompurify';
import { siReact } from 'simple-icons'
function App() {

  const purifiedIcons = DOMPurify.sanitize(siReact.svg);

  return (
    <div>
          <h1 className='text-3xl font-bold text-red-400'>Hello tailwind css</h1>
       <svg dangerouslySetInnerHTML={{ __html: purifiedIcons }} style={{ width: 100, height: 100, fill: `#${siReact.hex}` }}></svg>
    </div>
  )
}

export default App
