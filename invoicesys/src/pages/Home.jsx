import React, { useState } from 'react'
import Header from '../components/Header'
import {Box} from '@mui/material'
import { Typography,Button } from '@mui/material'
import AddInvoice from '../components/AddInvoice'

function Home() {
    const [addInvoice,setAddInvoice]=useState(false);
    const toggleInvoice=()=>{
        setAddInvoice(true);
    }
  return (
    <>
        <Header/>
        <Box style={{margin:20}}>
            <Typography variant='h4'>Pending Invoices</Typography>
           { !addInvoice && <Button 
            variant='contained' 
            style={{marginTop:15}}
            onClick={()=>toggleInvoice()}
            >Add Invoice</Button>}
            {addInvoice && <AddInvoice/>}
        </Box>
      
    </>
  )
}

export default Home
