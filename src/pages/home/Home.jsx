import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import DonutChart from "../../components/donutChart/Donutchart";
import HistogramChart from "../../components/barchart/Barchart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="exp_7"/>
          <Widget type="exp_mnth" />
          <Widget type="expired" />
          <Widget type="total_prod" />
        </div>
        <div className="charts">
          <DonutChart/>
          <Chart title="Last 6 Months (Products expired)" aspect={2 / 1} />

        </div>
        <div className="listContainer">
          <div className="listTitle">Products Expiring Soon (Top 10)</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
