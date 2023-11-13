import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import DonutChart from "../../components/donutChart/Donutchart";
import HistogramChart from "../../components/barchart/Barchart";
import { useDarkModeContext } from "../../context/darkModeContext";
import moment from "moment";
const Home = () => {
  const { allProducts } = useDarkModeContext();
  // console.log(allProducts);
  const currentDate = moment();
  const freshProducts = allProducts.filter((product) => {
    const expiryDate = moment(product.data.expiry_date, "MM/DD/YYYY");
    return expiryDate.diff(currentDate, "days") > 365; // Products expiring a year or more from today
  });
  const expMonthProducts = allProducts.filter((product) => {
    const expiryDate = moment(product.data.expiry_date, "MM/DD/YYYY");
    const daysUntilExpiry = expiryDate.diff(currentDate, "days");
    return daysUntilExpiry <= 30 && daysUntilExpiry >= 0; // Products expiring within 1 month from today
  });
  const expiredProducts = allProducts.filter((product) => {
    const expiryDate = moment(product.data.expiry_date, "MM/DD/YYYY");
    return expiryDate.isBefore(currentDate, "day"); // Expired products
  });
  const totalProducts = allProducts.length;
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="fresh" amount={freshProducts.length} />
          <Widget type="exp_month" amount={expMonthProducts.length} />
          <Widget type="expired" amount={expiredProducts.length} />
          <Widget type="total_prod" amount={totalProducts} />
        </div>
        <div className="charts">
          <DonutChart
            freshCount={freshProducts.length}
            expiringSoonCount={expMonthProducts.length}
            expiredCount={expiredProducts.length}
          />
          <Chart title="Last 6 Months (Products expired)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Products Expiring Soon (Top 10)</div>
          <Table data={allProducts} />
        </div>
      </div>
    </div>
  );
};

export default Home;
