import React from 'react'
import { useState } from 'react'
import './Candidate.css'
import Modal from './Modal'

const Candidate = () => {
    const [modal, setModal] = useState(false)

    const showModal = () => {
        setModal(prev => !prev)
        console.log(modal)
    }


  return (
    <div className='cand'>
        <Modal modal={modal} setModal={setModal} showModal={showModal}/>
        <div className="cand-contain">
            <div className="cand-head">
                <h4 className="cand-name">Contestant: James Clear</h4>
                <button onClick={showModal}>Add Promise</button>
            </div>
            <div className="cand-det">
                <div className="cand-left">
                    <h5 className="left-title title">Bio:</h5>
                    <p>This is a little detail about the contestant that participated in the election.:</p>
                    <div className="info">
                        <ul className='cand-det-list'>
                            <li>
                                <div className="candet">
                                    <span>Name:</span><span> James Clear</span>
                                </div>
                            </li>
                            <li>
                                <div className="candet">
                                    <span>ID:</span><span> 0x75Cd185daB34a9c9dFCDa24951a547f8eEF5e618</span>
                                </div>
                            </li>
                            <li>
                                <div className="candet">
                                    <span>Consituency:</span><span> Gorakhpur</span>
                                </div>
                                
                            </li>
                            <li>
                                <div className="candet">
                                    <span>Party:</span><span> AWS</span>
                                </div>
                            </li>
                            <li>
                                <div className="candet">
                                    <span>Net Worth:</span><span> 1000</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cand-right">
                    <h5 className="right-title title">Promises:</h5>
                    <p>These are the list of promises made by the contestant:</p>
                    <div className="cand-prom-list">
                        <ul className="cand-prom">
                            <li>0</li>
                            <li>General</li>
                            <li>I will easily reachable to mu constituency people.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Candidate