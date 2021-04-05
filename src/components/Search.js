import React ,{useState ,useEffect} from 'react';
import axios from 'axios';


const Search = () => {
    const [term ,setTerm] = useState('');
    const [result ,setResult] = useState([]);

    console.log(result);
    useEffect(() => {
            const search = async() => {
               const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                    params:{
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term,
                    },
                  });
                  setResult(data.query.search);
                };
         setTimeout(() => {
             if(term) {
             search();  
            }    
         },1000);

     },[term] );

     const renderedResults = result.map((results) =>{
        return(
            <div key={results.pageid} className="item">
               <div className="content">
                    <div className="right floated content">
                        <a  href= {`https://en.wikipedia.org?curid=${results.pageid}`} className="ui button">Go</a>
                    </div>
                 
                    <div className="header">
                        {results.title}
                    </div>
                    <span dangerouslySetInnerHTML ={{__html:results.snippet}}></span>
                </div>
            </div>
        );
     });

    return(
       <div>
            <div className="ui form icon">
            <div className="field">
                <label>Enter Search Term</label>
            <input 
            className="input" 
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            /> 
            </div>   
            </div>
           <div className ="ui celled list">
           {renderedResults}
               </div> 
        </div>
    );
};
export default Search;