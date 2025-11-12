/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */

import chefIcon from '../assets/chef-claude-icon.png';

export default function Header() {
  return (
      <div className="headerContent">
        <img src= {chefIcon} />
        <h1>Chef Claude</h1>
      </div>
  )
}
