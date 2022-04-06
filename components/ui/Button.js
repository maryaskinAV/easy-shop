export const Button = ({ props, children, onClick, clsColor }) => {

  return (
    <button className={`btn btn-default ${clsColor ? 'btn-' + clsColor : ''}`}>
      {children}
    </button>
  )
}
