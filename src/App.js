import React from 'react'
import useImgLoader from './useImgLoader'
import './App.css'

const Input = (props) => (
  <input
    type='file'
    accept='image/*'
    name='img-loader-input'
    multiple
    {...props}
  />
)

const App = () => {
  const { files, onChange } = useImgLoader()

  return (
    <div className='container'>
      <Input onChange={onChange} />
      <div>
        {files.map(({ name, src }, index) => (
          <div key={`thumb${index}`} className='thumbnail-wrapper'>
            <img className='thumbnail' src={src} alt='' />
            <div className='thumbnail-caption'>{name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
