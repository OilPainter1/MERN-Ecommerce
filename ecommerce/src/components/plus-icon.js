import { useMutation, useQuery } from "@apollo/client";
import { ADD_TO_STOCK } from "../utils/mutations";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";

function PlusIcon(props) {
  console.log(props);
  const [addToStock] = useMutation(ADD_TO_STOCK);
  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={(event) => {
        event.preventDefault();
        const updatedStock = props.quantity + 1;
        console.log(updatedStock);

        addToStock({
          variables: {
            productId: props.id,
            stock: updatedStock,
          },
          refetchQueries: [
            {
              query: QUERY_ALL_PRODUCTS,
            },
            "products",
          ],
        });
      }}
    >
      <i className="bi bi-plus"></i>
    </button>
  );
}

export default PlusIcon;
