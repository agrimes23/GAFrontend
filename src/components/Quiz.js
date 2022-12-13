import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar.js'

const Quiz = (props) => {
    const [preference , setPreference] = useState({colors: 'None', pricerange: 'None', shortsleeves: 'None', longsleeves: 'None', topsize: 'None', pants: 'None', shorts: 'None', skirts: 'None', bottomssize: 'None', genderclothing: 'None'})

    // replaces the Link hook due to Link hook preventing submit of form.
    const navigate = useNavigate()

    const handleChange = (e) => {
        console.log(preference)
        setPreference({...preference, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("Submitted")
      props.handleEditUser(preference)
      navigate('/dashboard')
    }



    return (
        <>
        <Navbar/>
            <form onSubmit={handleSubmit} className="container-fluid card-container d-flex flex-column align-items-center w-100 quiz-page">    
                <div className="bg-white quiz-title p-4">
                    <h1 className="text-center ">Your Style Quiz</h1>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q1</h2>
                        <h3>Which colors do you generally prefer wearing?</h3>
                    </div>
                    <div>
                        <div className="row">
                            <div>
                                <input className="m-2" type="radio" name="colors" value="Dark colors" onChange={handleChange}/>
                                <label>Dark colors (Black, Grey, Brown, Navy)</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio"name="colors" value="Light colors"
                                onChange={handleChange}/>
                                <label className="d-inline">Light colors (White, Light Blues, Light Pinks, etc.)</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="colors" value="Pastel colors"
                                onChange={handleChange}/>
                                <label className="d-inline">Pastel colors (Mint green, peach, mauve, baby blue, lavendar, etc.)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q2</h2>
                        <h3>What price range is comfortable for you?</h3>
                    </div>
                    <div>
                        <div className="row">
                            <div>
                                <input className="m-2" type="radio" name="pricerange" value="Low-Price" onChange={handleChange}/>
                                <label className="d-inline">Low: $20-$40</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="pricerange" value="Medium-Price" onChange={handleChange}/>
                                <label className="d-inline">Medium: $40-$60</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="pricerange" value="High-Price" onChange={handleChange}/>
                                <label className="d-inline">High: $60-$100</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q3</h2>
                        <h3>Tops: what style do you usually like for tops? (Check all that apply)</h3>
                    </div>
                    <div>
                        <div className="row">
                            <div>
                                <input className="m-2" type="checkbox" name="shortsleeves" value="shortsleeves" onChange={handleChange}/>
                                <label className="d-inline">Short-sleeved</label>
                            </div>
                            <div>
                                <input className="m-2" type="checkbox" name="longsleeves" value="longsleeves" onChange={handleChange}/>
                                <label className="d-inline">Long-sleeved</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q4</h2>
                        <h3>What size for tops?</h3>
                    </div>
                    <div>
                        <div className="row">
                        
                            <div>
                                <input className="m-2" type="radio" name="topsize" value="xs-top" onChange={handleChange}/>
                                <label className="d-inline">X-Small</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="topsize" value="s-top" onChange={handleChange}/>
                                <label className="d-inline">Small</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="topsize" value="m-top" onChange={handleChange}/>
                                <label className="d-inline">Medium</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="topsize" value="l-top" onChange={handleChange}/>
                                <label className="d-inline">Large</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="topsize" value="xl-top" onChange={handleChange}/>
                                <label className="d-inline">X-Large</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="topsize" value="2xl-top" onChange={handleChange}/>
                                <label className="d-inline">2X-Large</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="topsize" value="3xl-top" onChange={handleChange}/>
                                <label className="d-inline">3X-Large</label>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q5</h2>
                        <h3>Bottoms: what style do you usually like for bottoms? (Check all that apply)</h3>
                    </div>
                    <div>
                        <div className="row">
                            <div>
                                <input className="m-2" type="checkbox" name="pants" value="pants" onChange={handleChange}/>
                                <label>Pants</label>
                            </div>
                            <div>
                                <input className="m-2" type="checkbox" name="shorts" value="shorts" onChange={handleChange}/>
                                <label>Shorts</label>
                            </div>
                            <div>
                                <input className="m-2" type="checkbox" name="skirts" value="skirts" onChange={handleChange}/>
                                <label>Skirts</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q6</h2>
                        <h3>What size for bottoms?</h3>
                    </div>
                    <div>
                        <div className="row">
                            <div>
                                <input className="m-2" name="bottomssize" type="radio" value="xs-pants" onChange={handleChange}/>
                                <label htmlFor='x-small'>X-Small</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottomssize" type="radio" value="s-pants" onChange={handleChange}/>
                                <label htmlFor='small'>Small</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottomssize" type="radio" value="m-pants" onChange={handleChange}/>
                                <label htmlFor='medium'>Medium</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottomssize" type="radio" value="l-pants" onChange={handleChange}/>
                                <label htmlFor='large'>Large</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottomssize" type="radio" value="xl-pants" onChange={handleChange}/>
                                <label htmlFor='x-large'>X-Large</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottomssize" type="radio" value="2xl-pants" onChange={handleChange}/>
                                <label htmlFor='2x-large'>2X-Large</label>
                            </div>
                            <div>
                                <input className="m-2" name="bottomssize" type="radio" value="3xl-pants" onChange={handleChange}/>
                                <label htmlFor='3x-large'>3X-Large</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-50 p-5 m-3">
                    <div className="mb-3">
                        <h2>Q7</h2>
                        <h3>Which type of clothing style do you prefer?</h3>
                    </div>
                    <div>
                        <div className="row">
                            <div>
                                <input className="m-2" type="radio" name="genderclothing" value="Men" onChange={handleChange}/>
                                <label>Masculine</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="genderclothing" value="Ladies" onChange={handleChange}/>
                                <label>Feminine</label>
                            </div>
                            <div>
                                <input className="m-2" type="radio" name="genderclothing" value="non-binary" onChange={handleChange}/>
                                <label>No preference/Non-binary</label>
                            </div>
                        </div>
                    </div>
                </div>
                <input className="btn btn-primary m-5 p-3" type="submit" value="See your clothing styles!" />
            </form>
        </>
    )
}

export default Quiz