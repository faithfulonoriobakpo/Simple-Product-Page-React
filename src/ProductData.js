import React from "react";

const today = new Date();

const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

class FitBit19 extends React.Component {

    state = {
        watchColor: 0
    }

    changeColor = (pos) => {
        this.setState(
            {watchColor:pos}
        );
    }

    render(){

        const watchColors = ProductData.colorOptions.map(
            (watch, pos) => { return (<img src={watch.imageUrl} alt="Watch Face" onClick={ () => {this.changeColor(pos)}} width="15%" key={pos}/>)}
        )

        return(
            <div className="Product-page">
                <div className="Product-image">
                    <img src={ProductData.colorOptions[this.state.watchColor].imageUrl} className="main-product-image" alt="Fitbit Wristwatch"/>
                </div>
                <div className="Product-details">
                    <h1>{ProductData.title}</h1>
                    <p>{ProductData.description}</p>
                    <h3>Select Color</h3>
                    <div>
                        {watchColors}
                    </div>
                    <h3>Features</h3>
                    <button className="features-button time">Time</button>
                    <button className="features-button heart-rate">Heart Rate</button>
                    <button className="buy-now-button">Buy Now</button>
                </div>
            </div>
            )
    }
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export {FitBit19};