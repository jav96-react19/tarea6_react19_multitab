import '@/styles/style.scss'
import './App.css';
import Greetings from '@/components/Greetings/Greetings.jsx'
import Button from "@/components/Button/Button.jsx"

function App() {
  let employee = "Javi";
  
  return (
    <main>
        <Greetings name={employee} />
        <Button />
    </main>
  )
}

export default App
