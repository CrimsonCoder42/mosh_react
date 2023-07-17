import Alert from "./components/Alert"
import ListGroup from "./components/ListGroup"
import Button from "./components/Button"


function App() {

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="primary" onClick={() => console.log('Clicked')}>
        Click me
      </Button>
    </div>
  )
}

export default App
