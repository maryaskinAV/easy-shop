import Link from 'next/link'
import { list } from 'postcss'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

const Sidebar = ({ props, menu }) => {

  const [showedSubMenu, setShowedSubMenu] = useState()
  const showSubMenu = () => {
  }

  return (
    <aside className="admin-sidebar">
      <Link href={'/admin'}>
        <a className={'admin-sidebar__brand'}>SHOP</a>
      </Link>
      <nav className="admin-nav">
        <ul className="admin-links">
          {menu.map((menuItem) => {

            if (menuItem.submenu) {
              const subMenuElems = ({ props, subMenu, parent }) => (
                <ul>
                  {subMenu.map((subElem) => {
                    <Link href={subMenu.path}>{subMenu.title}</Link>
                  })}
                </ul>
              )

              return <li>
                <a className={'admin-link-down'} onClick={showSubMenu} data-key={menuItem.title.lowercase}>
                  {menuItem.title}
                  <ChevronDownIcon className="icon"/>
                </a>
              </li>
            }

            return <Link href={menuItem.path}>
              <a className={'admin-link'}>{menuItem.title}</a>
            </Link>

          })}

        </ul>
      </nav>
    </aside>
  )
}
export default Sidebar
