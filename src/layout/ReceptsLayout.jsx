import { Outlet } from 'react-router-dom'

function ReceptsLayout() {
  return (
    <div>
        <h1>Recept List</h1>
        <hr />
        <Outlet/>
    </div>
  )
}

export default ReceptsLayout