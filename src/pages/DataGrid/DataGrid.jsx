import React, { useMemo } from 'react'
import MaterialReactTable from "material-react-table";
import './DataGrid.css'
import {userData} from "../../data"
import { createTheme, ThemeProvider} from '@mui/material/styles';

const DataGrid = () => {
    /** syntax useMemo(()=> {code},[]) otherwise loop will be infinite */

    const columns = useMemo(()=> [
        {
            accessorKey: "name.firstName",
            header: 'First Name',

        },
        {
            accessorKey: "address",
            header: "Address",

        },
        {
            accessorKey: "city",
            header: "City",

        },
        {
            accessorKey: "state",
            header: "State",

        },
    ])
    /** useMemo is used to memorise the code to stop rendering 1 task again and again */
    const theme = useMemo (
     () => createTheme({
      palette:{
        mode:"dark"
      }

     })
    )
  return (
    /** i am using matrial react table */
    <div className="table-container">
      <ThemeProvider theme={theme}>
        <MaterialReactTable columns={columns} data= {userData}/>
        </ThemeProvider>

    </div>
  )
}

export default DataGrid