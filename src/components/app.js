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
        <div id='footer'>
          <p>監控 <Link to='/' text='雙龍體育' /> 檢測頻率 5 分鐘</p>
          <p>&copy; 2022 <Link to='https://www.ssangyongsports.eu.org/' text='雙龍體育' />, Version {Package.version}</p>
        </div>
      </div>
    </>
  );
}

export default App;
