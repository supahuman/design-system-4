import { Button } from '@meroka/atoms';
import '@meroka/tokens/tokens.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Design System Playground</h1>
      <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
        <Button variant="primary" size="sm">
          Small Primary
        </Button>
        <Button variant="primary" size="md">
          Medium Primary
        </Button>
        <Button variant="primary" size="lg">
          Large Primary
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
        <Button variant="secondary" size="sm">
          Small Secondary
        </Button>
        <Button variant="secondary" size="md">
          Medium Secondary
        </Button>
        <Button variant="secondary" size="lg">
          Large Secondary
        </Button>
      </div>
    </div>
  );
}

export default App;
