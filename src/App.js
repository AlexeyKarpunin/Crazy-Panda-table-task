import {useState } from 'react';
import styled from 'styled-components';
import TablePage from './components/TablePage';
import Location from "./components/Location";
import Mover from './components/Mover';

function App() {
  const [list, setList] = useState(new Array(2).fill(0));
  const [listCounter, setListCounter] = useState(0);

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

  function addList () {setList([...list, 0])}

  function teleport(e, position) {setListCounter(position)}
  
  return (
    <Mover>
    <section className="table__section">
      <HeadH1>Hello Crazy Panda !!!</HeadH1>

      <section className="table">
        <HeadH2>Таблица {listCounter + 1} / {list.length}</HeadH2>

        {list.map( (item, index) => {
          let example = true;
          if (index > 0) example = false;

          return <TablePage status={listCounter === index ? 'active' : 'none-active'} expample={example}/>
        })}

        <Location teleport={teleport} next={nextList} prev={prevList} list={list} activeitem={listCounter} add={addList} /> 
      </section>
    </section>
    </Mover>
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

