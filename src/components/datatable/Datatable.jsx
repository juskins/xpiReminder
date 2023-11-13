import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import ProductModal from "../newProductModal/NewProducts";
import { reducer } from "./reducer";
const initialState = {
  modalOpen: false,
  data: userRows,
  productToEdit: null,
};

const Datatable = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    // setModalOpen(true);
    dispatch({ type: "SET_MODAL", payload: true });
  };

  const handleCloseModal = () => {
    dispatch({ type: "HANDLE_EDIT_PRODUCT", payload: null });
    dispatch({ type: "SET_MODAL", payload: false });
  };

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

  const handleEdit = (id) => {
    // dispatch({type: ''})
    // const { name, batch, expiry, quantity, price, productionDate } =
    //   state.data.find((item) => item.id === id);
    const productToEdit = state.data.find((item) => item.id === id);
    dispatch({ type: "HANDLE_EDIT_PRODUCT", payload: productToEdit });
    dispatch({ type: "SET_MODAL", payload: true });
  };
  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };
  const editProduct = (product) => {
    dispatch({ type: "EDIT_PRODUCT", payload: product });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        // console.log(params);
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleEdit(params.row.id)}
            >
              <EditRoundedIcon />
            </div>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteRoundedIcon />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <button onClick={handleOpenModal} className="link">
          Add Product
        </button>
        <ProductModal
          open={state.modalOpen}
          onClose={handleCloseModal}
          productToEdit={state.productToEdit}
          addProduct={addProduct}
          editProduct={editProduct}
          handleCloseModal={handleCloseModal}
        />
        {/* <Link to="/products/new" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={state.data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
