import React from 'react'

const MenuCard = ({ menuData }) => { 
    // console.log(menuData);
    return (
        <>
            <section class="container">
                {menuData.map((curElem) => {

                    const { id, name, price, image, description } = curElem; /* destructuring of element so that we don't have to write curElem everytime */
                    return (
                        <>
                            <div className="card-container" /* key={curElem.id} */>
                                <div className="card">
                                    <div className="body">
                                        <span className="number">{id}</span>
                                        <h2 className="title">{name}</h2>
                                        <h2 className="price">{price}</h2>
                                        <span className="description">{description}</span>
                                        <div className="read">___________________________________________________READ</div>
                                    </div>
                                    <img src={image} alt="images" className="media" />
                                    <button className="order">Order Now</button>
                                </div>
                            </div>
                        </>
                    );
                })}
            </section>
        </>
    )
}

export default MenuCard
