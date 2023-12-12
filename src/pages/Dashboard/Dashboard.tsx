import React from 'react';
import DashboardCards from 'components/Cards';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="grid-cards">
      <DashboardCards
        title="Ventas mensuales"
        dataNumber={45}
        link="/admin/product/new"
      />
      <DashboardCards
        title="Facturado en el día"
        dataNumber={(100).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
        link="/login"
      />
      <DashboardCards
        title="Facturado en el mes"
        dataNumber={(50).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
        link="/login"
      />
      <DashboardCards
        title="Facturado en el año"
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
