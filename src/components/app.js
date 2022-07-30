import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
      <div classname="container">
       <div id="uptime">
    <h2 style={{ textAlign: "center" }}>&nbsp;在twitter上查看之前的停機</h2>
  </div>
</div>

        <div id='footer'>
          
        </div>
      </div>
    </>
  );
}

export default App;
