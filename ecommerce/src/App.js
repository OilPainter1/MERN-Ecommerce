import TableBlock from './components/tableBlock';
import {useState} from 'react'
import SearchBar from './components/searchBar';
import Header from './components/header';
import Footer from './components/footer';
import AddToTableButton from './components/addToTableButton';
import AddProductForm from './views/AddProductForm';
import { QUERY_ALL_PRODUCTS } from './utils/queries';
import { useQuery } from '@apollo/client'




function App() {
  
  const[isFirstTableRow] = useState(true)
  const [view,setView] = useState("home")

  const { data, loading, error } =  useQuery(QUERY_ALL_PRODUCTS)
  console.log(data, loading, error)

  const products = data?.products || []



  if (view === "home"){
    return (
    

    <div className="App">

      <Header />
        <div className='container'>
          {products.map(product => {
            return (
              <TableBlock 
                isFirstTableRow={isFirstTableRow}
                name= {product.name}
                sku= {product._id}
                image= {product.image}
                price = {product.price}
                quantityInStock= {product.quantityInStock}>
              </TableBlock>
            )
          })}
        
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
