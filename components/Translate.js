import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label:'Albanian',
    value:'sq',
  },
  {
    label:'Amharic',
    value:'am',
  },
  {
    label:'Armenian',
    value:'hy',
  },
  {
    label:'Azerbaijani',
    value:'az',
  },
  {
    label:'Basque',
    value:'eu',
  },
  {
    label:'Belarusian',
    value:'be',
  },
  {
    label:'Chinese',
    value:'zh',
  },
  {
    label:'French',
    value:'fr',
  },
  {
    label:'Japanese',
    value:'ja',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const[text,setText] = useState('');
  
 
  return (
    
        <div className='ui form'>
            <div className='field'>
                <label>enter Text:</label>
 <input value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
   
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr/>
      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language}/>
    </div>
  );
};

export default Translate;
