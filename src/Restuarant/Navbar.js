/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
import React from 'react'

const Navbar = ({filterItem,menuList}) => {
    return (
    <>
<nav class="navbar"> 
                    <div class="logo"><img src="images/logo.jpg" alt="logo" height="50" width="50" /></div>
                <ul class="nav-list">
                    {
                        menuList.map((curElem)=>{
                            return (<button onClick={() => filterItem(curElem)}>{curElem}</button>)
                        })
                    }
                    
                </ul>
            </nav>
    </>
    )
}

export default Navbar
