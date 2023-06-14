import './ProgressBar.css'

import { LinearProgress } from '@mui/material'

const ProgressBar = ({charLeft}) => (
  <div>
    <LinearProgress className='char__progress' variant='determinate' value={charLeft} />
  </div>
)

export default ProgressBar