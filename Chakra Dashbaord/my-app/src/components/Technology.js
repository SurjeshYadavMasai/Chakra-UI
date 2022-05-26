import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'

export default function Technology() {
  return (
    <div>
        <div style={{margin:"auto",paddingLeft:"0%",fontWeight:"900",width:"800px", marginBottom:"20px"}}>
        <h1 style={{fontSize:"40px"}}>  Technology Jobs </h1>

        <SimpleGrid columns={1} spacing={10}>
  <Box border='2px solid #7f59d3' className='box' padding='25px'  boxShadow='dark-lg'  variant='outline' height='80px'>LEAD GAME DEVELOPER</Box>
  <Box border='2px solid #7f59d3' className='box' padding='25px'   boxShadow='dark-lg'  variant='outline' height='80px'>Full-Stack JavaScript Developer (Node.js / React.js / Express.js)</Box>
  <Box border='2px solid #7f59d3' className='box' padding='25px'  boxShadow='dark-lg'  variant='outline' height='80px'>LEAD PRODUCER</Box>
  <Box border='2px solid #7f59d3' className='box' padding='25px'  boxShadow='dark-lg'  variant='outline' height='80px'>DIRECTOR OF MARKETING</Box>
  <Box border='2px solid #7f59d3' className='box' padding='25px' boxShadow='dark-lg'  variant='outline' height='80px'>ACCOUNT AXECUTIVE</Box>
  <Box border='2px solid #7f59d3' className='box' padding='25px'  boxShadow='dark-lg'  variant='outline' height='80px'>FULL STACK JAVASCRIPT DEVELOPER</Box>
  <Box border='2px solid #7f59d3' className='box' padding='25px' boxShadow='dark-lg'  variant='outline' height='80px'>HEAD OF ENGINEERING</Box>
  
 
</SimpleGrid>
        </div>

    </div>
  )
}
