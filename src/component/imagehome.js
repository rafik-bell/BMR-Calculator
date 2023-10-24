import React from 'react'
import style from './imagehome.module.css'
import { Box ,Avatar} from '@mui/material'
import Img from "../image/homeimg.png"
import Img1 from "../image/repas.png"
import Img2 from "../image/way.png"


export default function Imagehome() {
  return (
    <div style={{maxWidth:"80%"}}>
      <Box  className={style.contuner}>
      <Avatar
      className={style.avatar1}
  alt="Remy Sharp"
  src={Img1}
  sx={{ width: 300, height: 300 }}
/><Avatar
className={style.avatar2}
  alt="Remy Sharp"
  src={Img}
  sx={{ width: 450, height: 450 }}
/><Avatar
className={style.avatar3}
  alt="Remy Sharp"
  src={Img2}
  sx={{ width: 300, height: 300 }}
/>

      </Box>
    </div>
  )
}
