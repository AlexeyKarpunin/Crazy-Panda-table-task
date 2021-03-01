import {useState } from "react"
import styled from "styled-components"
import TableComponent from "./TableComponent"


export default function TablePage ({status, data}) {

  const [tableModel, setTableModel] = useState(data);
  // console.log('Table page render')

  return (
    <TableContainer status={status}>
      {tableModel.map( (item, tableIndex) => {
        return (
          <Table>
               {item.map( (cell, cellIndex) => {
                 return (
                  <TableComponent 
                    setter={setTableModel} 
                    index={cellIndex}
                    tableIndex={tableIndex}
                    key={cellIndex} 
                    table={item} 
                    title={cellIndex === 0 ? true : false}
                    indicator={tableIndex}
                  />
                 )
               })}
          </Table>
        )
      })}

    </TableContainer>
  )
}

const TableContainer = styled.div`
  display: ${props => props.status === 'active' ? 'flex' : 'none'};
  justify-content: space-evenly;

`;

const Table = styled.ul`
  padding: 0;
  list-style: none;

  li {
    position: relative;

    div {
      width: 150px;
      border: 1px solid #000000;
      margin: 0 0 10px 0;
      height: 23px;
    }

    input {
      width: 150px;
      border: 1px solid #000000;
      margin: 0 0 10px 0;
      height: 23px;
      padding: 5px 10px;
    }
  }

  li:hover {
    cursor: pointer;
  }
`




