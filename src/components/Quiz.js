import {useState} from 'react'
import { Link } from 'react-router-dom'

const Quiz = () => {

    return (
        <>
            <div className="container-fluid card-container d-flex flex-column align-items-center w-100 quiz-page">    
                <div className="bg-white quiz-title p-4">
                    <h1 className="text-center ">Your Style Quiz</h1>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q1</h2>
                        <h3>Which colors do you generally prefer wearing?</h3>
                    </div>
                    <div>
                        <form className="row">
                            <div>
                                <input className="m-2" type="radio" name="colors"/>
                                <label>Dark colors (Black, Grey, Brown, Navy)</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio"name="colors"/>
                                <label className="d-inline">Light colors (White, Light Blues, Light Pinks, etc.)</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="colors"/>
                                <label className="d-inline">Pastel colors (Mint green, peach, mauve, baby blue, lavendar, etc.)</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q2</h2>
                        <h3>What price range is comfortable for you?</h3>
                    </div>
                    <div>
                        <form className="row">
                            <div>
                                <input className="m-2" type="radio" name="price-range"/>
                                <label className="d-inline">Low: $20-$40</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="price-range"/>
                                <label className="d-inline">Medium: $40-$60</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="price-range"/>
                                <label className="d-inline">High: $60-$100</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q3</h2>
                        <h3>Tops: what style do you usually like for tops? (Check all that apply)</h3>
                    </div>
                    <div>
                        <form className="row">
                            <div>
                                <input className="m-2" type="checkbox" name="sleeves"/>
                                <label className="d-inline">Short-sleeved</label>
                            </div>
                            <div>
                                <input className="m-2" type="checkbox" name="sleeves"/>
                                <label className="d-inline">Long-sleeved</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q4</h2>
                        <h3>What size for tops?</h3>
                    </div>
                    <div>
                        <form className="row">
                        
                            <div>
                                <input className="m-2" type="radio" name="top-size"/>
                                <label className="d-inline">X-Small</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="top-size"/>
                                <label className="d-inline">Small</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="top-size"/>
                                <label className="d-inline">Medium</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="top-size"/>
                                <label className="d-inline">Large</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="top-size"/>
                                <label className="d-inline">X-Large</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="top-size"/>
                                <label className="d-inline">2X-Large</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="top-size"/>
                                <label className="d-inline">3X-Large</label>
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q5</h2>
                        <h3>Bottoms: what style do you usually like for bottoms? (Check all that apply)</h3>
                    </div>
                    <div>
                        <form className="row">
                            <div>
                                <input className="m-2" type="checkbox" name="bottoms"/>
                                <label>Pants</label>
                            </div>
                            <div>
                                <input className="m-2" type="checkbox" name="bottoms"/>
                                <label>Shorts</label>
                            </div>
                            <div>
                                <input className="m-2" type="checkbox" name="bottoms"/>
                                <label>Skirts</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q6</h2>
                        <h3>What size for bottoms?</h3>
                    </div>
                    <div>
                        <form className="row">
                            <div>
                                <input className="m-2" name="bottoms-size" type="radio"/>
                                <label htmlFor='x-small'>X-Small</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottoms-size" type="radio"/>
                                <label htmlFor='small'>Small</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottoms-size" type="radio"/>
                                <label htmlFor='medium'>Medium</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottoms-size" type="radio"/>
                                <label htmlFor='large'>Large</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottoms-size" type="radio"/>
                                <label htmlFor='x-large'>X-Large</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottoms-size" type="radio"/>
                                <label htmlFor='2x-large'>2X-Large</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottoms-size" type="radio"/>
                                <label htmlFor='3x-large'>3X-Large</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q7</h2>
                        <h3>Which type of clothing style do you prefer?</h3>
                    </div>
                    <div>
                        <form className="row">
                            <div>
                                <input className="m-2" type="radio" name="gender-clothing"/>
                                <label>Masculine</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="gender-clothing"/>
                                <label>Feminine</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="gender-clothing"/>
                                <label>No preference/Non-binary</label>
                            </div>
                        </form>
                    </div>
                </div>
                <Link to="/dashboard"><input className="btn btn-primary m-5 p-3" type="submit" value="See your clothing styles!" /></Link>
            </div>
        </>
    )
}

export default Quiz