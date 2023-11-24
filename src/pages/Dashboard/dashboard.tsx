import Cards from 'components/Cards';
import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="grid-cards">
      <Cards
        title="Cantidad de ventas mensuales"
        dataNumber={45}
        link="/admin/product/new"
      />
      <Cards
        title="Total Facturado En El Día"
        dataNumber={(100).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
        link="/login"
      />
      <Cards
        title="Total Facturado En El Mes"
        dataNumber={(50).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
        link="/login"
      />
      <Cards
        title="Total Facturado En El Año"
        dataNumber={(70).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
        link="/login"
      />
    </div>
  );
};

export default Dashboard;
