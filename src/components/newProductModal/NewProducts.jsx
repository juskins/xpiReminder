import "./NewProducts.scss";
import { useReducer, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { reducer } from "./reducer";

const ProductModal = ({
  open,
  onClose,
  productToEdit,
  addProduct,
  editProduct,
  handleCloseModal,
}) => {
  // console.log(productToEdit);
  const initialState = {};
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  // console.log(productToEdit?.name);
  const handleSave = (e) => {
    if (productToEdit) {
      editProduct(state);
    } else {
      addProduct(state);
    }
    handleCloseModal();
    e.preventDefault();
  };

  useEffect(() => {
    if (!productToEdit) {
      dispatch({
        type: "LOAD_DATA",
        payload: {
          id: new Date().getTime().toLocaleString(),
          name: "",
          batch: "",
          expiry: "",
          quantity: "",
          price: "",
          productionDate: "",
        },
      });
    } else dispatch({ type: "LOAD_DATA", payload: productToEdit });
  }, [productToEdit]);

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle style={{ fontWeight: "bold" }}>
          {productToEdit ? "Edit Product" : "Add New Product"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSave}>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Product Name"
                  fullWidth
                  value={state?.name}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      field: "name",
                      value: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Batch Number"
                  fullWidth
                  value={state?.batch}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      field: "batch",
                      value: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Expiry date"
                  fullWidth
                  value={state?.expiry}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      field: "expiry",
                      value: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Quantity"
                  fullWidth
                  value={state?.quantity}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      field: "quantity",
                      value: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Price"
                  fullWidth
                  required
                  value={state?.price}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      field: "price",
                      value: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* Repeat similar code for other input fields */}
              <Grid item xs={6}>
                <TextField
                  label="Production Date"
                  fullWidth
                  required
                  value={state?.productionDate}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE_FIELD",
                      field: "productionDate",
                      value: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
            <button type="submit" className="btn">
              Save
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductModal;

// const ProductModal = ({ open, onClose }) => {
//   const [name, setName] = useState("");
//   const [batch, setBatch] = useState("");
//   const [exp, setExp] = useState("");
//   const [qty, setQty] = useState("");
//   const [price, setPrice] = useState("");
//   const [prod, setProd] = useState("");
//   const [products, setProducts] = useState([]);

//   const handleAddProducts = (e) => {
//     e.preventDefault();
//     const newItems = {
//       id: new Date().getSeconds().toString,
//       name,
//       batch,
//       exp,
//       qty,
//       price,
//       prod,
//     };
//     setProducts((product) => {
//       return [...products, newItems];
//     });
//   };
//   return (
//     <>
//       <Dialog open={open} onClose={onClose}>
//         <DialogTitle style={{ fontWeight: "bold" }}>
//           Add New Product
//         </DialogTitle>
//         <DialogContent>
//           <form>
//             <Grid container spacing={2} style={{ marginTop: "10px" }}>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Product Name"
//                   fullWidth
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Batch Number"
//                   fullWidth
//                   value={batch}
//                   onChange={(e) => setBatch(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Expiry Date"
//                   fullWidth
//                   value={exp}
//                   onChange={(e) => setExp(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Quantity"
//                   fullWidth
//                   value={qty}
//                   onChange={(e) => setQty(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Price"
//                   fullWidth
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Production Date"
//                   fullWidth
//                   value={prod}
//                   onChange={(e) => setProd(e.target.value)}
//                 />
//               </Grid>
//             </Grid>
//             {/* <button className="btn" onClick={handleAddProducts}>
//               Save
//             </button> */}
//             <button className="btn">Save</button>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };
