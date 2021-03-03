import React from 'react';

function Header({totalIncome}) {
  return (
    <header>
      <h1>Gelir Listesi</h1>
      <div className="total-income">£{totalIncome}</div>
    </header>
  );
}

export default Header;
//rfce komutu ile kısayoldan fonk. oluşturulur.
