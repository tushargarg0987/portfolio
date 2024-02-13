import Img from '../assets/img.jpg'

function AboutPage() {
    return (
        <>
            <section className='sc-page bg-[#0F161C] py-10' id="about-div">
                <h1 className="text-white text-left text-3xl">About</h1>
                <hr className='w-16 border-t-green-400 border-t-4 my-2 rounded-sm' />
                <div className='grid mt-6 gap-8 grid-cols-3'>
                    <img src={Img} className='w-10/12 aspect-square object-cover'></img>
                    <div className=' col-span-2 flex flex-col'>
                        <h1 className='text-4xl text-green-300 text-left mb-12 font-bold'>Web and React Native Developer</h1>
                        <div className='grid grid-cols-2 h-full'>
                            <div className='flex flex-col justify-between'>
                                <h1 className='text-white text-left text-2xl flex gap-3'>
                                    {/* ➤<strong> Name : </strong> Tushar Garg */}
                                    <span><svg fill="#ffffff" className='h-full' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path></g></svg></span> Tushar Garg
                                </h1>
                                <h1 className='text-white text-left text-2xl flex gap-3'>

                                    <span>
                                        <svg
                                            className='h-full'
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 64 64"
                                            enableBackground="new 0 0 64 64"
                                            xmlSpace="preserve"
                                            fill="#ffffff"
                                            stroke="#ffffff"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    fill="#ffffff"
                                                    d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </span> Dhuri, Punjab
                                </h1>
                                <h1 className='text-white text-left text-2xl flex gap-3'>
                                    {/* ➤<strong> Name : </strong> Tushar Garg */}
                                    <span><svg
                                        viewBox="0 0 24 24"
                                        className='h-full'
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="#ffffff"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                                                stroke="#ffffff"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></rect>
                                        </g>
                                    </svg></span> tushargarg0987@gmail.com
                                </h1>
                                <h1 className='text-white text-left text-2xl flex gap-3'>
                                    <span> <svg
                                        className='h-full'
                                        viewBox="0 0 20 20"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        fill="#ffffff"
                                        stroke="#ffffff"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title>github [#ffffff]</title>
                                            <desc>Created with Sketch.</desc>
                                            <g id="Page-1" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff">
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path
                                                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                                            id="github-[#ffffff]"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg></span> tushargarg0987
                                </h1>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <h1 className='text-white text-left text-2xl flex gap-3'>
                                    {/* ➤<strong> Name : </strong> Tushar Garg */}
                                    <span><svg
                                        fill="#ffffff"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        className='h-full'
                                        viewBox="0 0 512.001 512.001"
                                        xmlSpace="preserve"
                                        stroke="#ffffff"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g>
                                                <g>
                                                    <g>
                                                        <rect x="0" y="496.188" width="512.001" height="15.75"></rect>
                                                        <polygon points="399.875,488.062 399.875,248.187 112.125,248.187 112.125,488.062 127.875,488.062 127.875,263.937 384.125,263.937 384.125,488.062 "></polygon>
                                                        <polygon points="176,287.937 176,272.187 144,272.187 144,287.937 152.125,287.937 152.125,472.188 144,472.188 144,487.938 176,487.938 176,472.188 167.875,472.188 167.875,287.937 "></polygon>
                                                        <polygon points="224,287.937 224,272.187 192,272.187 192,287.937 200.125,287.937 200.125,472.188 192,472.188 192,487.938 224,487.938 224,472.188 215.875,472.188 215.875,287.937 "></polygon>
                                                        <polygon points="272,287.937 272,272.187 240,272.187 240,287.937 248.126,287.937 248.126,472.188 240,472.188 240,487.938 272,487.938 272,472.188 263.876,472.188 263.876,287.937 "></polygon>
                                                        <polygon points="320,287.937 320,272.187 288,272.187 288,287.937 296.124,287.937 296.124,472.188 288,472.188 288,487.938 320,487.938 320,472.188 311.875,472.188 311.875,287.937 "></polygon>
                                                        <polygon points="368.001,287.937 368.001,272.187 359.875,272.187 359.875,272.063 344.125,272.063 344.125,272.187 336,272.187 336,287.937 344.125,287.937 344.125,472.188 336,472.188 336,487.938 368.001,487.938 368.001,472.188 359.875,472.188 359.875,287.937 "></polygon>
                                                        <rect x="96.002" y="224.186" width="319.998" height="15.75"></rect>
                                                        <rect x="0" y="312.186" width="104.003" height="15.75"></rect>
                                                        <path d="M439.874,170.305l-175.999-56.001V0.063h-15.75v114.242l-176.001,56v45.633h367.75V170.305z M87.874,200.188v-18.367 l168.125-53.494l168.125,53.494v18.367H87.874z"></path>
                                                        <polygon points="359.875,0.188 272,0.188 272,15.938 344.125,15.938 344.125,40.188 272,40.188 272,55.938 359.875,55.938 "></polygon>
                                                        <polygon points="384.125,64.188 312,64.188 312,79.938 399.875,79.938 399.875,24.188 368.001,24.188 368.001,39.938 384.125,39.938 "></polygon>
                                                        <rect x="248.126" y="160.062" width="15.75" height="16"></rect>
                                                        <rect x="8.015" y="336.041" transform="matrix(1 0.0032 -0.0032 1 1.1009 -0.1647)" width="88.001" height="15.75"></rect>
                                                        <rect x="8.019" y="416.324" transform="matrix(1 0.0032 -0.0032 1 1.3575 -0.1643)" width="88.001" height="15.75"></rect>
                                                        <rect x="24.125" y="368.067" width="15.75" height="32"></rect>
                                                        <rect x="64.124" y="368.067" width="15.75" height="32"></rect>
                                                        <rect x="24.125" y="448.066" width="15.75" height="32.001"></rect>
                                                        <rect x="64.124" y="448.066" width="15.75" height="32.001"></rect>
                                                        <rect x="407.999" y="312.186" width="104.003" height="15.75"></rect>
                                                        <rect x="416.017" y="336.023" transform="matrix(-1 -0.0032 0.0032 -1 918.9324 689.2661)" width="88.001" height="15.75"></rect>
                                                        <rect x="416.021" y="416.307" transform="matrix(1 0.0032 -0.0032 1 1.3595 -1.4696)" width="88.001" height="15.75"></rect>
                                                        <rect x="432.128" y="368.067" width="15.75" height="32"></rect>
                                                        <rect x="472.122" y="368.067" width="15.75" height="32"></rect>
                                                        <rect x="432.128" y="448.066" width="15.75" height="32.001"></rect>
                                                        <rect x="472.122" y="448.066" width="15.75" height="32.001"></rect>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg></span> IIIT Una
                                </h1>
                                <h1 className='text-white text-left text-2xl flex gap-3'>
                                    <span><svg className='h-full' style={{ height: '100%' }} fill="#ffffff" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.141 7.905c.24.102.24.269 0 .37l-7.204 3.058a1.288 1.288 0 0 1-.874 0L.859 8.276c-.24-.102-.24-.27 0-.371l7.204-3.058a1.287 1.287 0 0 1 .874 0zm-6.833 4.303 3.983-1.69v2.081c0 1.394-2.145 2.524-4.791 2.524s-4.79-1.13-4.79-2.524v-2.082l3.982 1.69a2.226 2.226 0 0 0 1.616 0zm4.94 1.677h1.642v-1.091a.822.822 0 1 0-1.643 0zm.82-3.603a.554.554 0 1 0-.553-.554.554.554 0 0 0 .554.554zm0 1.415a.554.554 0 1 0-.553-.555.554.554 0 0 0 .554.555z"></path></g></svg></span> B Tech (Computer Science)
                                </h1>
                                <h1 className='text-white text-left text-2xl flex gap-3'>
                                    <span><svg
                                        className='h-full'
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xmlnsSketch="http://www.bohemiancoding.com/sketch/ns"
                                        fill="#ffffff"
                                        stroke="#ffffff"

                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">

                                            <defs></defs>
                                            <g
                                                id="Page-1"
                                                stroke="none"
                                                strokeWidth="1"
                                                fill="none"
                                                fillRule="evenodd"
                                                sketchType="MSPage"
                                            >
                                                <g
                                                    id="Icon-Set"
                                                    sketchType="MSLayerGroup"
                                                    transform="translate(-204.000000, -671.000000)"
                                                    fill="#ffffff"
                                                >
                                                    <path
                                                        d="M231.596,694.829 C229.681,694.192 227.622,693.716 225.455,693.408 C225.75,691.675 225.907,689.859 225.957,688 L233.962,688 C233.783,690.521 232.936,692.854 231.596,694.829 L231.596,694.829 Z M223.434,700.559 C224.1,698.95 224.645,697.211 225.064,695.379 C226.862,695.645 228.586,696.038 230.219,696.554 C228.415,698.477 226.073,699.892 223.434,700.559 L223.434,700.559 Z M220.971,700.951 C220.649,700.974 220.328,701 220,701 C219.672,701 219.352,700.974 219.029,700.951 C218.178,699.179 217.489,697.207 216.979,695.114 C217.973,695.027 218.98,694.976 220,694.976 C221.02,694.976 222.027,695.027 223.022,695.114 C222.511,697.207 221.822,699.179 220.971,700.951 L220.971,700.951 Z M209.781,696.554 C211.414,696.038 213.138,695.645 214.936,695.379 C215.355,697.211 215.9,698.95 216.566,700.559 C213.927,699.892 211.586,698.477 209.781,696.554 L209.781,696.554 Z M208.404,694.829 C207.064,692.854 206.217,690.521 206.038,688 L214.043,688 C214.093,689.859 214.25,691.675 214.545,693.408 C212.378,693.716 210.319,694.192 208.404,694.829 L208.404,694.829 Z M208.404,679.171 C210.319,679.808 212.378,680.285 214.545,680.592 C214.25,682.325 214.093,684.141 214.043,686 L206.038,686 C206.217,683.479 207.064,681.146 208.404,679.171 L208.404,679.171 Z M216.566,673.441 C215.9,675.05 215.355,676.789 214.936,678.621 C213.138,678.356 211.414,677.962 209.781,677.446 C211.586,675.523 213.927,674.108 216.566,673.441 L216.566,673.441 Z M219.029,673.049 C219.352,673.027 219.672,673 220,673 C220.328,673 220.649,673.027 220.971,673.049 C221.822,674.821 222.511,676.794 223.022,678.886 C222.027,678.973 221.02,679.024 220,679.024 C218.98,679.024 217.973,678.973 216.979,678.886 C217.489,676.794 218.178,674.821 219.029,673.049 L219.029,673.049 Z M223.954,688 C223.9,689.761 223.74,691.493 223.439,693.156 C222.313,693.058 221.168,693 220,693 C218.832,693 217.687,693.058 216.562,693.156 C216.26,691.493 216.1,689.761 216.047,688 L223.954,688 L223.954,688 Z M216.047,686 C216.1,684.239 216.26,682.507 216.562,680.844 C217.687,680.942 218.832,681 220,681 C221.168,681 222.313,680.942 223.438,680.844 C223.74,682.507 223.9,684.239 223.954,686 L216.047,686 L216.047,686 Z M230.219,677.446 C228.586,677.962 226.862,678.356 225.064,678.621 C224.645,676.789 224.1,675.05 223.434,673.441 C226.073,674.108 228.415,675.523 230.219,677.446 L230.219,677.446 Z M231.596,679.171 C232.936,681.146 233.783,683.479 233.962,686 L225.957,686 C225.907,684.141 225.75,682.325 225.455,680.592 C227.622,680.285 229.681,679.808 231.596,679.171 L231.596,679.171 Z M220,671 C211.164,671 204,678.163 204,687 C204,695.837 211.164,703 220,703 C228.836,703 236,695.837 236,687 C236,678.163 228.836,671 220,671 L220,671 Z"
                                                        id="globe"
                                                        sketchType="MSShapeGroup"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg></span> Portfolio Website
                                </h1>
                                <h1 className='text-white text-left text-2xl flex gap-3'>
                                    {/* ➤<strong> Name : </strong> Tushar Garg */}
                                    <span><svg className='h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#ffffff"></path> </g></svg></span> Tushar Garg
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage