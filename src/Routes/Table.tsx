import React, { useEffect, useState } from 'react';
import { getUsers } from '../Services/UserTable';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { User } from '../Types/User';
import InputFilter from '../Components/Atoms/InputFilter';
import { FlexDiv } from '../Styles/Global.styled';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import IconHolder from '../Components/Atoms/IconHolder';
import { IconTableCell, StyledMenu } from '../Global.styled';
import UserEdit from '../Components/Organisms/UserEdit';

function UserTable() {
  const [userData, setUserData] = useState<User[]>([]);
  const [filterText, setFilterText] = useState<string>('');
  const [userId, setUserId] = useState<number>(0);
  const [user, setUser] = useState<User>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const [userEditOpen, setUserEditOpen] = React.useState(false);

  useEffect(() => {
    getUsers(100)
      .then((response) => {
        const usersWithCharge = response.data.results.map((user: User, index: number) => ({
          ...user,
          charge: `Charge ${getRandomChargeValue()}`,
          id: index,
        }));
        setUserData(usersWithCharge);
        console.log('usersWithCharge: ', usersWithCharge);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  function getRandomChargeValue() {
    return Math.floor(Math.random() * 4) + 1;
  }

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>, id: any) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const userEdit = (id: number) => {
    closeMenu();
    const selectedUser = userData.find((user) => user.id === id);

    if (selectedUser) {
      setUserId(id);
      setUser(selectedUser);
      setUserEditOpen(true);
    }
    console.log('selectedUser: ', selectedUser);
  };

  const filteredData = userData.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`;
    return fullName.toLowerCase().includes(filterText.toLowerCase());
  });

  const columns = [
    {
      renderCell: (params: GridCellParams) => (
        <IconTableCell>
          <IconHolder>
            <Button
              id="basic-button"
              aria-controls={menuOpen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? 'true' : undefined}
              onClick={(event) => openMenu(event, params.row.id)}
            >
              <SettingsIcon />
            </Button>
          </IconHolder>
          <div>{params.row.firstName}</div>
        </IconTableCell>
      ),
      field: 'firstName',
      headerName: 'First Name',
      flex: 1,
    },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'charge', headerName: 'Charge', flex: 1 },
  ];

  const rows = filteredData.map((user, index) => ({
    id: index,
    firstName: user.name.first,
    lastName: user.name.last,
    email: user.email,
    charge: user.charge,
  }));

  return (
    <div>
      <UserEdit open={userEditOpen} onClose={() => setUserEditOpen(false)} user={user ?? undefined} />
      <FlexDiv>
        <h1>User Table</h1>
        <InputFilter filterText={filterText} onFilterTextChange={setFilterText} />
      </FlexDiv>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
      <StyledMenu anchorEl={anchorEl} open={menuOpen} onClose={closeMenu}>
        <MenuItem onClick={(e) => userEdit(userId)}>Edit</MenuItem>
      </StyledMenu>
    </div>
  );
}

export default UserTable;
