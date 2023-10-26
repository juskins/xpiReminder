import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;
  let widgetClass;

  //temporary
  const amount = 103;
  const diff = 20;

  switch (type) {
    case "exp_7":
      
      data = {
        title: "Expiring in 7 days",
        isMoney: false,
        link: "See all",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      widgetClass = "exp-seven";
      break;
    case "exp_mnth":
      data = {
        title: "Expiring this month",
        isMoney: false,
        link: "View all",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      widgetClass = "exp-month";
      break;
    case "expired":
      data = {
        title: "Expired Already",
        isMoney: true,
        link: "View all",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      widgetClass = "expired";
      break;
    case "total_prod":
      data = {
        title: "Total Products",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      widgetClass = "total-prod";
      break;
    default:
      break;
  }

  return (
    <div className={`widget ${widgetClass}`}>
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {amount}
        </div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
