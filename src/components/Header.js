import "./Header.css";
import React from 'react';

const Header = (prop) => {
  return (
    <div className="headerColor">
      <h2>Ces4</h2>
        <table className="containerHeader">
        <tbody>
          <tr>
            <td className="labelHeader">Saldo Inicial:</td>
            <td className="labelHeader">Saldo Final:</td>
          </tr>
          <tr >
            <td>
              <input type="text" className="inputHeader" value={prop.saldoInicial} />
            </td>
            <td>
              <input type="text" className="inputHeader" value={prop.saldoFinal}/>
            </td>
          </tr>
          </tbody>
        </table>
    </div>
  );
};

export default Header;
