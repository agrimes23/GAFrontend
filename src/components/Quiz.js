import {useState} from 'react'

const Quiz = () => {

    return (
        <>
            <h1>Your Style Quiz</h1>
            <div>
                <div>
                    <h2>Q1</h2>
                    <h3>Which colors do you generally prefer wearing</h3>
                </div>
                <div>
                    <form>
                        <input type="radio"/>
                        <label>Dark colors (Black, Grey, Brown, Navy)</label>
                        <input type="radio"/>
                        <label>Light colors (White, Light Blues, Light Pinks, etc.)</label>
                        <input type="radio"/>
                        <label>Pastel colors (Mint green, peach, mauve, baby blue, lavendar, etc.)</label>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h2>Q2</h2>
                    <h3>What price range is comfortable for you?</h3>
                </div>
                <div>
                    <form>
                        <input type="radio"/>
                        <label>Low: $20-$40</label>
                        <input type="radio"/>
                        <label>Medium: $40-$60</label>
                        <input type="radio"/>
                        <label>High: $60-$100</label>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h2>Q3</h2>
                    <h3>Tops: what style do you usually like for tops? (Check all that apply)</h3>
                </div>
                <div>
                    <form>
                        <input type="checkbox"/>
                        <label>Short-sleeved</label>
                        <input type="checkbox"/>
                        <label>Long-sleeved</label>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h2>Q4</h2>
                    <h3>What size for tops?</h3>
                </div>
                <div>
                    <form>
                        <input type="radio"/>
                        <label>X-Small</label>
                        <input type="radio"/>
                        <label>Small</label>
                        <input type="radio"/>
                        <label>Medium</label>
                        <input type="radio"/>
                        <label>Large</label>
                        <input type="radio"/>
                        <label>X-Large</label>
                        <input type="radio"/>
                        <label>2X-Large</label>
                        <input type="radio"/>
                        <label>3X-Large</label>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h2>Q5</h2>
                    <h3>Bottoms: what style do you usually like for bottoms? (Check all that apply)</h3>
                </div>
                <div>
                    <form>
                        <input type="checkbox"/>
                        <label>Pants</label>
                        <input type="checkbox"/>
                        <label>Shorts</label>
                        <input type="checkbox"/>
                        <label>Skirts</label>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h2>Q5</h2>
                    <h3>What size for bottoms?</h3>
                </div>
                <div>
                    <form>
                        <input name="bottoms-size" type="radio"/>
                        <label htmlFor='x-small'>X-Small</label>
                        <input name="bottoms-size" type="radio"/>
                        <label htmlFor='small'>Small</label>
                        <input name="bottoms-size" type="radio"/>
                        <label htmlFor='medium'>Medium</label>
                        <input name="bottoms-size" type="radio"/>
                        <label htmlFor='large'>Large</label>
                        <input name="bottoms-size" type="radio"/>
                        <label htmlFor='x-large'>X-Large</label>
                        <input name="bottoms-size" type="radio"/>
                        <label htmlFor='2x-large'>2X-Large</label>
                        <input name="bottoms-size" type="radio"/>
                        <label htmlFor='3x-large'>3X-Large</label>
                    </form>
                </div>
                <div>
                <div>
                    <h2>Q6</h2>
                    <h3>Which type of clothing style do you prefer?</h3>
                </div>
                <div>
                    <form>
                        <input type="radio"/>
                        <label>Masculine</label>
                        <input type="radio"/>
                        <label>Feminine</label>
                        <input type="radio"/>
                        <label>No preference</label>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default Quiz