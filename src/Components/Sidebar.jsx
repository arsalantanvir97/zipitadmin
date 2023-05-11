import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <><div className="main-menu menu-fixed menu-light menu-accordion" data-scroll-to-active="true">
      <div className="main-menu-content ps-container ps-theme-dark" data-ps-id="abae0e0e-013f-d91b-5cb7-23f167158887">
        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
          <li className={
                props?.match?.path == "/dashboard"
                  ? "nav-item active "
                  : "nav-item"
              }>
            <Link to='/dashboard'><i className="fas fa-th-large" /><span className="menu-title" data-i18n>Dashboard</span></Link>
          </li>
          <li className={
                props?.match?.path == "/UserManagement"
                  ? "nav-item active "
                  : "nav-item"
              }>
            <Link to='/UserManagement'><i className="fas fa-user" /><span className="menu-title" data-i18n>Users Management</span></Link>
          </li>
          <li className={
                props?.match?.path == "/SubscriptionManagment"
                  ? "nav-item active "
                  : "nav-item"
              }>
            <Link to='/SubscriptionManagment'><i className="fas fa-dollar-sign" /><span className="menu-title" data-i18n>Subscriptions Management</span></Link>
          </li>
          <li className={
                props?.match?.path == "/SubscriptionLogs"
                  ? "nav-item active "
                  : "nav-item"
              }>
            <Link to='/SubscriptionLogs'><i className="fas fa-coins" /><span className="menu-title" data-i18n>Subscription Log</span></Link>
          </li>
        </ul>
        <div className="ps-scrollbar-x-rail" style={{ left: '0px', bottom: '3px' }}><div className="ps-scrollbar-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps-scrollbar-y-rail" style={{ top: '0px', right: '3px' }}><div className="ps-scrollbar-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
    </div>
    </>
  )
}

export default Sidebar