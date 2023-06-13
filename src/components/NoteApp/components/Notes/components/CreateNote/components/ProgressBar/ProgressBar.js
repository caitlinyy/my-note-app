import './ProgressBar.css'

import { LinearProgress } from '@mui/material'

const ProgressBar = () => (
  <div>
    <LinearProgress className='char__progress' variant='determinate' value={60} />
  </div>
)

export default ProgressBar