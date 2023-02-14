import TableBlock from './components/tableBlock';
import {useState} from 'react'



function App() {
  
  const[isFirstTableRow] = useState(true)

  return (
    <div className="App">

      <TableBlock 
        isFirstTableRow={isFirstTableRow}
        name="test1"
        sku="1"
        image="#1">
      </TableBlock>
      
     

      <TableBlock  
       
        name="test2"
        sku="2"
        image="#2">
      </TableBlock>

      <TableBlock 
        name="test3"
        sku="3"
        image="#3">
      </TableBlock>

      <TableBlock
        name="test4"
        sku="4"
        image="#4">    
      </TableBlock>

    </div>
  );
}

export default App;
