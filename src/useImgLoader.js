import { useReducer, useEffect } from 'react'

const initialState = {
  files: [],
  uploading: false,
  uploaded: [],
  next: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'load':
      return { ...state, files: action.files }
    default:
      return state
  }
}

const useImgLoader = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = (e) => {
    if (e.target.files.length) {
      const arrFiles = Array.from(e.target.files)
      const files = arrFiles.map((file) => {
        const src = window.URL.createObjectURL(file)
        return {
          name: file.name,
          file,
          src,
        }
      })
      dispatch({ type: 'load', files })
    }
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  // Processes the next pending thumbnail when ready
  useEffect(() => {
    if (state.uploading && state.files.length && state.next === null) {
      //
    }
  }, [state.files.length, state.next, state.uploading])

  //
  useEffect(() => {
    //
  }, [])

  return {
    ...state,
    onChange,
  }
}

export default useImgLoader
