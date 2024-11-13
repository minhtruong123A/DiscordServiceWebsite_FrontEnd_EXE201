import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// material-ui
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from '../../components/MainCard';
import AnalyticEcommerce from '../../components/cards/statistics/AnalyticEcommerce';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import ReportAreaChart2 from './ReportAreaChart2';
import ReportAreaChart3 from './ReportAreaChart3';
import UniqueVisitorCard from './UniqueVisitorCard';
import SaleReportCard from './SaleReportCard';
import OrdersTable from './OrdersTable';

// assets
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import avatar1 from '../../assets/images/users/avatar-1.png';
import avatar2 from '../../assets/images/users/avatar-2.png';
import avatar3 from '../../assets/images/users/avatar-3.png';
import avatar4 from '../../assets/images/users/avatar-4.png';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  const navigate = useNavigate();
  const [analyticsData, setAnalyticsData] = useState({
    active_user: 0,
    total_user: 0,
    premium_user: 0,
    percentage_premium_user: 0,
    percentage_user_rate: 0,
  });
  const [prevAnalyticsData, setPrevAnalyticsData] = useState({
    active_user: 0,
    total_user: 0,
    premium_user: 0,
  });
  const [activeUserChange, setActiveUserChange] = useState(0);
  const [percentageActiveUsers, setPercentageActiveUsers] = useState(0);
  const [percentagePremiumUsers, setPercentagePremiumUsers] = useState(0);
  const [percentageUsersValue, setPercentageUsers] = useState(0);
  const [UserChangeValue, setUserChange] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [premiumUserGrowth, setPremiumUserGrowth] = useState(0);
  const [percentagePremiumGrowth, setPercentagePremiumGrowth] = useState(0);
  const [revenueGrowth, setRevenueGrowth] = useState(0);
  const [expensesRatio, setExpensesRatio] = useState(0);
  const exchangeRate = 24550;


  const getFormattedDate = (paymentDate) => {
    const transactionDate = new Date(paymentDate);
    const today = new Date();

    // Check if the date is today
    if (transactionDate.toDateString() === today.toDateString()) {
      return `Today, ${transactionDate.getHours() % 12 || 12}:${transactionDate.getMinutes().toString().padStart(2, '0')} ${transactionDate.getHours() >= 12 ? 'PM' : 'AM'} on ${transactionDate.getDate()} ${transactionDate.toLocaleString('default', { month: 'long' })}`;
    }

    // If not today, format it as a full date and time
    return transactionDate.toLocaleString('en-US', {
      weekday: 'long', // "Monday"
      year: 'numeric', // "2024"
      month: 'long', // "November"
      day: 'numeric', // "9"
      hour: 'numeric', // "4"
      minute: 'numeric', // "03"
      second: 'numeric', // "55"
      hour12: true, // 12-hour time format with AM/PM
    });
  };

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== '2') {
      navigate('/home');
    }

    const fetchAnalytics = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const response = await axios.get('https://exe202backend-ppn5.onrender.com/api/admin/analysis', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log(response.data);
        if (response.data.success) {
          const newAnalyticsData = response.data.data[0];

          // Calculate active user change and percentage of active users
          const UserChangeValue = newAnalyticsData.total_user - prevAnalyticsData.total_user;
          const percentageUsersValue = prevAnalyticsData.total_user
            ? (UserChangeValue / prevAnalyticsData.total_user) * 100
            : 0;
          console.log(percentageUsersValue)

          // Calculate active user change and percentage of active users
          const activeUserChangeValue = newAnalyticsData.active_user - prevAnalyticsData.active_user;
          const percentageActiveUsersValue = prevAnalyticsData.active_user
            ? (activeUserChangeValue / prevAnalyticsData.active_user) * 100
            : 0;
          console.log(percentageActiveUsersValue)
          // Calculate premium user growth and its percentage
          const premiumUserChange = newAnalyticsData.premium_user - prevAnalyticsData.premium_user;
          const percentagePremiumUsersValue = prevAnalyticsData.premium_user
            ? (premiumUserChange / prevAnalyticsData.premium_user) * 100
            : 0;

          console.log(premiumUserChange)
          setAnalyticsData(newAnalyticsData);
          setPrevAnalyticsData(prevAnalyticsData => ({
            active_user: newAnalyticsData.active_user,
            total_user: newAnalyticsData.total_user,
            premium_user: newAnalyticsData.premium_user,
          }));
          setUserChange(percentageUsersValue);
          setActiveUserChange(activeUserChangeValue);
          setPercentageActiveUsers(percentageActiveUsersValue);
          setPercentagePremiumUsers(percentagePremiumUsersValue);

          console.log('Active User Change:', activeUserChange);
          console.log('Percentage Active Users:', percentageActiveUsers.toFixed(2));
          console.log('Percentage Premium Users:', percentagePremiumUsers.toFixed(2));
        }
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };


    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await fetch('https://exe202backend-ppn5.onrender.com/api/admin/transaction', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (data.success) {
          const transactions = data.data[0];

          const getWeekNumber = (date) => {
            const d = new Date(date);
            const startDate = new Date(d.getFullYear(), 0, 1);
            const days = Math.floor((d - startDate) / (24 * 60 * 60 * 1000));
            return Math.floor((days - d.getDay() + 7) / 7);
          };

          const weeklyData = transactions.reduce((acc, transaction) => {
            const weekNumber = getWeekNumber(transaction.payment_date);
            const username = transaction.username;

            if (typeof transaction.payment_ammount !== 'number') {
              console.warn('Invalid payment_ammount:', transaction.payment_ammount);
              return acc; // Bỏ qua giao dịch không hợp lệ
            }


            if (!acc[weekNumber]) {
              acc[weekNumber] = { totalAmount: 0, totalExpenses: 0, premiumUsers: new Set() }; // Khởi tạo premiumUsers là Set
            }

            acc[weekNumber].totalAmount += transaction.payment_ammount;

            if (transaction.payment_ammount < 0) { // Giả sử chi phí có giá trị âm
              acc[weekNumber].totalExpenses += Math.abs(transaction.payment_ammount);
            }

            // Thêm username vào Set premiumUsers để đếm số lượng người dùng duy nhất
            if (username) {
              acc[weekNumber].premiumUsers.add(username);
            } else {
              console.warn('Invalid username:', username);
            }
            return acc;
          }, {});

          console.log('weeklyData' + weeklyData);


          const weekNumbers = Object.keys(weeklyData);
          let revenueGrowth = 0;
          let growth = 0;
          let expensesRatio = 0;


          if (weekNumbers.length > 1) {
            const lastWeek = weekNumbers[weekNumbers.length - 1];
            const previousWeek = weekNumbers[weekNumbers.length - 2];

            const currentRevenue = weeklyData[lastWeek].totalAmount;
            console.log('currentRevenue' + currentRevenue)
            const previousRevenue = weeklyData[previousWeek].totalAmount;
            console.log('previousRevenue' + previousRevenue)

            revenueGrowth = ((currentRevenue - previousRevenue) / previousRevenue) * 100;


            const lastWeekCount = weeklyData[lastWeek].premiumUsers.size;
            const previousWeekCount = weeklyData[previousWeek].premiumUsers.size;

            const currentExpenses = weeklyData[lastWeek].totalExpenses;
            console.log('currentExpenses' + currentExpenses);
            const currentRevenueForExpenses = weeklyData[lastWeek].totalAmount;
            console.log('currentRevenueForExpenses' + currentRevenueForExpenses);
            expensesRatio = (383228 / currentRevenueForExpenses) * 100;
            console.log('expensesRatio' + expensesRatio);

            console.log('lastWeekCount' + lastWeekCount);
            console.log('previousWeekCount' + previousWeekCount);
            growth = ((lastWeekCount - previousWeekCount) / previousWeekCount) * 100;
          }

          setTransactions(transactions);
          const total = transactions.reduce((acc, transaction) => acc + transaction.payment_ammount, 0);
          setTotalAmount(total);
          setPremiumUserGrowth(growth);
          console.log('transaction length' + transactions.length)
          setPercentagePremiumGrowth((growth / transactions.length) * 100);
          setRevenueGrowth(revenueGrowth);
          setExpensesRatio(expensesRatio);
        } else {
          setError('Failed to fetch data');
        }
      } catch (err) {
        setError('Error fetching transactions' + err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
    fetchAnalytics();
    const intervalId = setInterval(() => {
      fetchAnalytics();
    }, 300000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  const totalInUSD = (totalAmount / exchangeRate).toFixed(2);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        {/* <AnalyticEcommerce title="Active users" count="4,42,236" percentage={59.3} extra="35,000" /> */}
        <AnalyticEcommerce title="Active users" count={analyticsData.active_user} percentage={activeUserChange > 0 ? percentageActiveUsers.toFixed(2) : ""} isLoss={activeUserChange < 0} color={activeUserChange < 0 ? 'warning' : 'default'} extra="15" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        {/* <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" /> */}
        <AnalyticEcommerce title="Total Users" count={analyticsData.total_user} percentage={activeUserChange > 0 ? percentageActiveUsers.toFixed(2) : ""} isLoss={activeUserChange < 0} color={activeUserChange < 0 ? 'warning' : 'default'} extra="100" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        {/* <AnalyticEcommerce title="Premium Users" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" /> */}
        <AnalyticEcommerce title="Premium Users" count={analyticsData.premium_user} percentage={activeUserChange > 0 ? percentageActiveUsers.toFixed(2) : ""} isLoss={activeUserChange < 0} color={activeUserChange < 0 ? 'warning' : 'default'} extra="25" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        {/* <AnalyticEcommerce title="Percentage Premium User" count="35,078%" percentage={27.4} isLoss color="warning" extra="$20,395" /> */}
        <AnalyticEcommerce title="Premium Usr%" count={`${Math.round(analyticsData.percentage_premium_user)}%`} percentage={activeUserChange > 0 ? percentageActiveUsers.toFixed(2) : ""} isLoss={activeUserChange < 0} color={activeUserChange < 0 ? 'warning' : 'default'} extra="30%" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        {/* <AnalyticEcommerce title="Percentage User Rate" count="18,800%" percentage={27.4} isLoss color="warning" extra="1,943" /> */}
        <AnalyticEcommerce title="User %" count={`${Math.round(analyticsData.percentage_user_rate)}%`} percentage={activeUserChange > 0 ? percentageActiveUsers.toFixed(2) : ""} isLoss={activeUserChange < 0} color={activeUserChange < 0 ? 'warning' : 'default'} extra="72%" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        {/* <AnalyticEcommerce title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" /> */}
        <AnalyticEcommerce title="Total Sales" count={<span style={{ color: 'green', fontWeight: 500 }}>{`$${totalInUSD}`}</span>} extra="$25" />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* them hang */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h4">Account Management Overview</Typography>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Accounts Summary</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MainCard sx={{ mt: 2, width: '92%' }} content={false}>
            <Box sx={{ maxHeight: '400px', overflow: 'auto', width: '100%' }}>
              {/* Custom scrollbar styles */}
              <style>
                {`
            .scrollable-container::-webkit-scrollbar {
              width: 10px;
            }
            .scrollable-container::-webkit-scrollbar-track {
              background-color: # ;
              border-radius: 5px;
            }
            .scrollable-container::-webkit-scrollbar-thumb {
              background-color: rgba(100, 100, 100, 0.3);
              border-radius: 5px;
              transition: background-color 0.3s ease;
            }
            .scrollable-container::-webkit-scrollbar-thumb:hover {
              background-color: rgba(100, 100, 100, 0.6);
            }
          `}
              </style>
              <Box className="scrollable-container">
                <OrdersTable />
              </Box>
            </Box>
          </MainCard>
        </Grid>
      </Grid>



      {/* them hang */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h4">Revenue and Profit Overview</Typography>
      </Grid>

      {/* row 2 */}
      {/* <Grid item xs={12} md={4} lg={4}>
        <UniqueVisitorCard />
      </Grid> */}

      {/* them hang */}
      {/* <Grid item xs={12} md={4} lg={4}>
        <SaleReportCard />
      </Grid> */}

      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Transaction History</Typography>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ maxHeight: '600px', overflow: 'auto', width: '100%' }}>
            <style>
              {`
        .scrollable-list::-webkit-scrollbar {
          width: 8px;
        }
        .scrollable-list::-webkit-scrollbar-track {
          background-color: #f1f1f1;
          border-radius: 5px;
        }
        .scrollable-list::-webkit-scrollbar-thumb {
          background-color: rgba(100, 100, 100, 0.3);
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        .scrollable-list::-webkit-scrollbar-thumb:hover {
          background-color: rgba(100, 100, 100, 0.6);
        }
      `}
            </style>
            <List
              className="scrollable-list"
              component="nav"
              sx={{
                px: 0,
                py: 0,
                '& .MuiListItemButton-root': {
                  py: 1.5,
                  '& .MuiAvatar-root': { /* avatar style here */ },
                  '& .MuiListItemSecondaryAction-root': { /* action style here */ },
                },
              }}
            >
              {transactions.map((transaction) => (
                <ListItemButton divider key={transaction._id}>
                  {/* Avatar and Username layout */}
                  <ListItemAvatar>
                    <Avatar sx={{ color: 'success.main', bgcolor: 'success.lighter', width: 40, height: 40 }}>
                      <GiftOutlined />
                    </Avatar>
                  </ListItemAvatar>

                  <Stack direction="column" sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    {/* Username with larger font and bold */}
                    <Typography variant="body2" sx={{ fontSize: '1.6rem', fontWeight: 'bold' }}>
                      {transaction.username}
                    </Typography>

                    {/* Payment code */}
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" sx={{ fontSize: '1.1rem', color: 'blue', fontWeight: 'bold' }}>
                          {`#${transaction.payment_code}`}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2">
                          {getFormattedDate(transaction.payment_date)}
                        </Typography>
                      }
                    />
                  </Stack>

                  {/* Transaction amount and USD value */}
                  <ListItemSecondaryAction>
                    <Stack alignItems="flex-end">
                      <Typography variant="subtitle1" noWrap>
                        + {transaction.payment_ammount} VND
                      </Typography>
                      <Typography variant="h6" noWrap sx={{ color: 'green', fontWeight: 'bold' }}>
                        {`$${(transaction.payment_ammount / exchangeRate).toFixed(2)} USD`}
                      </Typography>
                    </Stack>
                  </ListItemSecondaryAction>
                </ListItemButton>
              ))}
            </List>
          </Box>
        </MainCard>


        <MainCard sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Help & Support Chat in Facebook
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Typical reply within 5 min
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button
              size="small"
              variant="contained"
              sx={{ textTransform: 'capitalize' }}
              onClick={() => window.location.href = "https://www.facebook.com/profile.php?id=61566188733735"}
            >
              Need Help, Go to Facebook Channel?
            </Button>
          </Stack>
        </MainCard>
      </Grid>

      {/* them hang */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h4">Growth Comparison Overview</Typography>
      </Grid>


      <Grid item xs={12} md={6} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            {/* <Typography variant="h5">Analytics Report</Typography> */}
            <Typography variant="h5">Premium U Growth Comparison</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Premium User Growth" />
              {/* <Typography variant="h5">+45.14%</Typography> */}
              <Typography variant="h5">+{premiumUserGrowth.toFixed(2)}%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Percentage Premium Growth" />
              {/* <Typography variant="h5">0.58%</Typography> */}
              <Typography variant="h5">{(percentagePremiumGrowth > 0 ? percentagePremiumGrowth.toFixed(2) : 0)}%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              {/* <Typography variant="h5">Low</Typography> */}
              <Typography variant="h5">{(premiumUserGrowth > 0 ? 'Low' : 'High')}</Typography>
            </ListItemButton>
          </List>
          {/* <ReportAreaChart2 /> */}
        </MainCard>
      </Grid>

      {/* them hang */}
      {/* <Grid item xs={12} md={4} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            {/* <Typography variant="h5">Analytics Report</Typography>
            <Typography variant="h5">Total Users Growth Comparison</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Total User Growth" />
              {/* <Typography variant="h5">+45.14%</Typography>
              <Typography variant="h5">+0.00%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Percentage User Growth" />
              {/* <Typography variant="h5">0.58%</Typography>
              <Typography variant="h5">0.00%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              {/* <Typography variant="h5">Low</Typography>
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          {/* <ReportAreaChart3 />
        </MainCard>
      </Grid> */}

      {/* them hang */}
      <Grid item xs={12} md={6} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            {/* <Typography variant="h5">Analytics Report</Typography> */}
            <Typography variant="h5">Revenue Growth Comparison</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Team Finance Growth" />
              {/* <Typography variant="h5">+45.14%</Typography> */}
              <Typography variant="h5">+{revenueGrowth.toFixed(2)}%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Team Expenses Ratio" />
              {/* <Typography variant="h5">0.58%</Typography> */}
              <Typography variant="h5">{expensesRatio.toFixed(2)}%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              {/* <Typography variant="h5">Low</Typography> */}
              <Typography variant="h5">{(revenueGrowth > 0 ? 'Low' : 'High')}</Typography>
            </ListItemButton>
          </List>
          {/* <ReportAreaChart /> */}
        </MainCard>
      </Grid>

      <Grid item md={12} sx={{ display: { sm: 'block', md: 'block', lg: 'block' } }} />
      <Grid item md={12} sx={{ display: { sm: 'block', md: 'block', lg: 'block' } }} />


      {/* <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.secondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid> */}

      {/* <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid> */}

      {/* row 4 */}
      {/* <Grid item xs={12} md={7} lg={8}>
        <SaleReportCard />
      </Grid> */}
    </Grid >

  );
}
