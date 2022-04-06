import Sidebar from '../components/Sidebar'

const AdminLayout = ({ children }) => {

  const changeTheme = () => {
    const htmlClass = document.querySelector('html')
    if (htmlClass.getAttribute('class') === 'dark') {
      htmlClass.setAttribute('class', '')
    } else {
      htmlClass.setAttribute('class', 'dark')
    }
  }

  const menuItems = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    {
      path: '/admin/users', title: 'Users',
      submenu: [
      //   {
      //     path: '/admin/users/administrators',
      //     title: 'Administrators'
      //   },
      ]
    },
  ]

  return <div className="admin-layout">
    <Sidebar menu={menuItems}/>
    <div className="admin-content">
      <header className="admin-header">Admin header</header>
      <main className="admin-container">
        {children}
      </main>
      <footer className="admin-footer">
        Admin footer
      </footer>
    </div>
    <button className="switch-dark" onClick={changeTheme}>
      CH
    </button>
  </div>
}

export default AdminLayout
