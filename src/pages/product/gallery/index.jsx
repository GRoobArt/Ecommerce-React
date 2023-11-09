import { useState } from 'react'

import { PRODUCTS } from '../../../helpers/parth'

const Gallery = ({ imgs, alt }) => {
  const principalImg =
    imgs.find((img) => img.tag.includes('principal'))?.img || imgs[0].img

  const [selectImg, setSelectImg] = useState(principalImg)

  const thumbnailsImgs = imgs.filter((img) => img.img !== selectImg)

  return (
    <article className='gallery'>
      <div className='fotograma-select'>
        <img
          className='product-img select'
          src={`${PRODUCTS}/1/${selectImg}`}
          alt={alt}
        />
      </div>
      <div className='fotograma-thumbnails'>
        {thumbnailsImgs.map(({ id, img }) => (
          <img
            key={id}
            src={`${PRODUCTS}/1/${img}`}
            alt={`${alt}-${id}`}
            className='product-img thumbnail'
            onClick={() => setSelectImg(img)}
          />
        ))}
      </div>
    </article>
  )
}

export default Gallery
