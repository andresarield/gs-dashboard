import React, {useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowTop(){
    const [productCount, setProductCount] = React.useState(0);
    React.useEffect(function(){
        fetch("http://localhost:3500/api/products")
        .then(res => res.json())
        .then(res => setProductCount(res.data.count))    
    }, [])

    const [userCount, setUserCount] = React.useState(0);
    React.useEffect(function(){
        fetch("http://localhost:3500/api/users")
        .then(res => res.json())
        .then(res => setUserCount(res.data.count))    
    }, [])

     const [categoryCount, setCategoryCount] = React.useState(0);
     React.useEffect(function(){
         fetch("http://localhost:3500/api/products")
         .then(res => res.json())
         .then(res => setCategoryCount(res.data.catCount))    
     }, [])

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            <SmallCard
                color="primary"
                titulo="Productos en BD"
                valor={productCount} 
                icono= "fas fa-gamepad" 
            />
            <SmallCard
                color="success"
                titulo="Usuarios en BD"
                valor={userCount} 
                icono= "fas fa-user" 
            />
            { <SmallCard
                color="warning"
                titulo="Categorías activas"
                valor={categoryCount} 
                icono= "fas fa-tags" 
            /> }
        </div>

        </React.Fragment>
    )
}

export default ContentRowTop;