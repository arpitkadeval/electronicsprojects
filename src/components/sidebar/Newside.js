// import React, { useEffect, useRef, useState } from 'react'

// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'

// import ThemeAction from '../../redux/actions/ThemeAction'
// import sidebar_items from '../../assets/JsonData/sidebar_routes.json'


// const clickOutsideRef = (content_ref, toggle_ref) => {
//     document.addEventListener('mousedown', (e) => {
//         // user click toggle
//         if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
//             content_ref.current.classList.toggle('active')
//         } else {
//             // user click outside toggle and content
//             if (content_ref.current && !content_ref.current.contains(e.target)) {
//                 content_ref.current.classList.remove('active')
//             }
//         }
//     })
// }

// export const Newside = (props) => {
//     const menu_ref = useRef(null)
//     const menu_toggle_ref = useRef(null)

//     clickOutsideRef(menu_ref, menu_toggle_ref)

//     const setActiveMenu = () => menu_ref.current.classList.add('active')

//     const closeMenu = () => menu_ref.current.classList.remove('active')
//     const active = props.active ? 'active' : ''
//   return (
//     <div>
//     <button ref={menu_toggle_ref} className="dropdown__toggle" onClick={() => setActiveMenu()}>
//         <i className='bx bx-palette'></i>
//     </button>
//     <div ref={menu_ref} className="theme-menu">
//         <h4>Theme settings</h4>
//         <button className="theme-menu__close" onClick={() => closeMenu()}>
//             <i className='bx bx-x'></i>
//         </button>
//         <div className="theme-menu__select">
//             <ul className="mode-list">
//             <div className="sidebar__item">
//             <div className={`sidebar__item-inner ${active}`}>
//                 <i className={props.icon}></i>
//                 <span>
//                     {props.title}
//                 </span>
//             </div>
//         </div>
//             </ul>
//         </div>
//     </div>
// </div>
//   )
// }
