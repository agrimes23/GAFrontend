import {useState} from 'react'


const Clothes = (props) => {
    // this is just a test. Just a placeholder until we get clothes on the page
    const [test, setTest] = useState([{name: "brrr sweater", price: 10}, {name: "sweater weather", price: 5}, {name: "brrr sweater", price: 10}, {name: "brrr sweater", price: 10}])

    //FIXME: Only need a handle submit?? 
    // const handleChange = (event) => {
    //     setTest({...props.clothes[0].cart, [event.target.name]: event.target.value})
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault()

    //     props.handleEdit(animal)
    // }

    return (
        <>
            <div className="card clothes-card m-1">
                <img src={props.item.images[0].url} className="card-img-top clothing-img" />
                <div className="card-body">
                <h4 className="card-title"><strong>{props.item.name}</strong></h4>
                <h5 className="card-text">{props.item.price.formattedValue}</h5>
                <div className="d-inline-block">
                    {/* how to connect when color is clicked, to change the image */}
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                </div>
                <button className="btn btn-primary d-block">Add to Cart</button> 
                </div>           
            </div>
        </>
    )
}

export default Clothes