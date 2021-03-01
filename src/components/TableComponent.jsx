import { useEffect, useRef, useState } from "react"

const STATUSES = {
  active: 'active',
  disable: 'disable',
  up: 'up',
  down: 'down'
}

export default function TableComponent ({index, setter, table, title, indicator, tableIndex}) {
  const {active, disable, up, down } = STATUSES;

  const [status, setStatus] = useState(disable);
  const [value, setValue] = useState(table[index]);
  const [sortStatus, setSortStatus] = useState(up);
  const inputRef = useRef();

  // console.log('Table component render')
  useEffect( () => {
    setValue(table[index]);
  }, [table])

  // Клик меняет div на input и кидает фокус на input;
  function handelClick () {
     setStatus(active);
     setValue( (prev) => prev.trim());
     
     setTimeout(() => {
      inputRef.current.focus();
     }, 100);
  }

  // Сохраняет значение iput при потере фокуса в state
  function handleBlur () {
    setStatus(disable);
    setter( (prev) => {
      prev[tableIndex][index] = inputRef.current.value;
      return [...prev]
    })
  }

  // потеря фокуса пр нажатии Enter
  function handlePresskey (e) {
    if (e.key === 'Enter') {
      e.target.blur()
    }
  }

  function handleKeyDown (e) {
    const columnArray = e.target.parentElement.parentElement.querySelectorAll('li > div:nth-child(1)');
    const columnArrayAll = e.target.parentElement.parentElement.parentElement.querySelectorAll('li > div:nth-child(1)');


    if (e.key === 'ArrowUp') {
      columnArray.forEach( (item) => {

        if (item.getAttribute('id') === String(index - 1)) {
          item.click();
          return;
        }

        if (String(index - 1) < 0) {
          columnArray[columnArray.length - 1].click();
          return;
        }
      });
    }

    if (e.key === 'ArrowDown') {

      columnArray.forEach( (item) => {

        if (item.getAttribute('id') === String(index + 1)) {
          item.click();
          return;
        }

        if (String(index + 1) > columnArray.length) {
          columnArray[0].click();
          return;
        }

      });
    }

    if (e.key === 'ArrowRight') {  
      columnArrayAll.forEach( (item) => {
        if (item.getAttribute('data-indecator') === String(indicator + 1) && item.getAttribute('id') === String(index)) {
          item.click();
          return;
        }
      })

    }
    
    if (e.key === 'ArrowLeft') {  
      columnArrayAll.forEach( (item) => {
        if (item.getAttribute('data-indecator') === String(indicator - 1) && item.getAttribute('id') === String(index)) {
          item.click();
          return;
        }
      })
    }
  }
 // сортировка всех ячеек кроме  0 (title):
  function sortTable () {
    if (sortStatus === up) {
      setter( (prev) => {
        const title = prev[tableIndex].shift();

        prev[tableIndex].sort( (a, b) => {
          if(a === "" || a === null) return 1;
          if(b === "" || b === null) return -1;
          if(a === b) return 0;
          return a < b ? -1 : 1;
        });

        prev[tableIndex].unshift(title);

        return [...prev];
      });

      setSortStatus(down);
    } else {
      setter( (prev) => {
        const title = prev[tableIndex].shift();

        prev[tableIndex].sort( (a,b) => {
            if(a === "" || a === null) return 1;
            if(b === "" || b === null) return -1;
            if(a === b) return 0;
            return b < a ? -1 : 1; 
          });

        prev[tableIndex].unshift(title);
        return [...prev];
      });
      setSortStatus(up);
    }
  }

  return (
      <li>
          {status === active ? 
          <input 
            ref={inputRef} 
            onChange={ (e) => setValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onKeyPress={handlePresskey}
            type='text' 
            value={value} 
          /> 
          : 
          <div 
            className='table__item' 
            onClick={handelClick}
            id={index}
            data-indecator={indicator}
          >
            {table[index]}
          </div>}

          {title ? 

          <div className={ status === disable ? 'table__item--hover' : 'off'}>
            <div onClick={handelClick}>Переименовать</div>
            <div onClick={sortTable}>Сортировать {sortStatus === up ? <>&#94;</> : <>&#709;</>}</div>
          </div> 

          : null}
      </li>
  )
}