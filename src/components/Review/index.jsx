import { ICONS_WHITE } from '../../helpers/parth'

import './styles.scss'

const Review = ({ content }) => {
  const { porcents, reviews } = content || { porcents: 0, reviews: 0 }

  return (
    <div className='review'>
      <img
        className='icon'
        src={`${ICONS_WHITE}/stars-empty.svg`}
        alt='review'
      />
      <div className='mask' style={{ width: `${porcents}%` }}>
        &nbsp;
      </div>
      <p className='count'>{`(${reviews})`}</p>
    </div>
  )
}

export default Review
