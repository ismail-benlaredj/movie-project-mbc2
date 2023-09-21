import { useEffect, useRef, useState } from "react"

const useOutside = () => {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }
  return [open, setOpen, wrapperRef]
}

export default useOutside
