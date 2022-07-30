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
        <div class="tweet" id="1113961806886785024"></div>


<script
  src="https://code.jquery.com/jquery-3.4.0.slim.min.js"
  integrity="sha256-ZaXnYkHGqIhqTbJ6MB4l9Frs/r7U4jlx7ir8PJYBqbI="
  crossorigin="anonymous"></script>
<script src="http://platform.twitter.com/widgets.js"></script>
<script>
	var tweets = $(".tweet");
	
	$(tweets).each( function( t, tweet ) { 

    var id = $(this).attr('id');
 
    twttr.widgets.createTweet(
      id, tweet, 
      {
        conversation : 'none',    // or all
        cards        : 'hidden',  // or visible 
        linkColor    : '#cc0000', // default is blue
        theme        : 'light'    // or dark
      });

    });
</script>
<div id='footer'>
          <p>監控 <Link to='/' text='雙龍體育' /> 檢測頻率 5 分鐘</p>
          <p>&copy; 2022 <Link to='https://www.ssangyongsports.eu.org/' text='雙龍體育' />, Version {Package.version}</p>
        </div>
      </div>
    </>
  );
}

export default App;
