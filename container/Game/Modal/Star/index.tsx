import React, {FC} from 'react'
import Image from 'next/image'
import starImage from './star-image.png'
import {StarWrapper} from './style'

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
      <Image alt='' src={starImage} width={162} height={156} />
    </StarWrapper>
    
  )
}

export default Star