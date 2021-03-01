import {useState } from 'react';
import styled from 'styled-components';
import TablePage from './components/TablePage';
import Location from "./components/Location";

const defaultList = [
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
]

const model = [
  [
    ['hover Me!', '9','8','6', '7', '2', '1', '5', '3', '4'],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']
  ],

  [ 
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']
  ],  
]

function App() {
  const [list, setList] = useState(model);
  const [listCounter, setListCounter] = useState(0);

  // console.log('App render')
  function nextList () {
    if (listCounter === list.length - 1) return;
    setListCounter( (prev) => {
      return prev + 1;
    })
  }

  function prevList () {
    if (listCounter === 0) return;
    setListCounter( (prev) => {
      return prev - 1;
    })
  }
  function addList () {
    const copy = defaultList.map( (item) => Object.assign([], item));
    setList([...list, copy])
  }

  function teleport(e, position) {setListCounter(position)}
  
  return (
    <section className="table__section">
      <HeadH1>Hello World !!!</HeadH1>

      <section className="table">
        <HeadH2>Таблица {listCounter + 1} / {list.length}</HeadH2>

        {list.map( (item, index) => {
          return <TablePage status={listCounter === index ? 'active' : 'none-active'} data={item} />
        })}

        <Location 
          teleport={teleport} 
          next={nextList} 
          prev={prevList} 
          list={list} 
          activeitem={listCounter} 
          add={addList} 
        /> 
      </section>
    </section>
  );
}

export default App;


const HeadH1 = styled.h1`
  text-align: center;
  font-size: 26px;
`;

const HeadH2 = styled.h1`
  text-align: center;
  font-size: 22px;
`;

