import {useState} from 'react'

const Clothes = (props) => {

    return (
        <>
        {/* need to do a map loop in order to show the colors for each item. */}
        <div className="row">
            <div className="card m-1">
                <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="card-img-top clothing-img" />
                <div className="card-body">
                <h4 className="card-title"><strong>{}title</strong></h4>
                <h5 className="card-text">{}price</h5>
                <div className="d-inline-block">
                    {/* how to connect when color is clicked, to change the image */}
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                </div>
                <button className="btn btn-primary d-block">Add to Cart</button> 
                </div>           
            </div>
            <div className="card m-1">
                <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="card-img-top clothing-img" />
                <div className="card-body">
                <h4 className="card-title"><strong>{}title</strong></h4>
                <h5 className="card-text">{}price</h5>
                <div className="d-inline-block">
                    {/* how to connect when color is clicked, to change the image */}
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                </div>
                <button className="btn btn-primary d-block">Add to Cart</button> 
                </div>           
            </div>
            <div className="card m-1">
                <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="card-img-top clothing-img" />
                <div className="card-body">
                <h4 className="card-title"><strong>{}title</strong></h4>
                <h5 className="card-text">{}price</h5>
                <div className="d-inline-block">
                    {/* how to connect when color is clicked, to change the image */}
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                </div>
                <button className="btn btn-primary d-block">Add to Cart</button> 
                </div>           
            </div>
            <div className="card m-1">
                <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="card-img-top clothing-img" />
                <div className="card-body">
                <h4 className="card-title"><strong>{}title</strong></h4>
                <h5 className="card-text">{}price</h5>
                <div className="d-inline-block">
                    {/* how to connect when color is clicked, to change the image */}
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                </div>
                <button className="btn btn-primary d-block">Add to Cart</button> 
                </div>           
            </div>
            <div className="card m-1">
                <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="card-img-top clothing-img" />
                <div className="card-body">
                <h4 className="card-title"><strong>{}title</strong></h4>
                <h5 className="card-text">{}price</h5>
                <div className="d-inline-block">
                    {/* how to connect when color is clicked, to change the image */}
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                </div>
                <button className="btn btn-primary d-block">Add to Cart</button> 
                </div>           
            </div>
            <div className="card m-1">
                <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="card-img-top clothing-img" />
                <div className="card-body">
                <h4 className="card-title"><strong>{}title</strong></h4>
                <h5 className="card-text">{}price</h5>
                <div className="d-inline-block">
                    {/* how to connect when color is clicked, to change the image */}
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                </div>
                <button className="btn btn-primary d-block">Add to Cart</button> 
                </div>           
            </div>
            <div className="card m-1">
                <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="card-img-top clothing-img" />
                <div className="card-body">
                <h4 className="card-title"><strong>{}title</strong></h4>
                <h5 className="card-text">{}price</h5>
                <div className="d-inline-block">
                    {/* how to connect when color is clicked, to change the image */}
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                </div>
                <button className="btn btn-primary d-block">Add to Cart</button> 
                </div>           
            </div>
            <div className="card m-1">
                <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="card-img-top clothing-img" />
                <div className="card-body">
                <h4 className="card-title"><strong>{}title</strong></h4>
                <h5 className="card-text">{}price</h5>
                <div className="d-inline-block">
                    {/* how to connect when color is clicked, to change the image */}
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                    <div className="clothing-color d-inline-block m-2"></div>
                </div>
                <button className="btn btn-primary d-block">Add to Cart</button> 
                </div>           
            </div>
            </div>
        </>
    )
}

export default Clothes