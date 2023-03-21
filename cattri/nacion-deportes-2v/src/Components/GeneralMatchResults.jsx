import React, {useState, useEffect} from 'react'
import style from './GeneralMatchResults.module.css'
import axios from 'axios'

function GeneralMatchResults() {
    const [matchResults, setMatchResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
          try {
            const matchResponse = await axios.get('https://alfred.to/reservas/sports-nation/v2/main-page', { headers: { Authorization: ' Basic QWxmcmVkOlREODI0MThZYlBweCpuWDV4WDNrSlRrVFNeRTZndQ==' } });
            setMatchResults(matchResponse.data);
            
          } catch (error) {
            console.log(error);
          }
        };
        fetchResults();
      }, []);

      console.log(matchResults)
  return (
    <div className={style.ContainerGeneralMatchResults}>

{matchResults.map((sport) => (
    <div className={style.GeneralMatchResults}>
          <div key={sport.id}>
           
            <div>
              {sport.results.map((result) => (
                <div key={result.id}>
                 <div className={style.containerMatchs}>  <img className={style.imageIcon} src={result.teamAIcon} alt="" /> <p>{result.teamAPoints}</p> <p> VS </p> <p>{result.teamBPoints}</p> <img className={style.imageIcon} src={result.teamBIcon} alt="" /></div>
                </div>
              ))}
            </div>
          </div>
          </div>
        ))}
        <div className={style.GeneralMatchResults}></div>
        <div className={style.GeneralMatchResults}></div>
        
    </div>
  )
}

export default GeneralMatchResults