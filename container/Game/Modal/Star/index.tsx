import React, {FC} from 'react'
import starImage from './star-image.png'
import {StarWrapper, DesktopImage, MobileImage} from './style'

interface Props {
  size: 'big' | 'small';
  position: {
    top: number | string;
    left: number | string;
  }
}

const Star: FC<Props> = (props) => {
  const {size, position} = props;
  return (
    <StarWrapper
      size={size}
      style={{
        top: position.top,
        left: position.left
      }}
    >
      <DesktopImage alt='' src={starImage} width={162} height={156} />
      <MobileImage alt='' src={starImage} width={81} height={78} />
    </StarWrapper>
    
  )
}

export default Star