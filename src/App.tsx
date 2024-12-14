import { useMainRouter } from '@pages/router';

function App() {
  const routes = useMainRouter();
  return <>{routes}</>;
}

export default App;
