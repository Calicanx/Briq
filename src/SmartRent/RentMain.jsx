import { Link } from 'react-router-dom'

import online from './pics/real-estate (3).png'
import automatic from './pics/payment (3).png'
import management from './pics/home (1).png'
import accounting from './pics/real-estate (1).png'
import invoice from './pics/payment (1).png'
import policies from './pics/payment-day (1).png'
import mpesa from './pics/pngaaa.com-3865195.png'
import cop from './pics/download.jpg'
import equity from './pics/pngaaa.com-5726260.png'
import call from './pics/customer-care.png'
import twitter from './pics/twitter.png'
import whatsapp from './pics/whatsapp.png'
import facebook from './pics/facebook.png'


export default function RentMain(){
    return(
        <>
            <div className="products">PRODUCTS</div>

            <div className="products-catalogue">
            <div className="pricing-table">
                <div className="personal">PERSONAL</div>

                <div className="kshs-2500-monthly">
                    <span>
                    <span className="kshs-2500-monthly-span">Kshs</span>
                    <span className="kshs-2500-monthly-span2"> </span>
                    <span className="kshs-2500-monthly-span3">2500</span>
                    <span className="kshs-2500-monthly-span4"> /</span>
                    <span className="kshs-7500-monthly-span6">monthly</span>
                    </span>
                </div>

                <div className="pricing-description">
                    <div className="up-to-20-units">
                    <span>
                        <span className="up-to-20-units-span">Up to</span>
                        <span className="up-to-20-units-span2"> </span>
                        <span className="up-to-20-units-span3">20</span>
                        <span className="up-to-20-units-span4"> </span>
                        <span className="up-to-20-units-span5">units</span>
                    </span>
                    </div>

                    <div className="line-1"></div>
                </div>

                <Link to='/register' className="register-button2">
                    <div className="register">Register</div>
                </Link>
                </div>

                <div className="pricing-table">
                <div className="business">BUSINESS</div>

                <div className="kshs-5000-monthly">
                    <span>
                    <span className="kshs-5000-monthly-span">Kshs</span>
                    <span className="kshs-5000-monthly-span2"> </span>
                    <span className="kshs-5000-monthly-span3">5000</span>
                    <span className="kshs-5000-monthly-span4"> /</span>
                    <span className="kshs-7500-monthly-span6">monthly</span>
                    </span>
                </div>

                <div className="pricing-description">
                    <div className="up-to-50-units">
                    <span>
                        <span className="up-to-50-units-span">Up to</span>
                        <span className="up-to-50-units-span2"> </span>
                        <span className="up-to-50-units-span3">50</span>
                        <span className="up-to-50-units-span4"> </span>
                        <span className="up-to-50-units-span5">units</span>
                    </span>
                    </div>

                    <div className="line-12"></div>
                </div>

                <Link to='/register' className="register-button2">
                    <div className="register">Register</div>
                </Link>
                </div>

                <div className="pricing-table2">
                <div className="corporate">CORPORATE</div>

                <div className="kshs-7500-monthly">
                    <span>
                    <span className="kshs-7500-monthly-span">Kshs</span>
                    <span className="kshs-7500-monthly-span2"> </span>
                    <span className="kshs-7500-monthly-span3">7500</span>
                    <span className="kshs-7500-monthly-span4"> </span>
                    <span className="kshs-7500-monthly-span5">/</span>
                    <span className="kshs-7500-monthly-span6">monthly</span>
                    </span>
                </div>

                <div className="pricing-description">
                    <div className="up-to-100-units">
                    <span>
                        <span className="up-to-100-units-span">Up to</span>
                        <span className="up-to-100-units-span2"> </span>
                        <span className="up-to-100-units-span3">100</span>
                        <span className="up-to-100-units-span4"> </span>
                        <span className="up-to-100-units-span5">units</span>
                    </span>
                    </div>

                    <div className="line-12"></div>
                </div>

                <Link to='/register' className="register-button2">
                    <div className="register">Register</div>
                </Link>
                </div>

                <div className="pricing-table">
                <div className="professional">PROFESSIONAL</div>

                <div className="kshs-15000-monthly">
                    <span>
                    <span className="kshs-15000-monthly-span">Kshs</span>
                    <span className="kshs-15000-monthly-span2"> </span>
                    <span className="kshs-15000-monthly-span3">15000</span>
                    <span className="kshs-15000-monthly-span4"> </span>
                    <span className="kshs-15000-monthly-span5">/</span>
                    <span className="kshs-15000-monthly-span6">monthly</span>
                    </span>
                </div>

                <div className="pricing-description">
                    <div className="up-to-200-units">
                    <span>
                        <span className="up-to-200-units-span">Up to</span>
                        <span className="up-to-200-units-span2"> </span>
                        <span className="up-to-200-units-span3">200</span>
                        <span className="up-to-200-units-span4"> </span>
                        <span className="up-to-200-units-span5">units</span>
                    </span>
                    </div>

                    <div className="line-12"></div>
                </div>

                <Link to='register' className="register-button2">
                    <div className="register">Register</div>
                </Link>
                </div> 
            </div>

            <div className="features">FEATURES</div>

            <div className="frame-19">
        <div className="frame-16">
          <div className="feature">
            <img className="ellipse-1" src={online} alt="online rent payments icon" />

            <div className="online-rent-payments">Online rent payments</div>
          </div>

          <div className="feature">
            <img className="ellipse-1" src={automatic} alt="automatic rent reminders icon" />

            <div className="automatic-rent-reminders">
              Automatic rent reminders
            </div>
          </div>

          <div className="feature2">
            <img className="ellipse-1" src={management} alt="management and growth icon" />

            <div className="management-growth">Management &amp; Growth</div>
          </div>
        </div>

        <div className="frame-18">
          <div className="feature">
            <img className="ellipse-1" src={accounting} alt="accounting and reporting icon" />

            <div className="automated-accounting-reporting">
              Automated Accounting &amp; Reporting
            </div>
          </div>

          <div className="feature">
            <img className="ellipse-1" src={invoice} alt="invoice  & receipt management" />

            <div className="invoice-receipt-management">
              Invoice &amp; receipt management
            </div>
          </div>

          <div className="feature2">
            <img className="ellipse-1" src={policies} alt="collection policies icon"/>

            <div className="customizable-rent-collection-policies">
              Customizable rent collection policies
            </div>
          </div>
        </div>
            </div>

            <div className="intergration">INTERGRATION</div>

            <div className="smart-rent-is-intergrated-with-local-fincancial-institutions-to-process-payments-in-real-time-we-integrate-with-all-major-banks">
        SmartRent is intergrated with local fincancial institutions to process
        payments in real time. We integrate with all major banks
      </div>

      <div className="frame-57">
        <img className="ellipse-23" src={mpesa} alt='mpesa icon' />

        <div className="logo-1">
          <div className="layer-2">
            <div className="layer-1">
              <svg
                className="kcb-logo"
                width="206"
                height="69"
                viewBox="0 0 206 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41687 0.5H158.357L205.427 68.5H0.41687V0.5Z"
                  fill="#80BC00"
                />
                <path
                  d="M83.1469 14.56C82.7469 11.83 81.0669 12.63 81.3169 11.71C81.3969 11.42 81.0869 10.23 79.3169 10.23H45.2269V30.06C45.8793 30.1507 46.5435 30.0242 47.1169 29.7C48.1869 28.42 49.1169 26.7 50.8669 26.38C51.3769 26.29 52.0469 26.23 52.3969 26.64C52.2169 27.03 51.6969 26.98 51.3369 27.11C50.1147 27.4054 49.031 28.1114 48.2669 29.11C48.2415 29.1644 48.2336 29.2254 48.2443 29.2845C48.2551 29.3437 48.2839 29.398 48.3269 29.44C48.4596 29.4461 48.5921 29.4257 48.7169 29.38C49.2869 28.97 49.8369 28.38 50.5969 28.52C50.6274 28.5278 50.6556 28.5427 50.6793 28.5634C50.703 28.5842 50.7214 28.6102 50.7331 28.6395C50.7448 28.6687 50.7494 28.7003 50.7466 28.7317C50.7438 28.763 50.7336 28.7933 50.7169 28.82C50.2003 29.2682 49.6121 29.6265 48.9769 29.88C48.1969 30.51 46.0469 31.03 45.7769 32.08C46.1436 32.1477 46.5144 32.1911 46.8869 32.21C47.8869 32.28 48.1569 31.1 48.8869 30.59C49.1869 30.4 49.5569 30.14 49.8869 30.32C49.8869 30.49 49.7969 30.58 49.7669 30.71C48.8569 31.64 47.7669 32.22 46.8469 33.18C46.5769 33.48 45.3869 33.82 45.2069 34.18V37.86C46.2687 36.4467 47.6055 35.2629 49.1369 34.38C49.2769 34.38 49.5069 34.29 49.6169 34.44C49.7269 34.59 49.6169 34.95 49.6169 35.17C49.0669 36.17 48.2969 36.98 47.8069 37.95C47.7736 37.5198 47.875 37.09 48.0969 36.72C48.0969 36.64 48.1769 36.5 48.0969 36.44C47.6869 36.44 47.4969 36.9 47.3569 37.18C46.8669 38.4 45.4269 39.66 45.1969 40.99V57.69H55.9969C56.6768 57.1202 57.2609 56.4449 57.7269 55.69C58.2169 55.02 58.3369 54.1 58.9269 53.53C59.0269 53.53 59.0969 53.45 59.1969 53.53C59.3201 53.8889 59.3651 54.27 59.3289 54.6477C59.2927 55.0254 59.1761 55.391 58.9869 55.72C58.8169 56.15 58.4369 56.48 58.4169 56.98C58.4169 57.11 58.7069 57.12 58.8469 56.98C59.9369 56.08 60.1169 54.57 60.4469 53.21C60.4469 53.16 60.4469 53.02 60.6069 53.03C60.7669 53.04 60.6869 53.48 60.6569 53.69C60.6269 53.9 60.5069 54.07 60.5569 54.25C61.0869 54.47 61.1269 53.69 61.3569 53.37C61.4269 53.37 61.5269 53.43 61.5469 53.52C61.5755 53.8583 61.5253 54.1987 61.4004 54.5145C61.2755 54.8302 61.0792 55.1128 60.8269 55.34C60.6469 55.52 60.1869 55.62 60.2869 55.91C60.3869 56.2 60.7169 56.09 60.9269 56.04C60.9769 56.04 61.0169 56.1 60.9269 56.23C60.5669 56.7632 60.1208 57.2329 59.6069 57.62H61.6069C62.6991 56.9276 63.6661 56.0553 64.4669 55.04H64.5969C65.1369 54.27 65.5969 53.49 66.1669 52.71C66.7517 51.8869 66.9888 50.8666 66.8269 49.87C66.5869 49.28 65.9269 49.52 65.4469 49.55C65.187 49.4479 64.9542 49.287 64.7669 49.08C64.6569 48.92 64.7669 48.65 64.5369 48.55C64.0569 48.41 63.6669 48.85 63.3269 49.19C63.1869 49.27 63.0069 49.41 62.8869 49.31C62.8869 48.31 63.7569 47.76 63.8869 46.87C63.8869 46.69 63.7269 46.61 63.5869 46.5C62.9269 46.5 62.5869 47.17 62.1469 47.5H61.9369C61.8796 47.4237 61.8392 47.3361 61.8185 47.2429C61.7978 47.1498 61.7973 47.0533 61.8169 46.96C61.9576 46.3594 62.2503 45.805 62.6669 45.35C64.1869 43.04 67.4169 43.06 67.4169 43.06C70.4869 43.06 72.5469 45.06 73.0569 45.06C73.1917 45.0163 73.3063 44.9256 73.3797 44.8045C73.4532 44.6833 73.4806 44.5397 73.4569 44.4C73.4569 43.96 73.2469 43.5 72.9569 43.46C72.6669 43.42 73.1669 43.84 72.4569 43.67C69.7469 43.06 67.8169 41.21 67.9769 39.52C68.1369 37.83 67.7969 37.07 70.9169 35.75C71.3869 35.55 72.0569 35.51 71.9169 34.32C71.9169 34.32 71.8169 33.96 71.5669 33.96C71.5301 33.9573 71.4931 33.9618 71.4581 33.9734C71.4231 33.9851 71.3907 34.0035 71.3628 34.0276C71.335 34.0518 71.3121 34.0812 71.2957 34.1142C71.2792 34.1472 71.2694 34.1832 71.2669 34.22C71.2669 34.22 71.4269 34.52 71.0069 34.52C70.5869 34.52 70.8169 34.04 69.7669 34.04C69.3823 34.0138 68.9967 34.0718 68.6369 34.21C68.2377 34.358 67.8116 34.4194 67.3869 34.39C66.9727 34.4149 66.5584 34.343 66.1769 34.18C65.7902 34.0531 65.3833 33.9989 64.9769 34.02C63.9769 34.02 64.1169 34.51 63.7469 34.52C63.5369 34.52 63.4669 34.36 63.5169 34.12C63.5669 33.88 63.6869 33.88 63.0669 33.43C62.9268 33.3096 62.8303 33.1464 62.7923 32.9656C62.7544 32.7848 62.7771 32.5966 62.8569 32.43C63.2323 31.821 63.4742 31.1393 63.5669 30.43C63.6869 29.63 62.2569 27.97 61.9869 27.43C61.5269 26.57 61.9869 26.22 60.2569 26.03C59.7058 26.0334 59.1713 25.8414 58.7484 25.4881C58.3255 25.1347 58.0415 24.6429 57.9469 24.1C57.9469 24 57.9469 23.82 58.2569 23.96C58.8369 24.28 59.3169 25.4 60.2569 25.4C61.1969 25.4 62.2569 25.59 62.3869 25.96C62.7969 26.8 63.2469 26.96 63.4769 26.96C64.1369 27.01 63.2769 25.53 63.5269 25.26C63.7769 24.99 63.9169 25.13 64.1369 25.18C64.757 25.3021 65.3194 25.6255 65.7369 26.1C65.8169 26.23 66.2969 26.16 66.3669 25.88C66.6969 24.58 67.1169 24.63 67.7269 24.72C68.3369 24.81 68.3569 24.82 68.3569 25.51C68.343 25.6008 68.3535 25.6937 68.3872 25.7792C68.421 25.8647 68.4768 25.9397 68.5489 25.9966C68.6211 26.0535 68.707 26.0903 68.798 26.1032C68.889 26.1161 68.9818 26.1046 69.0669 26.07C69.6169 25.94 69.9069 24.81 70.5069 24.77C70.6569 24.77 70.7369 24.77 70.7769 24.9C70.8169 25.03 70.3069 25.49 70.4669 25.81C70.6269 26.13 70.7369 25.66 70.9269 25.75C71.3669 25.98 71.0969 26.96 71.5269 26.93C71.9569 26.9 71.9869 26.51 72.2769 26.15C72.4955 25.8554 72.8104 25.6466 73.1669 25.56C74.1348 25.3009 75.081 24.9666 75.9969 24.56C77.9969 23.41 76.7569 20.37 75.0969 18.43C74.6969 17.95 75.2969 17.56 75.8069 18.07C76.8069 19.07 77.2769 20.52 78.0369 20.52C79.3664 20.3398 80.627 19.8197 81.6969 19.01C82.2591 18.4151 82.6826 17.703 82.9367 16.9249C83.1909 16.1468 83.2695 15.3221 83.1669 14.51M59.1669 38.79C59.8669 37.5 62.5669 35.38 63.9969 35.79C64.7606 35.9841 65.4427 36.4163 65.9443 37.024C66.4459 37.6317 66.7411 38.3833 66.7869 39.17C67.0569 42.17 63.3069 43.9 63.1169 43.79C62.9269 43.68 63.1169 43.53 63.1169 43.38C63.1095 43.3339 63.0845 43.2926 63.0472 43.2646C63.0099 43.2366 62.9631 43.2242 62.9169 43.23C62.0969 43.23 62.0469 44.38 61.4969 44.87C61.3369 44.87 61.2369 44.74 61.1069 44.66C60.8069 44.19 61.5869 44.21 61.6969 43.84C61.8069 43.47 61.7669 43.28 61.6069 43.16C61.5194 43.0927 61.4122 43.0562 61.3019 43.0562C61.1915 43.0562 61.0843 43.0927 60.9969 43.16C60.6869 43.38 60.6769 43.98 60.2769 43.81C60.2034 43.7183 60.1503 43.612 60.121 43.4982C60.0917 43.3845 60.0869 43.2658 60.1069 43.15C60.5169 42.65 61.2669 42.74 61.3469 41.98C61.3469 41.52 61.7569 41.57 61.9969 41.48C62.2369 41.39 62.2669 41.07 62.3569 40.82C62.5469 40.27 63.0669 40.37 63.1169 40.07C63.1296 39.9837 63.1176 39.8956 63.0822 39.816C63.0467 39.7363 62.9894 39.6683 62.9169 39.62C62.8051 39.6011 62.6905 39.6075 62.5815 39.6386C62.4725 39.6697 62.3718 39.7249 62.2869 39.8C62.1469 39.9 62.2269 40.17 62.0269 40.28C61.8072 40.3803 61.5752 40.4509 61.3369 40.49C60.9769 40.61 60.9669 40.97 60.8869 41.34C60.8869 41.53 60.4669 41.47 60.3069 41.51C59.9569 41.6 59.8669 41.98 59.7269 42.3C59.7269 42.3 59.7269 42.38 59.6569 42.38C59.5869 42.38 59.3769 42.23 59.2869 42.13C59.1969 42.03 59.1369 41.91 59.2269 41.81C59.2787 41.7563 59.3445 41.7182 59.4169 41.7C59.529 41.6612 59.6232 41.583 59.682 41.4801C59.7408 41.3771 59.7603 41.2562 59.7369 41.14C59.6169 40.71 60.1369 40.56 60.1469 40.4C60.1576 40.326 60.1462 40.2504 60.1142 40.1828C60.0822 40.1152 60.0309 40.0586 59.9669 40.02C59.6469 39.82 59.3969 40.2 59.0869 40.31C58.9969 40.31 58.8269 40.2 58.7869 40.07C58.7968 39.6395 58.91 39.2177 59.1169 38.84M56.1969 11.84C57.6939 12.1638 59.0166 13.0337 59.9069 14.28C60.6269 15.38 60.9069 16.84 62.1769 17.55C62.3426 17.7146 62.5447 17.8379 62.7669 17.91C62.4794 17.89 62.1997 17.8081 61.9469 17.67C61.8269 17.67 61.7269 17.48 61.5869 17.59C61.4469 17.7 61.5869 17.72 61.5369 17.79C61.4869 17.86 61.7369 17.95 61.8269 18.05C61.7621 18.1157 61.702 18.1859 61.6469 18.26C60.3069 17.73 60.1669 16.26 59.4669 15.2C59.1675 14.5565 58.7224 13.9916 58.1669 13.55C58.1173 13.5455 58.0676 13.5566 58.0246 13.5817C57.9816 13.6068 57.9474 13.6446 57.9269 13.69C58.0469 13.95 58.3169 14.15 58.4569 14.4C58.8961 15.0107 59.1242 15.7479 59.1069 16.5C59.0169 16.58 59.1069 16.72 58.9369 16.74C58.8472 16.7561 58.7546 16.7411 58.6746 16.6974C58.5946 16.6538 58.5319 16.5841 58.4969 16.5C57.7969 15.56 57.7769 14.28 56.8169 13.5C56.8169 13.5 56.8169 13.5 56.7469 13.5C56.4269 13.77 56.7469 14.22 56.7469 14.59V14.85C56.3148 13.8225 55.546 12.9726 54.5669 12.44C53.9193 12.3258 53.2544 12.3562 52.6199 12.5291C51.9854 12.702 51.397 13.013 50.8969 13.44C50.8837 13.4538 50.8661 13.4625 50.8471 13.4645C50.8281 13.4665 50.809 13.4616 50.7933 13.4507C50.7776 13.4398 50.7663 13.4237 50.7615 13.4052C50.7566 13.3868 50.7585 13.3672 50.7669 13.35C50.8269 12.82 51.8669 10.86 56.2169 11.85M55.4869 18.25C54.0264 17.6396 52.5979 16.9554 51.2069 16.2C50.9469 16.14 50.6169 16.01 50.3769 16.2C50.1369 16.39 50.5969 16.52 50.7069 16.69C50.0309 16.5813 49.338 16.6645 48.7069 16.93C48.5669 16.93 48.3969 16.93 48.2969 16.86C48.2969 16.52 48.6069 16.21 48.8269 15.95C49.1349 15.6644 49.4973 15.4437 49.8925 15.3011C50.2876 15.1585 50.7074 15.0969 51.1269 15.12C52.0511 15.1472 52.9489 15.435 53.7169 15.95C54.9469 16.69 55.9569 17.83 57.1069 18.67C56.5137 18.6096 55.9317 18.4683 55.3769 18.25M64.2769 22.25C64.3969 22.87 63.9869 24.25 63.7469 24.3C63.3269 24.3 63.3069 23.86 63.2069 23.25C63.1069 22.64 63.6369 21.87 63.0769 21.67C62.2869 21.67 62.6369 22.98 62.0069 22.98C61.6669 22.98 61.3169 22.62 60.8869 22.49C58.6769 21.88 57.7869 23.71 57.3669 23.62C56.5869 23.45 57.2069 22.96 57.3669 22.72C58.2063 21.8923 59.2765 21.338 60.4369 21.13C61.3369 20.93 61.9269 20.36 63.2169 20.36C64.5169 20.55 64.2169 21.7 64.2769 22.25ZM75.7269 21.99C75.8404 22.0404 75.9327 22.1291 75.9875 22.2405C76.0424 22.352 76.0563 22.4793 76.0269 22.6C75.9669 22.91 75.7469 22.7 75.4969 22.6C75.0846 22.41 74.6301 22.3304 74.1778 22.369C73.7255 22.4075 73.291 22.563 72.9169 22.82C72.3669 23.15 72.2269 22.57 72.0169 22.16C71.9169 22 71.6869 21.69 71.4969 21.79C71.3069 21.89 71.4069 22.44 71.4969 22.59C71.5364 22.8026 71.514 23.0221 71.4325 23.2224C71.3509 23.4227 71.2136 23.5954 71.0369 23.72C70.7169 23.72 70.6869 23.56 70.5369 23.29C70.0669 22.48 69.9169 20.8 70.8369 20.5C71.314 20.3764 71.8136 20.3672 72.2949 20.4732C72.7763 20.5792 73.2258 20.7974 73.6069 21.11C74.2837 21.4829 75.0065 21.7653 75.7569 21.95M75.7569 13.74C76.0517 13.2917 76.4785 12.946 76.9783 12.7507C77.4781 12.5555 78.0262 12.5203 78.5469 12.65C78.9834 12.7716 79.3914 12.9789 79.7469 13.26C79.7469 13.54 80.1169 13.55 80.1569 13.82C78.8769 13.35 77.0769 12.94 75.8069 13.7M79.4169 16.39C78.8538 16.347 78.2989 16.2293 77.7669 16.04C78.5369 15.65 79.8169 14.81 80.4969 15.9C80.3269 16.35 79.8169 16.32 79.4169 16.39Z"
                  fill="#003B4D"
                />
                <path
                  d="M100.317 45.31H95.1269L87.8269 34.84V45.31H83.5469V22.9H87.8269V32.38L95.6369 22.9H99.6669L91.7069 32.78L100.317 45.31Z"
                  fill="white"
                />
                <path
                  d="M111.647 45.66C104.537 45.66 100.647 41.53 100.647 34.04C100.647 30.4 101.497 27.54 103.187 25.55C104.074 24.5554 105.172 23.7703 106.399 23.2515C107.627 22.7327 108.955 22.4931 110.287 22.55C112.196 22.6831 114.095 22.9235 115.977 23.27L116.647 23.39V27.56L113.267 25.56C112.337 25.0885 111.31 24.8387 110.267 24.83H110.197C105.927 24.83 105.297 29.83 105.197 34.14C105.137 37.78 105.897 40.5 107.377 42.01C107.886 42.5052 108.491 42.8911 109.155 43.1439C109.819 43.3967 110.527 43.5111 111.237 43.48C112.836 43.4978 114.401 43.0191 115.717 42.11L117.287 41.01L116.687 44.73L116.307 44.92C114.792 45.457 113.194 45.7244 111.587 45.71"
                  fill="white"
                />
                <path
                  d="M128.717 45.31H120.957V22.9H128.107C129.743 22.775 131.382 23.122 132.827 23.9C133.544 24.3858 134.118 25.0547 134.489 25.8372C134.86 26.6198 135.015 27.4874 134.937 28.35C134.972 29.0357 134.869 29.7214 134.636 30.3671C134.402 31.0127 134.042 31.6052 133.577 32.11L133.017 32.67L133.647 33.15C134.432 33.8153 135.048 34.6567 135.446 35.6055C135.844 36.5544 136.012 37.5838 135.937 38.61C135.965 39.5624 135.774 40.5085 135.379 41.3754C134.984 42.2423 134.394 43.0069 133.657 43.61C132.248 44.7083 130.503 45.2875 128.717 45.25M125.237 42.99H127.337C130.627 42.99 131.627 41.92 131.627 38.41C131.638 37.9335 131.549 37.4598 131.366 37.0201C131.182 36.5803 130.907 36.1842 130.56 35.8577C130.213 35.5312 129.801 35.2816 129.35 35.1252C128.9 34.9688 128.422 34.9091 127.947 34.95H125.237V42.99ZM125.237 31.52H127.417C128.111 31.5435 128.8 31.3886 129.417 31.07C129.81 30.7751 130.12 30.3833 130.316 29.9328C130.512 29.4823 130.588 28.9886 130.537 28.5C130.537 25.4 128.867 25.15 127.007 25.15H125.237V31.52Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <img className="pngaaa-1" src={equity} alt='equity icon' />

        <img className="ellipse-25" src={cop} alt='co-operative bank icon' />
      </div>

      <div className="customer-service">CUSTOMER SERVICE</div>

      <div className="customerservice">
        <div className="frame-6">
          <div className="star-review">
            <div className="always-a-great-experience-when-contacting-the-customer-service">
              “Always a great experience when contacting the customer service”
            </div>

            <svg
              className="star-service"
              width="185"
              height="25"
              viewBox="0 0 185 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z"
                fill="white"
              />
              <path
                d="M52.5 0L55.3064 8.63729H64.3882L57.0409 13.9754L59.8473 22.6127L52.5 17.2746L45.1527 22.6127L47.9591 13.9754L40.6118 8.63729H49.6936L52.5 0Z"
                fill="white"
              />
              <path
                d="M92.5 0L95.3064 8.63729H104.388L97.0409 13.9754L99.8473 22.6127L92.5 17.2746L85.1527 22.6127L87.9591 13.9754L80.6118 8.63729H89.6936L92.5 0Z"
                fill="white"
              />
              <path
                d="M132.5 0L135.306 8.63729H144.388L137.041 13.9754L139.847 22.6127L132.5 17.2746L125.153 22.6127L127.959 13.9754L120.612 8.63729H129.694L132.5 0Z"
                fill="white"
              />
              <path
                d="M172.5 0L175.306 8.63729H184.388L177.041 13.9754L179.847 22.6127L172.5 17.2746L165.153 22.6127L167.959 13.9754L160.612 8.63729H169.694L172.5 0Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="star-review2">
            <div className="great-customer-service">
              “GREAT CUSTOMER SERVICE!”
            </div>

            <svg
              className="star-service2"
              width="185"
              height="25"
              viewBox="0 0 185 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z"
                fill="white"
              />
              <path
                d="M52.5 0L55.3064 8.63729H64.3882L57.0409 13.9754L59.8473 22.6127L52.5 17.2746L45.1527 22.6127L47.9591 13.9754L40.6118 8.63729H49.6936L52.5 0Z"
                fill="white"
              />
              <path
                d="M92.5 0L95.3064 8.63729H104.388L97.0409 13.9754L99.8473 22.6127L92.5 17.2746L85.1527 22.6127L87.9591 13.9754L80.6118 8.63729H89.6936L92.5 0Z"
                fill="white"
              />
              <path
                d="M132.5 0L135.306 8.63729H144.388L137.041 13.9754L139.847 22.6127L132.5 17.2746L125.153 22.6127L127.959 13.9754L120.612 8.63729H129.694L132.5 0Z"
                fill="white"
              />
              <path
                d="M172.5 0L175.306 8.63729H184.388L177.041 13.9754L179.847 22.6127L172.5 17.2746L165.153 22.6127L167.959 13.9754L160.612 8.63729H169.694L172.5 0Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="star-review3">
            <div className="top-notch-customer-onboarding">
              “TOP NOTCH CUSTOMER ONBOARDING!”
            </div>

            <svg
              className="star-service3"
              width="185"
              height="25"
              viewBox="0 0 185 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z"
                fill="white"
              />
              <path
                d="M52.5 0L55.3064 8.63729H64.3882L57.0409 13.9754L59.8473 22.6127L52.5 17.2746L45.1527 22.6127L47.9591 13.9754L40.6118 8.63729H49.6936L52.5 0Z"
                fill="white"
              />
              <path
                d="M92.5 0L95.3064 8.63729H104.388L97.0409 13.9754L99.8473 22.6127L92.5 17.2746L85.1527 22.6127L87.9591 13.9754L80.6118 8.63729H89.6936L92.5 0Z"
                fill="white"
              />
              <path
                d="M132.5 0L135.306 8.63729H144.388L137.041 13.9754L139.847 22.6127L132.5 17.2746L125.153 22.6127L127.959 13.9754L120.612 8.63729H129.694L132.5 0Z"
                fill="white"
              />
              <path
                d="M172.5 0L175.306 8.63729H184.388L177.041 13.9754L179.847 22.6127L172.5 17.2746L165.153 22.6127L167.959 13.9754L160.612 8.63729H169.694L172.5 0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <svg
          className="arrow-1"
          width="377"
          height="261"
          viewBox="0 0 377 261"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M350.586 64.3031C351.348 64.6286 352.229 64.275 352.555 63.5132L357.86 51.0992C358.186 50.3374 357.832 49.4559 357.07 49.1304C356.308 48.8049 355.427 49.1585 355.101 49.9203L350.386 60.955L339.351 56.2395C338.589 55.9139 337.708 56.2676 337.382 57.0294C337.057 57.7912 337.41 58.6726 338.172 58.9981L350.586 64.3031ZM11.5665 128.621C19.2872 178.97 28.8136 211.985 39.8605 231.583C45.3903 241.393 51.3656 247.958 57.8003 251.606C64.2813 255.281 71.1053 255.925 78.1279 254.115C85.1018 252.317 92.2389 248.112 99.4838 242.15C106.738 236.181 114.175 228.389 121.747 219.316C136.887 201.174 152.681 177.772 168.734 153.259C184.805 128.717 201.139 103.059 217.412 80.294C233.694 57.5166 249.832 37.7585 265.47 24.9841C281.138 12.1849 295.942 6.67824 309.753 11.5661C323.674 16.4931 337.223 32.1769 349.784 63.4823L352.568 62.3652C339.941 30.8948 325.964 14.1212 310.754 8.73802C295.434 3.3158 279.504 9.64641 263.572 22.6607C247.61 35.6999 231.283 55.7317 214.972 78.5494C198.651 101.38 182.264 127.122 166.224 151.615C150.165 176.137 134.458 199.403 119.443 217.393C111.938 226.387 104.635 234.026 97.5776 239.833C90.5111 245.648 83.766 249.563 77.3791 251.21C71.0408 252.843 65.0251 252.254 59.2799 248.997C53.4884 245.713 47.8511 239.649 42.4739 230.11C31.7068 211.008 22.2419 178.445 14.5319 128.166L11.5665 128.621Z"
            fill="url(#paint0_linear_10_306)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_306"
              x1="169.638"
              y1="32.7914"
              x2="207.363"
              y2="227.626"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0077E4" />
              <stop offset="1" stopColor="white" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>

        <div className="customer-service2">
          <div className="customer-service3">
            <div className="customer-service-button">
              <img className="ellipse-2" src={call} alt='call icon' />

              <div className="call">Call</div>
            </div>
          </div>

          <div className="customer-service3">
            <div className="customer-service-button">
              <img className="ellipse-2" src={twitter} alt='twitter icon' />

              <div className="twitter">Twitter</div>
            </div>
          </div>

          <div className="customer-service3">
            <div className="customer-service-button">
              <img className="ellipse-2" src={whatsapp} alt='whatsapp icon' />

              <div className="whats-app">WhatsApp</div>
            </div>
          </div>

          <div className="customer-service3">
            <div className="customer-service-button">
              <img className="ellipse-2" src={facebook} alt='facebook icon' />

              <div className="facebook">Facebook</div>
            </div>
          </div>
        </div>
      </div>

      
        </>
    )
}