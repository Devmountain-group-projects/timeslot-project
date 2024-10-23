// mockData.js
export const mockData = {
  totalRevenue: {
    amount: 12345,
    period: 'Last 30 Days',
    percentageChange: 8.5,
  },
  topClients: [
    {
      id: 1,
      name: 'Jane Smith',
      revenue: 5000,
      appointments: 10,
      image: '/src/assets/images/user8.png',
    },
    {
      id: 2,
      name: 'Joshua Simmons',
      revenue: 3500,
      appointments: 8,
      image: '/src/assets/images/user3.png',
    },
    {
      id: 3,
      name: 'James Smith',
      revenue: 2800,
      appointments: 6,
      image: '/src/assets/images/user5.png',
    },
  ],
  monthlyRevenue: [
    { month: 'May', revenue: 8500 },
    { month: 'June', revenue: 9200 },
    { month: 'July', revenue: 8900 },
    { month: 'August', revenue: 10500 },
    { month: 'September', revenue: 11200 },
    { month: 'October', revenue: 12345 },
  ],
  averagePayment: {
    days: 7,
    trend: 'decreasing',
    percentageChange: -15,
  },
};
