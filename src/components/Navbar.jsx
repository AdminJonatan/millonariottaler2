import React from 'react';
import { Menu } from "antd";
import "./Navbar.css";

const { SubMenu } = Menu;

const Navbar = ({level}) => {
  return (
    <div > 
      <Menu 
        style={{ width: 256,marginTop:'100PX', backgroundColor:'#479bb8' }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
      >
        <Menu.Item key="10000" className={level == 10 ? "nevelPlay" : ""}>10 $10.000</Menu.Item>
        <Menu.Item key="9000" className={level == 9 ? "nevelPlay" : ""}>9 $9.000</Menu.Item>
        <Menu.Item key="8000" className={level == 8 ? "nevelPlay" : ""}>8 $8.000</Menu.Item>
        <Menu.Item key="7000" className={level == 7 ? "nevelPlay" : ""}>7 $7.000</Menu.Item>
        <Menu.Item key="6000" className={level == 6 ? "nevelPlay" : ""}>6 $6.000</Menu.Item>
        <Menu.Item key="5000" className={level == 5 ? "nevelPlay" : ""}>5 $5.000</Menu.Item>
        <Menu.Item key="4000" className={level == 4 ? "nevelPlay" : ""}>4 $4.000</Menu.Item>
        <Menu.Item key="3000" className={level == 3 ? "nevelPlay" : ""} >3 $3.000</Menu.Item>
        <Menu.Item key="2000" className={level == 2 ? "nevelPlay" : ""}>2 $2.000</Menu.Item>
        <Menu.Item key="1000"className={level == 1 ? "nevelPlay" : ""}>1 $1.000</Menu.Item>
        

        <Menu.Item key="link"></Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
