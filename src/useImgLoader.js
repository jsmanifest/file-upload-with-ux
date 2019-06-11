import { useReducer, useEffect, useCallback } from 'react'

const api = {
  upload(file) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 550)
    })
  },
}

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
    case 'submit':
      return { ...state }
    default:
      return state
  }
}

const useImgLoader = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    if (state.files.length) {
      dispatch({ type: 'submit' })
    } else {
      window.alert("You don't have any files loaded.")
    }
  }, [])

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
    onSubmit,
    onChange,
  }
}

export default useImgLoader
