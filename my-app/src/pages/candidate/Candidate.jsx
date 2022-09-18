import React from 'react'
import './Candidate.css'

const Candidate = () => {
  return (
    <div className='cand'>
        <div className="cand-contain">
            <div className="cand-head">
                <h4 className="cand-name">Contestant: James Clear</h4>
                <button>Add Promise</button>
            </div>
            <div className="cand-det">
                <div className="cand-left">
                    <h5 className="left-title">Bio</h5>
                    <div className="info">
                        <ul className='cand-det-list'>
                            <li>Name: James Clear</li>
                            <li>ID: 0x75Cd185daB34a9c9dFCDa24951a547f8eEF5e618</li>
                            <li>Consituency: Gorakhpur</li>
                            <li>Party: AWS</li>
                            <li>Net Worth:</li>
                        </ul>
                    </div>
                </div>
                <div className="cand-right">
                    <h5 className="right-title">Promises</h5>
                    <div className="promise-list">
                        <ul className="prom">
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