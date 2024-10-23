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
  paymentMethods: [
    { method: 'Credit Card', percentage: 60, amount: 7200 },
    { method: 'PayPal', percentage: 30, amount: 3600 },
    { method: 'Bank Transfer', percentage: 10, amount: 1200 },
  ],
  taxSummary: {
    currentMonth: 500,
    previousMonth: 450,
    yearToDate: 5600,
    percentageChange: 11.1,
  },
  serviceRevenue: [
    { service: 'Haircuts', amount: 4000 },
    { service: 'Consultations', amount: 3500 },
    { service: 'Hair Coloring', amount: 2800 },
    { service: 'Styling', amount: 1700 },
  ],
  invoicingHistory: [
    {
      id: 'INV-123',
      amount: 200,
      status: 'paid',
      date: '2024-10-20',
      client: 'John Smith',
      dueDate: '2024-11-03',
    },
    {
      id: 'INV-124',
      amount: 150,
      status: 'overdue',
      date: '2024-10-15',
      client: 'Sarah Johnson',
      dueDate: '2024-10-29',
    },
    {
      id: 'INV-125',
      amount: 300,
      status: 'pending',
      date: '2024-10-18',
      client: 'Mike Brown',
      dueDate: '2024-11-01',
    },
    {
      id: 'INV-126',
      amount: 175,
      status: 'paid',
      date: '2024-10-17',
      client: 'Emma Davis',
      dueDate: '2024-10-31',
    },
    {
      id: 'INV-127',
      amount: 225,
      status: 'pending',
      date: '2024-10-19',
      client: 'James Wilson',
      dueDate: '2024-11-02',
    },
  ],
};
