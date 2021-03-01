import styled from "styled-components"

export default function Location ( {next, prev, list, activeitem, add, teleport}) {
  // возвращает навигацию по кол-ву number
  function listMenu(number) {    
      return (
        <>
           {list.map( (_, index) => {

             if (index < activeitem && index >= activeitem - number) {
              return (
                <>
                  <span onClick={(e) => teleport(e, index)}>{index + 1} &nbsp;</span>
                </>
              )
             }
           })}

           <span className='active' >{activeitem + 1} &nbsp;</span>

           {list.map( (_, index) => {
             if (index > activeitem && index <= activeitem + number) {
              return (
                <>
                  <span onClick={(e) => teleport(e, index)}>{index + 1} &nbsp;</span>
                </>
              )
             }
           })}
        </>  
      )  
    
  }

  return (
    <LocationBox>
          <span className='location_btn' onClick={prev}> &#10096; &nbsp;</span>
          {listMenu(2)}
          <span className='location_btn' onClick={next}> &#10097; </span>
          <span className='location_btn--add' onClick={add}> + </span>
    </LocationBox>
  )
}


const LocationBox = styled.div`
  display: flex;
  padding: 10px;
  margin: 0 auto;
  width: 200px;

  span:hover {
    cursor: pointer;
  }

`;

