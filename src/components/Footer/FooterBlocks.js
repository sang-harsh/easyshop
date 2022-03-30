import React from 'react'
import {Typography,Box} from "@mui/material";
function FooterBlocks({title,arr, classes}) {
  return (<div>
      
      <Box>
            <Box><Typography variant="h5" >{title}</Typography></Box>
            <br/>
            {
                  arr.map((ele,i) => {
                        return(<Box key={i}><Typography variant="subtitle1"  className={classes.hover} >{ele}</Typography></Box>)   
                  })
            }
            
      </Box>
  </div>
    
  )
}

export default FooterBlocks;