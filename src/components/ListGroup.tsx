import { useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {
  items: string[];
  heading: string;
  OnSelectItem: (item: string) => void;
}


function ListGroup({ items, heading, OnSelectItem } : Props) {
  

  const [selectedIndex, setSelectedIndex] = useState(-1)


  return (
    <>
    <h1>{heading}</h1>
    {items.length === 0 && 'No item found'}
    
    <ul className="list-group">
      {items.map((item, index) => {
        return <li 
          className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' }
          key={item} 
          onClick={()  => { 
            setSelectedIndex(index) 
            OnSelectItem(item)
          }}
          >
            {item}
          </li>
      }
      )}
    </ul>
    </>
  )
}

export default ListGroup;