import TableBlock from './components/tableBlock';
import { useState } from 'react'
import SearchBar from './components/searchBar';
import Header from './components/header';
import Footer from './components/footer';
import AddToTableButton from './components/addToTableButton';
import AddProductForm from './views/AddProductForm';
import { QUERY_ALL_PRODUCTS } from './utils/queries';
import { useQuery } from '@apollo/client'


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isFirstTableRow] = useState(true)
  const [view, setView] = useState("home")
  console.log(searchTerm)
  const { data, loading, error } = useQuery(QUERY_ALL_PRODUCTS, {
    variables: {
      searchTerm
    }
  })
  console.log(data, loading, error)

  const products = data?.products || []

  if (view === "home") {

    return (

      <div className="App">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className='container prodForm'>
          {products.map(product => {

            return (

              <TableBlock
                isFirstTableRow={isFirstTableRow}
                name={product.name}
                sku={product._id}
                image={<img src={product.image} width={200} height={200} alt={product.name} />}
                // image= {<img src={`./assets/${image}`} />}
                price={product.price}
                quantityInStock={product.quantityInStock}>
              </TableBlock>
            )
          })}
          <AddToTableButton view={view} setView={setView}></AddToTableButton>
        </div>
        <Footer />
      </div>
    )
  } else
    if (view === "AddTableRow") {

      return (

        <>
          <AddProductForm view={view} setView={setView}></AddProductForm>
        </>
      )
    }

}

export default App;
