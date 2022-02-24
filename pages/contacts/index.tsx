import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getContacts } from 'axios/contacts';
import Image from 'next/image';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'username', headerName: 'UserName', width: 150 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    type: 'img',
    width: 90,
  },
  {
    field: 'isFollowing',
    headerName: 'isFollowing',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Contacts = (props) => {
  const { users } = props;
  return (
    <div className="max-w-6xl px-5 mx-auto flex items-center h-full">
      <div className="max-h-[600px] h-full w-full">
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Contacts;

export async function getServerSideProps(context) {
  const contactResults = await getContacts();

  const users = contactResults?.data?.users;
  return {
    props: {
      users,
    }, // will be passed to the page component as props
  };
}
