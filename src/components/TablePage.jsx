import {useState } from "react"
import styled from "styled-components"
import TableComponent from "./TableComponent"

export default function TablePage ({status, expample}) {

  const [exTable, setExtable] = useState(['hover Me!', '9','8','6', '7', '2', '1', '5', '3', '4']);

  const [table1, setTable1] = useState(new Array(10).fill(''));
  const [table2, setTable2] = useState(new Array(10).fill(''));
  const [table3, setTable3] = useState(new Array(10).fill(''));
  const [table4, setTable4] = useState(new Array(10).fill(''));
  const [table5, setTable5] = useState(new Array(10).fill(''));

  
  return (
    <TableContainer status={status}>
      <Table>
        {expample ? 

        exTable.map( (item, index) => {
          return  <TableComponent 
                      func={setExtable} 
                      index={index} 
                      key={index} 
                      table={exTable} 
                      title={index === 0 ? true : false}
                      indicator={0}
                  />
        })

        : 

        table1.map( (item, index) => {
          return  <TableComponent 
                      func={setTable1} 
                      index={index} 
                      key={index} 
                      table={table1} 
                      title={index === 0 ? true : false} 
                      indicator={0}

                  />
        } )
        
        }
    
      </Table>
      <Table>
        {table2.map( (item, index) => {
          return  <TableComponent 
                       func={setTable2} 
                       index={index} 
                       key={index} 
                       table={table2} 
                       title={index === 0 ? true : false}
                       indicator={1}
                  />
        } )}
      </Table>
      <Table>
        {table3.map( (item, index) => {
          return  <TableComponent 
                      func={setTable3} 
                      index={index} 
                      key={index} 
                      table={table3} 
                      title={index === 0 ? true : false}
                      indicator={2}
                  />

        } )}
      </Table>
      <Table>
        {table4.map( (item, index) => {
          return  <TableComponent 
                       func={setTable4} 
                       index={index} 
                       key={index} 
                       table={table4} 
                       title={index === 0 ? true : false}
                       indicator={3}
                  />
                  
        } )}
      </Table>
      <Table>
        {table5.map( (item, index) => {
          return  <TableComponent 
                    func={setTable5} 
                    index={index} 
                    key={index} 
                    table={table5} 
                    title={index === 0 ? true : false}
                    indicator={4}
                  />
        } )}
      </Table>
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




