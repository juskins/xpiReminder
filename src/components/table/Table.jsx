import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      product: "Acer Nitro 5",
      batch_No:'121',
      qty:16,
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      exp_date: "11-03-2020",
      days_exp: 2,
      status: "Active",
    },
    {
      id: 2,
      product: "Playstation 5",
      batch_No:'121',
      qty:56,
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      exp_date: "2-05-2023",
      days_exp: 5,
      status: "Pending",
    },
    {
      id: 3,
      product: "Redragon S101",
      batch_No:'121',
      qty:12,
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      exp_date: "10-11-2023",
      days_exp: 10,
      status: "Expired",
    },
    {
      id: 4,
      product: "Razer Blade 15",
      batch_No:'121',
      qty:3,
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      exp_date: "10-12-2023",
      days_exp: 45,
      status: "Active",
    },
    {
      id: 5,
      product: "ASUS ROG Strix",
      batch_No:'121',
      qty:6,
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      exp_date: "21-12-2023",
      days_exp: 100,
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tr">
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Batch No</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">Expiry Date</TableCell>
            <TableCell className="tableCell"><b>Days to expiry</b></TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} className='tr'>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.batch_No}</TableCell>
              <TableCell className="tableCell">{row.qty}</TableCell>
              <TableCell className="tableCell">{row.exp_date}</TableCell>
              <TableCell className="tableCell"><b>{row.days_exp}</b></TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
