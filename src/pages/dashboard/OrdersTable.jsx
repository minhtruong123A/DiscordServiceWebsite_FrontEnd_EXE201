import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { NumericFormat } from 'react-number-format';

// project import
import Dot from '../../components/@extended/Dot';

function createData(tracking_no, name, fat, carbs, protein) {
  return { tracking_no, name, fat, carbs, protein };
}

const rows = [
  createData(84564564, 'Camera Lens', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(98652366, 'Handset', 50, 1, 10239),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),
  createData(86739658, 'TV', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Chair', 100, 0, 14001)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'tracking_no',
    align: 'left',
    disablePadding: false,
    label: 'Tracking No.'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Username'
  },
  {
    id: 'fat',
    align: 'right',
    disablePadding: false,
    label: 'Create Date'
  },
  {
    id: 'carbs',
    align: 'left',
    disablePadding: false,

    label: 'Role'
  },
  {
    id: 'protein',
    align: 'right',
    disablePadding: false,
    label: 'Discord User Id'
  }
  ,
  {
    id: 'protein1',
    align: 'right',
    disablePadding: false,
    label: 'Status'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function OrderStatus({ status }) {
  let color;
  let title;

  switch (status) {
    case 3:
      color = 'warning';
      title = 'Pending';
      break;
    case 2:
      color = 'success';
      title = 'Admin';
      break;
    case 0:
      color = 'error';
      title = 'Banned';
      break;
    default:
      color = 'primary';
      title = 'User';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
}

function OrderStatus2({ status }) {
  let color;
  let title;

  switch (status) {
    case true:
      color = 'success';
      title = 'Active';
      break;
    case false:
      color = 'error';
      title = 'Banned';
      break;
    default:
      color = 'primary';
      title = 'Inative';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="right">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
}



// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const order = 'asc';
  const orderBy = 'tracking_no';

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const response = await axios.get('https://exe202backend-ppn5.onrender.com/api/admin/user', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response);
        if (response.data.success) {
          setUsers(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
    const intervalId = setInterval(() => {
      fetchUsers();
    }, 300000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    // <Box>
    //   <TableContainer
    //     sx={{
    //       width: '100%',
    //       overflowX: 'auto',
    //       position: 'relative',
    //       display: 'block',
    //       maxWidth: '100%',
    //       '& td, & th': { whiteSpace: 'nowrap' }
    //     }}
    //   >
    //     <   aria-labelledby="tableTitle">
    //       <OrderTableHead order={order} orderBy={orderBy} />
    //       <TableBody>
    //         {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
    //           const labelId = `enhanced-table-checkbox-${index}`;

    //           return (
    //             <TableRow
    //               hover
    //               role="checkbox"
    //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //               tabIndex={-1}
    //               key={row.tracking_no}
    //             >
    //               <TableCell component="th" id={labelId} scope="row">
    //                 <Link color="secondary"> {row.tracking_no}</Link>
    //               </TableCell>
    //               <TableCell>{row.name}</TableCell>
    //               <TableCell align="right">{row.fat}</TableCell>
    //               <TableCell>
    //                 <OrderStatus status={row.carbs} />
    //               </TableCell>
    //               <TableCell align="right">
    //                 <NumericFormat value={row.protein} displayType="text" thousandSeparator prefix="$" />
    //               </TableCell>
    //             </TableRow>
    //           );
    //         })}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Box>

    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table aria-labelledby="tableTitle">
          {/* Giả sử bạn có phần TableHead riêng như OrderTableHead */}
          {/* <OrderTableHead order={order} orderBy={orderBy} /> */}
          <OrderTableHead order={order} orderBy={orderBy} />

          <TableBody>
            {/* Nếu bạn muốn sắp xếp hàng theo thứ tự nào đó */}
            {users.length > 0 && users
              .sort(getComparator(order, orderBy))
              .map((user, index) => (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={user.username} // Sử dụng username làm key
                >
                  {/* Số thứ tự */}
                  <TableCell component="th" scope="row">
                    <Link color="secondary"> {index + 1} </Link>
                  </TableCell>

                  {/* Tên người dùng */}
                  <TableCell>{user.username}</TableCell>

                  {/* Ngày tạo */}
                  <TableCell align="right">
                    {new Date(user.create_date).toLocaleString()}
                  </TableCell>

                  {/* Vai trò (Role) */}
                  <TableCell>
                    <OrderStatus status={user.role} />
                  </TableCell>

                  {/* Discord User ID */}
                  <TableCell align="right">
                    {user.discord_user_id || 'N/A'}
                  </TableCell>

                  <TableCell align="right">
                    <OrderStatus2 status={user.status} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

OrderTableHead.propTypes = { order: PropTypes.any, orderBy: PropTypes.string };

OrderStatus.propTypes = { status: PropTypes.number };

OrderStatus2.propTypes = { status: PropTypes.number };
