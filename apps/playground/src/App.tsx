import { Button, Input } from '@meroka/atoms';
import './App.css';
import '@meroka/tokens/tokens.css';

function App() {
  return (
    <div className="App bg-red-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Design System Playground
      </h1>
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
      <div className="mb-6">
        <Input placeholder="Default Input" />
      </div>
      <div className="mb-6">
        <Input placeholder="Error Input" variant="error" />
      </div>
    </div>
  );
}

export default App;
