import styled from "styled-components"

export default function Location ( {next, prev, list, activeitem, add, teleport}) {

  function listMenu () {
    if (list.length <= 2) {
      return (
      <div>
        {list.map( (item, index) => {
          return <span onClick={(e) => teleport(e, Number(index))} className={index === activeitem ? 'active' : null}>{index + 1} &nbsp;</span> 
        })}
      </div>
      )
    } else {
            if (activeitem === 0) {
              return (
                <>
                 <span className='active' >{activeitem + 1} &nbsp;</span>
                 <span onClick={(e) => teleport(e, Number(activeitem) + 1)} >{activeitem + 2} &nbsp;</span>
                 <span onClick={(e) => teleport(e, Number(activeitem) + 2)} >{activeitem + 3} &nbsp;</span>
                </>
              )
            } else if (activeitem === list.length - 1) {
              return (
                <>
                  <span onClick={(e) => teleport(e, Number(activeitem - 2))} >{activeitem - 1} &nbsp;</span>
                  <span onClick={(e) => teleport(e, Number(activeitem - 1))} >{activeitem} &nbsp;</span>
                  <span className='active' >{activeitem + 1} &nbsp;</span>
                </>
              )
            } else {
              return (
                <>
                  <span onClick={(e) => teleport(e, Number(activeitem - 1))} >{activeitem} &nbsp;</span>
                  <span className='active' >{activeitem + 1} &nbsp;</span>
                  <span onClick={(e) => teleport(e, Number(activeitem + 1))} >{activeitem + 2} &nbsp;</span>
                </>
              )
            }
    }
  }

  return (
    <LocationBox>
          <span className='location_btn' onClick={prev}> &#10096; &nbsp;</span>
          {listMenu()}
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

