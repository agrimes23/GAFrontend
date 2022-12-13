import {useState} from 'react'


const Clothes = (props) => {

    // this will allow changes to the cart
    // const [chosenColor, setChosenColor] = useState()
    // const [chosenHex, setChosenHex] = useState()
    // const [getIndex, setGetIndex] = useState(0)
    // const [index, setIndex] = useState(0)


// // TODO: do this after successfully added to cart. Need to put onClick={handleClick} on div
//     const handleClick = (e) => {
//         setGetIndex(index)
//         setChosenColor({...props.item.articleColorNames, [e.target.name]: props.item.articleColorNames[index]})
//         setChosenHex({...props.item.rgbColors, [e.target.name]: e.target.value})
//     }


// Just want to submit whatever item was clicked on to cart array
    const handleSubmit = (e) => {
      e.preventDefault()
      props.handleAddToCart(props.item)
    }

    const hideButton = (event) => {
        event.target.hidden = true
        return (
            <>
                <h6>This item has been added to cart</h6>
            </>
        )
    }

    // useEffect = () => {

    // }

    return (
        <>
            <div className="card clothes-card m-1">
            <form onSubmit={handleSubmit}>
                <img src={props.item.images[0].url} className="card-img-top clothing-img" />
                <div className="card-body">
                <h4 className="card-title" name="name"><strong>{props.item.name}</strong></h4>
                <h5 className="card-text" name="price">{props.item.price.formattedValue}</h5>
                <div className="d-inline-block">
                    {props.item.rgbColors.map((hexColor) => {
                        return (
                        <>
                            <div className="clothing-color d-inline-block m-2" name="rgbColors" style={{background: hexColor}}></div>
                        </>
                        )
                    })}
                </div>
                <input type="submit" className="btn btn-primary d-block" onClick={hideButton} value="Add to Cart"/> 
                </div>           
            </form>
            </div>
        </>
    )
}

export default Clothes