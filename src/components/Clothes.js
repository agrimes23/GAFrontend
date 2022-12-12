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
            <div className="row justify-content-center">
                {test.map((item) => {
                return (
                    
                    <div className="card clothes-card m-1">
                        <form >
                            <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="card-img-top clothing-img" />
                            <div className="card-body">
                                <h4 className="card-title" name="name" value={item.name}><strong>{item.name}</strong></h4>
                                <h5 className="card-text"  name="price" value={item.price}>${item.price}</h5>
                                <div className="d-inline-block">
                                    {/* how to connect when color is clicked, to change the image */}
                                    <div className="clothing-color d-inline-block m-2"></div>
                                    <div className="clothing-color d-inline-block m-2"></div>
                                    <div className="clothing-color d-inline-block m-2"></div>
                            </div>
                            {/* FIXME: How can you submit the above values? */}
                            <input type='submit' className="btn btn-primary d-block" value="Add to Cart"/>
                            </div>   
                        </form>
                    </div>
                )
                })}
            </div>
        </>
    )
}

export default Clothes