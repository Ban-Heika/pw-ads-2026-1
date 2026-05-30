import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

//buscando os dados
const carsPromise = fetch('https://api.faustocintra.com.br/v2/cars')
  .then(res => res.json())

export default function CarsList() {
  //consumindo os dados
  const cars = React.use(carsPromise)

  const columns = [
    { 
      field: 'brand_model',
      headerName: 'Marca e Modelo', 
      width: 250,
      //renderCell para juntar a marca e o modelo
      renderCell: (params) => `${params.row.brand} ${params.row.model}` 
    },
    { field: 'color', headerName: 'Cor', width: 120 },
    { field: 'year_manufacture', headerName: 'Ano', width: 100 },
    { 
      field: 'imported', 
      headerName: 'Importado', 
      width: 120,
      //renderCell mostrando SIM ou string vazia
      renderCell: (params) => params.row.imported === 1 ? 'SIM' : ''
    },
    { field: 'plates', headerName: 'Placas', width: 120 },
    { 
      field: 'selling_price', 
      headerName: 'Preço de Venda', 
      width: 160,
      //valueFormatter para formatar como moeda tratando o caso de ser vazio
      valueFormatter: value => {
        if (value) {
          return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        } else return ''
      }
    },
    { 
      field: 'selling_date', 
      headerName: 'Data de Venda', 
      width: 150,
      //valueFormatter para formatar a data, igual ao birth_date 
      valueFormatter: value => {
        if (value) {
          const date = new Date(value)
          return date.toLocaleDateString('pt-BR')
        } else return ''
      }
    }
  ];

  return <>
    <Typography variant="h1" gutterBottom>
      Listagem de veículos
    </Typography>

    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={cars} 
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