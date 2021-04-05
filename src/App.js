import React ,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
const items = [
  {
    title:'What is React?',
    content:'React is a front end javascript framework',
  },
  {
    title:'Why use React?',
    content:'React is favourite js library',

  },
  {
    title:'what is special about React',
    content:'React is component based ',

  },
]
const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];


export default () => {
  
  const [selected ,setSelected] = useState(options[0]);
 /* const[showDropdown,setShowDropdown] = useState(true);
  return (
    <div >
      <button onClick ={()=>setShowDropdown(!showDropdown)} >Toggle Dropdown</button>
      {showDropdown?
      <Dropdown
       options={options}
       selected={selected}
       onSelectedChange={setSelected}
       /> :null}
    </div>
  );
  */
  return(
    <div>
      <Header />
   <Route path='/'>
    <Accordion items={items}/>
   </Route>
   <Route path='/list'>
     <Search/>
   </Route>
    <Route path='/dropdown'>
      <Dropdown 
      label='Select a Color'
      options={options}
      selected={selected}
      onSelectedChange={setSelected}
      />
    </Route>
    <Route path='/translate'>
      <Translate/>
    </Route>
    </div>
  );
};