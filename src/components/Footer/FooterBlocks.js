import React from 'react'
import {Box} from "@mui/material";
function FooterBlocks({title,arr, classes}) {
  return (<div>
      
      <Box>
            <Box><div>{title}</div></Box>
            <br/>
            {
                  arr.map((ele,i) => {
                        return(<Box key={i}><div  className={classes.hover} >{ele}</div></Box>)   
                  })
            }
            
      </Box>
  </div>
    
  )
}

export default FooterBlocks;