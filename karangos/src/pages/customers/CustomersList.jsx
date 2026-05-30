import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const customersPromise = fetch('https://api.faustocintra.com.br/v2/customers')
  .then(res => res.json())

export default function CustomersList() {

  const customers = React.use(customersPromise)

  const columns = [
    {
      field: 'id',
      headerName: 'Cód.',
      width: 90
    },
    {
      field: 'name',
      headerName: 'Nome',
      width: 250
    },
    {
      field: 'birth_date',
      headerName: 'Data nasc.',
      width: 150,
      valueFormatter: value => {
        if (value) {
          const date = new Date(value)
          return date.toLocaleDateString('pt-BR')
        }
        else return ''
      }
    },
    {
      field: 'municipality',
      headerName: 'Município/UF',
      width: 250,
      valueGetter: (value, row) => row.municipality + '/' + row.state
    },
    {
      field: 'phone',
      headerName: 'Celular',
      width: 150
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 250
    }
  ];

  return <>
    <Typography variant="h1" gutterBottom>
      Listagem de clientes
    </Typography>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={customers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  </>
}