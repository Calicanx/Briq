import { Link } from 'react-router-dom'
import "./Register.css";

export default function Register() {
  return (
    <div className="registerp">
      <svg
        className="undraw-home-settings-re-pkya-2"
        width="545"
        height="507"
        viewBox="0 0 545 507"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_39_113)">
          <path
            d="M420.658 489.933L412.912 492.731L399.35 461.403L410.783 457.273L420.658 489.933Z"
            fill="#FFB8B8"
          />
          <path
            d="M406.648 492.311L421.586 486.914L424.695 497.195L400.351 505.991C399.942 504.641 399.781 503.216 399.877 501.798C399.972 500.38 400.322 498.996 400.907 497.726C401.492 496.455 402.3 495.323 403.285 494.394C404.27 493.465 405.412 492.757 406.648 492.311Z"
            fill="#2F2E41"
          />
          <path
            d="M369.556 497.71L361.398 497.71L357.517 463.312L369.557 463.313L369.556 497.71Z"
            fill="#FFB8B8"
          />
          <path
            d="M355.57 495.162H371.304V505.991H345.664C345.664 504.569 345.92 503.16 346.418 501.847C346.916 500.533 347.645 499.339 348.565 498.334C349.485 497.328 350.577 496.53 351.779 495.986C352.981 495.442 354.269 495.162 355.57 495.162Z"
            fill="#2F2E41"
          />
          <path
            d="M362.015 370.022L361.599 372.035C355.978 399.246 353.976 438.84 355.655 466.677L356.952 488.18C356.997 488.916 357.296 489.607 357.789 490.112C358.282 490.617 358.933 490.898 359.608 490.898H369.389C370.041 490.898 370.671 490.636 371.158 490.162C371.645 489.689 371.956 489.036 372.033 488.328L379.624 417.796C379.695 417.135 379.971 416.52 380.407 416.055C380.842 415.59 381.41 415.302 382.016 415.239C382.623 415.176 383.23 415.343 383.738 415.71C384.245 416.078 384.622 416.625 384.806 417.259L404.48 480.997C404.641 481.556 404.954 482.049 405.376 482.411C405.799 482.773 406.311 482.987 406.847 483.025L421.787 484.078C422.218 484.109 422.649 484.024 423.044 483.831C423.438 483.638 423.784 483.343 424.051 482.972C424.318 482.601 424.498 482.164 424.576 481.699C424.654 481.234 424.627 480.756 424.498 480.305L415.505 453.276C408.556 429.019 404.821 392.16 404.413 366.746C404.407 366.345 404.325 365.95 404.172 365.585C404.019 365.22 403.799 364.894 403.525 364.627C403.252 364.36 402.931 364.157 402.582 364.032C402.233 363.907 401.865 363.862 401.5 363.9L364.359 367.767C363.801 367.825 363.274 368.074 362.853 368.479C362.432 368.884 362.139 369.424 362.015 370.022Z"
            fill="#2F2E41"
          />
          <path
            d="M383.763 257.033C392.79 257.033 400.107 249.035 400.107 239.168C400.107 229.301 392.79 221.302 383.763 221.302C374.736 221.302 367.419 229.301 367.419 239.168C367.419 249.035 374.736 257.033 383.763 257.033Z"
            fill="#A0616A"
          />
          <path
            d="M373.034 375.876C369.779 375.868 366.526 375.681 363.289 375.314C362.249 375.19 361.294 374.626 360.629 373.744C359.964 372.861 359.642 371.729 359.73 370.589L365.303 311.738C366.646 295.091 368.722 279.022 379.227 265.413C379.584 264.952 380.024 264.576 380.52 264.31C381.016 264.044 381.557 263.893 382.109 263.866L382.504 263.85C386.648 263.661 388.557 263.826 389.094 264.414L391.984 267.527C409.608 281.773 410.34 372.027 405.998 370.248C405.158 369.906 395.128 370.25 394.43 370.77C388.769 374.988 379.67 375.875 373.034 375.876Z"
            fill="#6C63FF"
          />
          <path
            d="M308.908 343.209C309.324 342.241 309.929 341.385 310.681 340.701C311.432 340.016 312.312 339.52 313.258 339.247C314.204 338.975 315.193 338.932 316.156 339.122C317.118 339.313 318.031 339.732 318.83 340.349L338.17 325.226L338.639 338.724L320.201 351.016C319.163 352.413 317.692 353.346 316.067 353.637C314.441 353.929 312.775 353.558 311.383 352.596C309.991 351.633 308.97 350.146 308.514 348.416C308.058 346.686 308.198 344.834 308.908 343.209Z"
            fill="#A0616A"
          />
          <path
            d="M328.116 347.2L321.565 334.595L381.234 287.565C382.58 286.503 384.113 285.757 385.735 285.372C387.357 284.988 389.035 284.973 390.662 285.329C392.29 285.684 393.833 286.403 395.195 287.441C396.558 288.478 397.709 289.811 398.579 291.357C399.448 292.902 400.017 294.628 400.249 296.424C400.481 298.221 400.372 300.051 399.928 301.799C399.483 303.548 398.714 305.177 397.668 306.586C396.622 307.995 395.321 309.153 393.847 309.987L328.116 347.2Z"
            fill="#6C63FF"
          />
          <path
            d="M391.106 254.273C391.66 254.869 392.391 255.228 393.167 255.282C393.943 255.336 394.71 255.083 395.329 254.568C399.181 251.447 402.563 247.562 404.564 242.823C406.857 237.393 407.113 230.73 404.348 225.569C402.011 221.206 397.884 218.391 393.77 216.079C392.173 215.094 390.453 214.369 388.664 213.928C386.856 213.492 384.963 213.825 383.372 214.861C382.594 215.394 381.981 216.172 381.613 217.092C381.245 218.012 381.139 219.032 381.309 220.019C379.333 217.555 376.803 215.698 373.968 214.632C372.183 213.869 370.229 213.714 368.361 214.188C365.751 214.997 363.846 217.532 362.803 220.271C361.96 222.353 361.669 224.653 361.963 226.908C362.118 228.03 362.486 229.104 363.045 230.061C363.603 231.017 364.339 231.835 365.204 232.461C367.362 233.921 370.116 233.816 372.594 233.22C375.073 232.623 377.472 231.586 379.998 231.324C382.525 231.061 385.338 231.75 386.876 233.957C387.958 235.511 388.236 237.542 388.479 239.477L389.744 249.544C389.847 251 390.187 252.425 390.748 253.75C390.846 253.941 390.966 254.117 391.106 254.273Z"
            fill="#2F2E41"
          />
          <path
            d="M426.37 379.452C425.577 378.826 424.919 378.017 424.443 377.083C423.967 376.149 423.684 375.112 423.614 374.045C423.544 372.978 423.689 371.908 424.039 370.909C424.388 369.91 424.934 369.008 425.637 368.264L415.624 344.687L427.846 346.684L435.48 368.767C436.545 370.141 437.111 371.894 437.071 373.694C437.032 375.494 436.39 377.216 435.267 378.533C434.144 379.85 432.618 380.671 430.978 380.84C429.338 381.009 427.699 380.515 426.37 379.452Z"
            fill="#A0616A"
          />
          <path
            d="M433.066 354.407L421.534 361.567L378.51 296.343C377.539 294.871 376.857 293.196 376.505 291.423C376.153 289.65 376.139 287.816 376.464 286.037C376.79 284.257 377.448 282.571 378.397 281.082C379.345 279.593 380.565 278.334 381.979 277.383C383.393 276.433 384.971 275.811 386.615 275.558C388.259 275.304 389.933 275.424 391.532 275.909C393.132 276.394 394.623 277.235 395.911 278.379C397.2 279.522 398.26 280.944 399.023 282.556L433.066 354.407Z"
            fill="#6C63FF"
          />
          <path
            d="M328.034 120.227H325.491V44.076C325.491 32.3864 321.243 21.1754 313.681 12.9096C306.119 4.64372 295.863 5.78758e-06 285.169 0H137.57C126.875 0 116.619 4.64371 109.058 12.9096C101.496 21.1754 97.2477 32.3864 97.2477 44.076V461.855C97.2477 473.545 101.496 484.756 109.058 493.022C116.619 501.288 126.875 505.931 137.57 505.931H285.169C295.863 505.931 306.119 501.287 313.681 493.021C321.242 484.756 325.49 473.545 325.49 461.855V174.433H328.033L328.034 120.227Z"
            fill="#E6E6E6"
          />
          <path
            d="M286.796 11.4629H267.531C268.417 13.8375 268.755 16.4139 268.516 18.965C268.276 21.5162 267.467 23.9638 266.158 26.0922C264.849 28.2207 263.082 29.9646 261.011 31.1704C258.94 32.3762 256.63 33.0068 254.284 33.0067H169.726C167.38 33.0066 165.07 32.3758 163 31.1699C160.929 29.9641 159.162 28.2201 157.853 26.0917C156.545 23.9633 155.735 21.5157 155.496 18.9647C155.256 16.4137 155.594 13.8374 156.48 11.4629H138.486C130.499 11.4629 122.84 14.9308 117.193 21.1036C111.546 27.2765 108.374 35.6487 108.374 44.3785V461.551C108.374 470.281 111.546 478.653 117.193 484.826C122.84 490.999 130.499 494.467 138.486 494.467H286.796C294.782 494.467 302.441 490.999 308.089 484.826C313.736 478.653 316.908 470.281 316.908 461.551V44.3778C316.908 35.6482 313.735 27.2761 308.088 21.1034C302.441 14.9307 294.782 11.4629 286.796 11.4629Z"
            fill="white"
          />
          <path
            d="M212.641 258.228C198.821 258.228 185.312 253.749 173.822 245.356C162.332 236.964 153.376 225.035 148.088 211.079C142.799 197.123 141.416 181.766 144.112 166.95C146.808 152.135 153.462 138.525 163.234 127.844C173.006 117.162 185.456 109.888 199.01 106.941C212.563 103.994 226.612 105.506 239.38 111.287C252.147 117.068 263.059 126.858 270.737 139.418C278.415 151.978 282.513 166.745 282.513 181.851C282.492 202.1 275.123 221.514 262.024 235.832C248.926 250.151 231.166 258.205 212.641 258.228ZM212.641 106.928C199.085 106.928 185.833 111.322 174.562 119.555C163.29 127.788 154.505 139.489 149.317 153.179C144.13 166.869 142.772 181.934 145.417 196.467C148.062 211.001 154.589 224.351 164.175 234.829C173.761 245.307 185.974 252.443 199.269 255.334C212.565 258.225 226.346 256.741 238.87 251.07C251.394 245.399 262.099 235.796 269.63 223.475C277.162 211.155 281.182 196.669 281.182 181.851C281.161 161.987 273.933 142.943 261.084 128.897C248.234 114.851 230.813 106.951 212.641 106.928Z"
            fill="#3F3D56"
          />
          <path
            d="M238.303 159.663C244.288 154.136 247.922 145.405 246.969 136.904C246.016 128.404 240.112 120.59 232.454 118.785C224.795 116.98 216.065 121.977 213.739 130.154C212.459 114.388 210.984 97.9614 203.315 84.5351C196.372 72.3779 184.346 63.679 171.312 62.1227C158.279 60.5665 144.556 66.4442 136.427 77.6894C128.298 88.9345 126.308 105.283 132.001 118.193C136.195 127.704 143.922 134.781 152.017 140.54C177.845 158.91 209.884 165.117 240.37 160.213L238.303 159.663Z"
            fill="#E6E6E6"
          />
          <path
            d="M149.316 66.7702C160.07 76.3454 169.936 87.0545 178.771 98.7426C192.598 116.972 203.787 137.41 211.948 159.346C212.545 160.946 210.168 161.642 209.577 160.06C196.224 124.41 174.908 92.9893 147.578 68.6704C146.35 67.578 148.099 65.6868 149.316 66.7702Z"
            fill="white"
          />
          <path
            d="M152.975 333.151C157.018 333.151 160.295 329.568 160.295 325.149C160.295 320.73 157.018 317.148 152.975 317.148C148.933 317.148 145.656 320.73 145.656 325.149C145.656 329.568 148.933 333.151 152.975 333.151Z"
            fill="#3F3D56"
          />
          <path
            d="M274.303 330.969H181.14C179.728 330.969 178.374 330.355 177.376 329.264C176.378 328.173 175.817 326.693 175.817 325.149C175.817 323.606 176.378 322.126 177.376 321.034C178.374 319.943 179.728 319.33 181.14 319.33H274.303C275.715 319.33 277.069 319.943 278.067 321.034C279.065 322.126 279.626 323.606 279.626 325.149C279.626 326.693 279.065 328.173 278.067 329.264C277.069 330.355 275.715 330.969 274.303 330.969Z"
            fill="#CCCCCC"
          />
          <path
            d="M245.408 331.039H180.755C179.326 331.039 177.956 330.418 176.945 329.314C175.935 328.209 175.367 326.711 175.367 325.149C175.367 323.587 175.935 322.089 176.945 320.985C177.956 319.88 179.326 319.26 180.755 319.26H245.408C246.837 319.26 248.208 319.88 249.218 320.985C250.228 322.089 250.796 323.587 250.796 325.149C250.796 326.711 250.228 328.209 249.218 329.314C248.208 330.418 246.837 331.039 245.408 331.039Z"
            fill="#6C63FF"
          />
          <path
            d="M152.975 368.066C157.018 368.066 160.295 364.484 160.295 360.065C160.295 355.646 157.018 352.063 152.975 352.063C148.933 352.063 145.656 355.646 145.656 360.065C145.656 364.484 148.933 368.066 152.975 368.066Z"
            fill="#3F3D56"
          />
          <path
            d="M274.303 365.884H181.14C179.728 365.884 178.374 365.271 177.376 364.179C176.378 363.088 175.817 361.608 175.817 360.065C175.817 358.521 176.378 357.041 177.376 355.95C178.374 354.858 179.728 354.245 181.14 354.245H274.303C275.715 354.245 277.069 354.858 278.067 355.95C279.065 357.041 279.626 358.521 279.626 360.065C279.626 361.608 279.065 363.088 278.067 364.179C277.069 365.271 275.715 365.884 274.303 365.884Z"
            fill="#CCCCCC"
          />
          <path
            d="M152.975 402.981C157.018 402.981 160.295 399.399 160.295 394.98C160.295 390.561 157.018 386.979 152.975 386.979C148.933 386.979 145.656 390.561 145.656 394.98C145.656 399.399 148.933 402.981 152.975 402.981Z"
            fill="#3F3D56"
          />
          <path
            d="M274.303 400.799H181.14C179.728 400.799 178.374 400.186 177.376 399.095C176.378 398.003 175.817 396.523 175.817 394.98C175.817 393.437 176.378 391.956 177.376 390.865C178.374 389.774 179.728 389.161 181.14 389.161H274.303C275.715 389.161 277.069 389.774 278.067 390.865C279.065 391.956 279.626 393.437 279.626 394.98C279.626 396.523 279.065 398.003 278.067 399.095C277.069 400.186 275.715 400.799 274.303 400.799Z"
            fill="#CCCCCC"
          />
          <path
            d="M224.114 365.954H180.755C179.326 365.954 177.956 365.334 176.945 364.229C175.935 363.125 175.367 361.627 175.367 360.065C175.367 358.503 175.935 357.005 176.945 355.9C177.956 354.796 179.326 354.175 180.755 354.175H224.114C225.543 354.175 226.913 354.796 227.924 355.9C228.934 357.005 229.502 358.503 229.502 360.065C229.502 361.627 228.934 363.125 227.924 364.229C226.913 365.334 225.543 365.954 224.114 365.954Z"
            fill="#6C63FF"
          />
          <path
            d="M262.71 400.869H180.755C179.326 400.869 177.956 400.249 176.945 399.144C175.935 398.04 175.367 396.542 175.367 394.98C175.367 393.418 175.935 391.92 176.945 390.816C177.956 389.711 179.326 389.091 180.755 389.091H262.71C264.139 389.091 265.509 389.711 266.519 390.816C267.53 391.92 268.098 393.418 268.098 394.98C268.098 396.542 267.53 398.04 266.519 399.144C265.509 400.249 264.139 400.869 262.71 400.869Z"
            fill="#6C63FF"
          />
          <path
            d="M249.635 169.975H240.489V140.432C240.49 139.564 240.806 138.732 241.367 138.118C241.928 137.505 242.69 137.159 243.484 137.158H246.641C247.434 137.159 248.196 137.505 248.757 138.118C249.318 138.732 249.634 139.564 249.635 140.432V169.975Z"
            fill="#3F3D56"
          />
          <path
            d="M255.18 220.247H167.754L167.44 166.386C167.437 165.554 167.586 164.73 167.88 163.962C168.174 163.194 168.605 162.499 169.15 161.917L191.112 138.534C192.154 137.421 193.55 136.792 195.007 136.78L231.764 136.413C232.598 136.408 233.422 136.602 234.179 136.983C234.936 137.364 235.608 137.922 236.146 138.617L236.149 138.622L253.608 162.026C254.623 163.39 255.178 165.094 255.18 166.853L255.18 220.247Z"
            fill="#3F3D56"
          />
          <path
            d="M255.18 220.248H208.198V171.977C208.198 170.506 208.678 169.083 209.551 167.964L229.964 141.804C230.494 141.122 231.154 140.576 231.897 140.201C232.64 139.826 233.449 139.632 234.267 139.633H234.288C235.11 139.636 235.922 139.835 236.666 140.216C237.411 140.597 238.07 141.151 238.598 141.839L253.855 161.693C254.71 162.807 255.179 164.215 255.18 165.67V220.248Z"
            fill="#6C63FF"
          />
          <path
            d="M235.251 201.707H228.453C228.012 201.707 227.589 201.515 227.277 201.174C226.966 200.833 226.79 200.371 226.79 199.889V193.659C226.79 193.177 226.966 192.715 227.277 192.374C227.589 192.033 228.012 191.841 228.453 191.841H235.251C235.692 191.841 236.115 192.033 236.426 192.374C236.738 192.715 236.914 193.177 236.914 193.659V199.889C236.914 200.371 236.738 200.833 236.426 201.174C236.115 201.515 235.692 201.707 235.251 201.707Z"
            fill="white"
          />
          <path
            d="M235.251 185.744H228.453C228.012 185.743 227.589 185.551 227.277 185.21C226.966 184.869 226.79 184.407 226.79 183.925V177.84C226.79 177.358 226.966 176.896 227.277 176.555C227.589 176.214 228.012 176.022 228.453 176.022H235.251C235.692 176.022 236.115 176.214 236.426 176.555C236.738 176.896 236.914 177.358 236.914 177.84V183.925C236.914 184.407 236.738 184.869 236.426 185.21C236.115 185.551 235.692 185.743 235.251 185.744Z"
            fill="white"
          />
          <path
            d="M193.214 199.282H186.416C185.975 199.282 185.552 199.09 185.241 198.749C184.929 198.408 184.753 197.946 184.753 197.464V191.234C184.753 190.752 184.929 190.29 185.241 189.949C185.552 189.608 185.975 189.416 186.416 189.416H193.214C193.655 189.416 194.078 189.608 194.389 189.949C194.701 190.29 194.877 190.752 194.877 191.234V197.464C194.877 197.946 194.701 198.408 194.389 198.749C194.078 199.09 193.655 199.282 193.214 199.282Z"
            fill="white"
          />
          <path
            d="M193.214 183.318H186.416C185.975 183.318 185.552 183.126 185.241 182.785C184.929 182.444 184.753 181.982 184.753 181.5V175.415C184.753 174.933 184.929 174.471 185.241 174.13C185.552 173.789 185.975 173.597 186.416 173.597H193.214C193.655 173.597 194.078 173.789 194.389 174.13C194.701 174.471 194.877 174.933 194.877 175.415V181.5C194.877 181.982 194.701 182.444 194.389 182.785C194.078 183.126 193.655 183.318 193.214 183.318Z"
            fill="white"
          />
          <path
            d="M272.1 220.878H153.182C153.006 220.878 152.836 220.801 152.712 220.665C152.587 220.528 152.517 220.343 152.517 220.15C152.517 219.957 152.587 219.772 152.712 219.636C152.836 219.499 153.006 219.423 153.182 219.423H272.1C272.276 219.423 272.445 219.499 272.57 219.636C272.695 219.772 272.765 219.957 272.765 220.15C272.765 220.343 272.695 220.528 272.57 220.665C272.445 220.801 272.276 220.878 272.1 220.878Z"
            fill="#3F3D56"
          />
          <path
            d="M544.335 507H0.665446C0.488959 507 0.319699 506.923 0.194904 506.787C0.0701087 506.65 0 506.465 0 506.273C0 506.08 0.0701087 505.895 0.194904 505.758C0.319699 505.622 0.488959 505.545 0.665446 505.545H544.335C544.511 505.545 544.68 505.622 544.805 505.758C544.93 505.895 545 506.08 545 506.273C545 506.465 544.93 506.65 544.805 506.787C544.68 506.923 544.511 507 544.335 507Z"
            fill="#3F3D56"
          />
        </g>
        <defs>
          <clipPath id="clip0_39_113">
            <rect width="545" height="507" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="reg-frame">
        <div className="create-account">Create Account</div>

        <form className="login-form-1">
          <div className="reginput">
            <label className="name-1">Name</label>

            <input className="regfield" type="text" placeholder="Enter your full name" />
          </div>

          <div className="reginput">
            <label className="name-1">Email</label>

            <input className="regfield" type="text" placeholder="Enter your email" />
          </div>

          <div className="reginput">
            <label className="name-1">Phone Number</label>

            <input className="regfield" type="text" placeholder="Enter your phone number" />
          </div>

          <div className="reginput">
            <label className="name-1">National ID/Passport</label>

            <input className="regfield" type="text" placeholder="Enter your ID/passport" />
          </div>

          <div className="reginput">
            <label className="name-1">Password</label>

            <input className="regfield" type="password" placeholder="Enter your password" />
          </div>

          <div className="reginput">
            <label className="name-1">Confirm Password</label>

            <input className="regfield" type="password" placeholder="Confirm Password" />
          </div>

          <div className="login-register-2">
            <button className="regfield-2">
              Register
            </button>

            <div className="already-have-an-account-login">
              <span>
                <span className="already-have-an-account-login-span">
                  Already have an account?{" "}
                </span>
                <Link to='/login' className="already-have-an-account-login-span2">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>

      <Link to='/' className="smart-rent">SmartRent</Link>
    </div>
  );
};