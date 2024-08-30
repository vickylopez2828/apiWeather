import style from './Error.module.css'

const Error = ({children}: {children: React.ReactNode}) => {
  return (
    <p className={style.error}>
      {children}
    </p>
  )
}

export default Error
