import React from 'react';
import './Spro.css';
import SproCso from './SproCso'
// import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import ChildCareIcon from '@material-ui/icons/ChildCare';
// import IDCK67L6I1 from './Categories/shoes/items/ID#CK67L6/1.jpg' 
// import IDCK67L6I2 from './Categories/shoes/items/ID#CK67L6/2.jpg' 
// import IDCK67L6I3 from './Categories/shoes/items/ID#CK67L6/3.jpg' 
// import IDCK67L6I4 from './Categories/shoes/items/ID#CK67L6/4.jpg' 
// import IDCK67L6I5 from './Categories/shoes/items/ID#CK67L6/5.jpg' 
// import IDCK67L6I6 from './Categories/shoes/items/ID#CK67L6/6.jpg' 


function Spro({id, images, title, ratingSter, NumberOfRating, NewPrice, OldPrice}) {



    // https://reactjsexample.com/a-react-component-for-building-content-galleries-and-carousels/
    return (
        <div className="singlePageUserInter">
            <div className="singlePro disf">
                <div className="leftArea">
                    <div className="lgImgArea userInterButtom">
                        {/* <img src={IDCK67L6I1} alt="" className="bigimg"/> */}
                        <SproCso />
                    </div>
                    {/* <ul className="cerasolImg disf">
                        <li><img src={IDCK67L6I1} onClick={ImageChangeHendelar} alt="" className="cerasolSliderItem"/></li>
                        <li><img src={IDCK67L6I2} onClick={ImageChangeHendelar} alt="" className="cerasolSliderItem"/></li>
                        <li><img src={IDCK67L6I3} onClick={ImageChangeHendelar} alt="" className="cerasolSliderItem"/></li>
                        <li><img src={IDCK67L6I4} onClick={ImageChangeHendelar} alt="" className="cerasolSliderItem"/></li>
                        <li><img src={IDCK67L6I5} onClick={ImageChangeHendelar} alt="" className="cerasolSliderItem"/></li>
                        <li><img src={IDCK67L6I6} onClick={ImageChangeHendelar} alt="" className="cerasolSliderItem"/></li>
                    </ul> */}
                </div>
                <div className="rightArea">
                    <h1 className="title"> {title} (ID#{id})</h1>
                    <ul className="head__Info disf jcsb">
                        <li className="idnumber str">Price: ৳ 3,679.20</li>
                        <li className="idnumber str"><s>৳ 4,599.00</s></li>
                        <li className="idnumber str">Save 20%</li>
                    </ul>
                    <ul className="head__Info disf jcsb">
                        <li className="idnumber str">*****</li>
                        <li className="idnumber feedback">19635 ratings</li>
                        <li className="idnumber"><DoneIcon /> in Stock</li>
                        <li className="idnumber">ID#CK67L6</li>
                    </ul>
                    <ul className="selectionOption vis disf jcsb">
                        <li className="circle circleLavel">Select Option:</li>
                        <li className="circle selected"><EmojiPeopleIcon style={{ fontSize: 15 }} /> Men</li>
                        <li className="circle"><PregnantWomanIcon style={{ fontSize: 15 }} /> Women</li>
                        <li className="circle"><ChildCareIcon style={{ fontSize: 15 }} /> Chaild</li>
                    </ul>
                    <ul className="selectionOption disf jcsb">
                        <li className="circle circleLavel">Select Size:</li>
                        <li className="circle selected">8.50</li>
                        <li className="circle">9.00</li>
                        <li className="circle">9.50</li>
                        <li className="circle">10.00</li>
                        <li className="circle">10.50</li>
                    </ul>
                    <ul className="selectionOption disf jcsb">
                        <li className="circle circleLavel">Select Color:</li>
                        <li className="circle selected">Red</li>
                        <li className="circle">Black</li>
                        <li className="circle">Blue</li>
                        <li className="circle">Green</li>
                        <li className="circle">Yellow</li>
                    </ul>
                    <ul className="selectionOption disf jcsb">
                        <li className="circle circleLavel">Materials:</li>
                        <li className="circle selected">Calfskin</li>
                        <li className="circle">Leather</li>
                        <li className="circle">genuine leather</li>
                    </ul>
                    <ul className="selectionOption disf jcsb">
                        <li className="circle circleLavel">Delivery:</li>
                        <select>
                            <option value="">Dhaka</option>
                            <option value="">chattogram</option>
                            <option value="">sylhet</option>
                            <option value="">Khulna</option>
                            <option value="">Barishal</option>
                            <option value="">rajshahi</option>
                            <option value="">rongpur</option>
                            <option value="">mymensingh</option>
                        </select>
                    </ul>
                    <ul className="selectionOption qty vis disf jcsb">
                        <li className="circleLavel">Quantity: <br/></li>
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                        </select>
                        <li className="circleLavel">Ready to ship in: <br/>3-7 Business Days</li>
                        <li className="circleLavel">Cost to ship: <br/>Free</li>
                        <li className="circleLavel">Returns & exchanges: <br/>Accepted</li>
                    </ul>
                    <div className="button disf jcsb">
                        <div className="ActionBtn addToCart">Add to cart</div>
                        <div className="ActionBtn buyBtn">Buy Now</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Spro

