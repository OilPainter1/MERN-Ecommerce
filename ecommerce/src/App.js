import TableBlock from './components/tableBlock';
import {useState} from 'react'
import SearchBar from './components/searchBar';
import Header from './components/header';
import Footer from './components/footer';
import AddToTableButton from './components/addToTableButton';
import AddProductForm from './views/AddProductForm';




function App() {
  
  const[isFirstTableRow] = useState(true)
  const [view,setView] = useState("home")
  if (view === "home"){
    return (
    

    <div className="App">

      <Header />
        <div className='container'>
        <TableBlock 
          isFirstTableRow={isFirstTableRow}
          name="test1"
          sku="1"
          image="#1"
          price = "10">
        </TableBlock>
  
        <TableBlock  
          name="test2"
          sku="2"
          image="#2"
          price = "40">
        </TableBlock>
  
        <TableBlock 
          name="test3"
          sku="3"
          image="#3"
          price = "15">
        </TableBlock>
  
        <TableBlock
          name="test4"
          sku="4"
          image="#4"
          price= "30">    
        </TableBlock>
        
        <AddToTableButton view={view} setView={setView}></AddToTableButton>
        </div>
        <Footer />
      </div>
      
)} else
      if (view === "AddTableRow"){
        return(
        <>
          <AddProductForm view={view} setView={setView}></AddProductForm>
        
        </>
        
       )
      }

}

export default App;
