import React from 'react'

const Sidebar = () => {
  return (
    <><div className="main-menu menu-fixed menu-light menu-accordion" data-scroll-to-active="true">
    <div className="main-menu-content ps-container ps-theme-dark" data-ps-id="abae0e0e-013f-d91b-5cb7-23f167158887">
      <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
        <li className="nav-item ">
          <a href="dashboard.php"><i className="fas fa-th-large" /><span className="menu-title" data-i18n>Dashboard</span></a>
        </li>
        <li className="nav-item ">
          <a href="users-management.php"><i className="fas fa-user" /><span className="menu-title" data-i18n>Users Management</span></a>
        </li>
        <li className="nav-item ">
          <a href="subscription-management.php"><i className="fas fa-dollar-sign" /><span className="menu-title" data-i18n>Subscriptions Management</span></a>
        </li>
        <li className="nav-item active">
          <a href="subscription-log.php"><i className="fas fa-coins" /><span className="menu-title" data-i18n>Subscription Log</span></a>
        </li>
      </ul>
      <div className="ps-scrollbar-x-rail" style={{left: '0px', bottom: '3px'}}><div className="ps-scrollbar-x" tabIndex={0} style={{left: '0px', width: '0px'}} /></div><div className="ps-scrollbar-y-rail" style={{top: '0px', right: '3px'}}><div className="ps-scrollbar-y" tabIndex={0} style={{top: '0px', height: '0px'}} /></div></div>
  </div>
  </>
  )
}

export default Sidebar