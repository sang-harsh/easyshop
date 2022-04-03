import React from 'react'
import {Box} from "@mui/material";
import {useAuth} from '../AuthContext';

function FooterBlocks({title,arr, classes}) {
      const {notification} = useAuth();
  return (<div>
      
      <Box>
            <Box><div>{title}</div></Box>
            <br/>
            {arr.map((ele,i) => {
                  return(
                  <Box key={i}>
                        <div  className={classes.hover} 
                        onClick={() => notification("Devloper Notification!", "Feature not yet added", "danger")}>{ele}
                        </div>
                  </Box>)   
                  })
            }
            
      </Box>
  </div>
    
  )
}

export default FooterBlocks;