import React from 'react'
import './Intro.css'
import poly from '../asset/polygonlogo.svg'
import htm from '../asset/HTM.png'
import lw3 from '../asset/logo-blue.png'

const Intro = () => {
  return (
    <div className='intro'>
        <div className="intro-contain">
            <div className="intro-nav">
                <p className='logo'>Rudras <br /><span>(Rudras)</span></p>
                <ul className='nav-mean'>
                    <li>Team</li>
                    <li>Login</li>
                    <li>Wallet</li>
                </ul>
            </div>
            <div className="intro-body">
                <div className="intro-left">
                    <h4 className="intro-head">
                    Welcome to Election Campaign Promise tracker
                    </h4>
                    <p className="intro-descs">We keeeps a track of the agenda of all the elected candidates and there promises.</p>
                    <p className="intro-desc">Election Campaign Promise Tracker stores all the promises made by elected candidates and stores it in the blockchain for immutable database, so that it won't be changed by anyone</p>
                    <p className="intro-desc">To get started click the button below <br /> <br /> 👇</p>
                    <div className="intro-connect">Connect Wallet</div>
                </div>
                <div className="intro-right">
                    <div className="intro-tab">
                        <div className='note fir'>
                            Reliability
                        </div>
                        <div className='note'>
                            Security
                        </div>
                        <div className='note sec'>
                            Ethereum
                        </div>
                        <div className='note third'>
                            Polygon
                        </div>
                        <div className='note'>
                            Inmutable Data
                        </div>
                        <div className='note fourth'>
                            Blockchain
                        </div>
                    </div>
                    <div className="partner-logo">
                        <img src={poly} alt="polygon logo" className='p-logo'/>
                        <img src={htm} alt="HTM" />
                        <img src={lw3} alt="Learnweb3 logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro