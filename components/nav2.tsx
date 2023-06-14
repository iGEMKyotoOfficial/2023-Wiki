import React from 'react'
import 'styles/nav2.module.css'
import 'bootstrap-icons/font/bootstrap-icons.json'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  document.addEventListener('click', e => {
    if(!(e.target instanceof HTMLInputElement)) return;
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown: Element
    if (isDropdownButton) {
      const dropdowns = e.target.closest("[data-dropdown]")
      if(dropdowns !== null) {
        currentDropdown = dropdowns
        currentDropdown.classList.toggle("active")
      }
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  });
  function responsiveMenu() {
    var x = document.getElementById("ourmenu");
    
    if (x !== null && x.className === "navbar") {
      x.className += " responsive";
    }
  };
  return (
    <div className='menu'>
      <div className='identity'>
        <p> <Link href='/ucopenhagen' style={{ textDecoration: 'none', color: 'black' }}>UCopenhagen</Link></p>
      </div>
      <div className="nav-icon"><span style={{ fontSize: '30px', margin: 'auto 0.5rem auto auto', color: 'hsla(225, 40%, 18%,1)', cursor: 'pointer' }} onClick={responsiveMenu}><i className="bi bi-list"></i></span></div>
      <nav className='navbar' id='ourmenu'>
        <ul className='navbar-items'><Link href='/ucopenhagen'><button className='dropbutton'>Home</button></Link></ul>
        <ul className='navbar-items' data-dropdown>
          <button className='dropbutton' data-dropdown-button>Team&nbsp;<i className="bi bi-caret-down-fill" data-dropdown-button style={{ fontSize: '0.8rem' }}></i></button>
          <ul className='navbar-dropdown'>
            <li className='dropdown-items'><Link href='/team'>Team</Link></li>
            <li className='dropdown-items'><Link href='/attributions'>Attributions</Link></li>
          </ul>
        </ul>
        <ul className='navbar-items' data-dropdown>
          <button className='dropbutton' data-dropdown-button>Project&nbsp;<i className="bi bi-caret-down-fill" data-dropdown-button style={{ fontSize: '0.8rem' }}></i></button>
          <ul className='navbar-dropdown'>
            <li className='dropdown-items'><Link href='/description'>Description</Link></li>
            <li className='dropdown-items'><Link href='/design'>Design</Link></li>
            <li className='dropdown-items'><Link href='/model'>Model</Link></li>
            <li className='dropdown-items'><Link href='/results'>Results</Link></li>
            <li className='dropdown-items'><Link href='/engineering'>Engineering Success</Link></li>
            <li className='dropdown-items'><Link href='/implementation'>Implementation</Link></li>
            <li className='dropdown-items'><Link href='/contribution'>Contribution</Link></li>
            <li className='dropdown-items'><Link href='/experiments'>Experiments</Link></li>
            <li className='dropdown-items'><Link href='/proof-of-concept'>Proof of concept</Link></li>
            <li className='dropdown-items'><Link href='/notebook'>Notebook</Link></li>
          </ul>
        </ul>
        <ul className='navbar-items' data-dropdown>
          <button className='dropbutton' data-dropdown-button>Parts&nbsp;<i className="bi bi-caret-down-fill" data-dropdown-button style={{ fontSize: '0.8rem' }}></i></button>
          <ul className='navbar-dropdown'>
            <li className='dropdown-items'><Link href='/parts'>Parts</Link></li>
            <li className='dropdown-items'><Link href='/part-collection'>Parts Collection</Link></li>
            <li className='dropdown-items'><Link href='/improve'>Improvement</Link></li>
          </ul>
        </ul>
        <ul className='navbar-items'><Link href='/safety'><button className='dropbutton'>Safety</button></Link></ul>
        <ul className='navbar-items' data-dropdown>
          <button className='dropbutton' data-dropdown-button>Engagement&nbsp;<i className="bi bi-caret-down-fill" data-dropdown-button style={{ fontSize: '0.8rem' }}></i></button>
          <ul className='navbar-dropdown'>
            <li className='dropdown-items'><Link href='/human-practices'>Human Practices</Link></li>
            <li className='dropdown-items'><Link href='/communication'>Education and Communication</Link></li>
            <li className='dropdown-items'><Link href='/collaborations'>Collaborations</Link></li>
            <li className='dropdown-items'><Link href='/partnership'>Partnership</Link></li>
          </ul>
        </ul>
        <ul className='navbar-items' data-dropdown>
          <button className='dropbutton' data-dropdown-button>Special Prizes&nbsp;<i className="bi bi-caret-down-fill" data-dropdown-button style={{ fontSize: '0.8rem' }}></i></button>
          <ul className='navbar-dropdown' data-dropdown-button>
            <li className='dropdown-items'><Link href='/sustainable'>Sustainability</Link></li>
            <li className='dropdown-items'><Link href='/education'>Education</Link></li>
            <li className='dropdown-items'><Link href='/entrepreneurship'>Entrepreneurship</Link></li>
            <li className='dropdown-items'><Link href='/inclusivity'>Inclusivity</Link></li>
          </ul>
        </ul>
        <ul className='navbar-items'><Link href='/awards'><button className='dropbutton' data-dropdown-button>Awards</button></Link></ul>
      </nav>
    </div>

  )
}

export default Navbar
