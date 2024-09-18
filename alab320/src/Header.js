import React from 'react'

const Header = () => {
  return (
    <div>  
         <header>
        <h1>Sartre's List</h1>
        <h2>Better-Dressed People</h2>
        <nav aria-label="Main Navigation" role="navigation">
            <ul className="theNav">
                <li><a href="#womens">Women's</a></li>
                <li><a href="#mens">Men's</a></li>
                <li><a href="#onTheStreet">On the Street</a></li>
                <li><a href="#theCatwalk">The Catwalk</a></li>
                <li><a href="#adWatch">AdWatch</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>


    </div>
  )
}

export default Header