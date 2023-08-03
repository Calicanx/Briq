import { Link } from 'react-router-dom'

export default function RentFooter(){
    return(
      <>
        <div className="contact">CONTACT</div>
        <div className="get-in-touch-for-any-queries-investors">
        Get in touch for any queries &amp; investors
      </div>

      <div className="frame-24">
        <div className="contact-us">
          <form className="contact-form">
            <div className="contact2">
              <div className="label">
                <label className="full-name">Full Name</label>

                <input type="text" placeholder="Full Name" className="input"/>
              </div>

              <div className="label">
                <label className="email-address">Email Address</label>

                <input placeholder="Email Address" type="text" className="input"/>
              </div>

              <div className="label">
                <label className="phone-number">Phone Number</label>

                <input className="input" type="text" placeholder="Phone Number" />
              </div>

              <div className="label3">
                <label className="message">Message</label>

                <textarea type="text" placeholder="Message" className="input3">
                </textarea>
              </div>

              <button className="submit-button3">
              Submit
              </button>
            </div>
          </form>
        </div>

        <div className="contact-info">
          <div className="frame-7">
            <div className="contact-info2">
              <Link to='/' className="smart-rent2">SmartRent</Link>

              <div className="opp-ole-sereni-msa-rd-nairobi">
                Opp. Ole Sereni, Msa Rd, Nairobi
              </div>

              <div className="info-smartrent-com">info@smartrent.com</div>

              <div className="_254796305577">+254796305577</div>
            </div>
          </div>

          <div className="frame-22">
            <div className="demo">
              <div className="ready-to-get-started">Ready to get started?</div>

              <div className="register-button4">
                <Link to='/demo' className="demo2">Demo</Link>
              </div>
            </div>

            <svg
              className="line-4"
              width="94"
              height="7"
              viewBox="0 0 94 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 6.39379C26 -1.79419 82 -1.29399 93.5 6.39395"
                stroke="url(#paint0_linear_10_336)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10_336"
                  x1="47"
                  y1="0.438965"
                  x2="47"
                  y2="6.39395"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0077E4" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="_2023-smart-rent-all-rights-reserved">
        © 2023 SmartRent. All rights reserved.
      </div>
      </>  
    )
}