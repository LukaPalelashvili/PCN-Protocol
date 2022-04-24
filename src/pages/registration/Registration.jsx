import '../Login/css/dark-layout.css'
import '../Login/css/comp.css'
import '../Login/css/aut.css'
import '../Login/css/bost.css'
import { ReactComponent as RegisterDark } from '../../images/register-v2-dark.svg'





export const Registartion = () => {
    return (
      <>
        <div className="horizontal-layout horizontal-menu blank-page navbar-floating footer-static  " data-open="hover" data-menu="horizontal-menu" data-col="blank-page">
        {/* BEGIN: Content*/}
        <div className="app-content content ">
          <div className="content-overlay" />
          <div className="header-navbar-shadow" />
          <div className="content-wrapper">
            <div className="content-header row">
            </div>
            <div className="content-body">
              <div className="auth-wrapper auth-cover">
                <div className="auth-inner row m-0">
                  {/* Brand logo*/}
                  {/* <a className="brand-logo" href="index.html">
                    <svg viewBox="0 0 139 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={28}>
                      <defs>
                        <linearGradient id="linearGradient-1" x1="100%" y1="10.5120544%" x2="50%" y2="89.4879456%">
                          <stop stopColor="#000000" offset="0%" />
                          <stop stopColor="#FFFFFF" offset="100%" />
                        </linearGradient>
                        <linearGradient id="linearGradient-2" x1="64.0437835%" y1="46.3276743%" x2="37.373316%" y2="100%">
                          <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                          <stop stopColor="#FFFFFF" offset="100%" />
                        </linearGradient>
                      </defs>
                      <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <g id="Artboard" transform="translate(-400.000000, -178.000000)">
                          <g id="Group" transform="translate(400.000000, 178.000000)">
                            <path className="text-primary" id="Path" d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z" style={{fill: 'currentColor'}} />
                            <path id="Path1" d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z" fill="url(#linearGradient-1)" opacity="0.2" />
                            <polygon id="Path-2" fill="#000000" opacity="0.049999997" points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325" />
                            <polygon id="Path-21" fill="#000000" opacity="0.099999994" points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338" />
                            <polygon id="Path-3" fill="url(#linearGradient-2)" opacity="0.099999994" points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288" />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h2 className="brand-text text-primary ms-1">Vuexy</h2>
                  </a> */}
                  {/* /Brand logo*/}
                  {/* Left Text*/}
                  <div style={{backgroundColor: '#161d31'}} className="d-none d-lg-flex col-lg-8 align-items-center p-5a">
                    <div className="w-100 d-lg-flex align-items-center justify-content-center px-5a">
                      <RegisterDark className="img-fluid"/>
                      </div>
                  </div>
                  {/* /Left Text*/}
                  {/* Login*/}
                  <div  style={{backgroundColor: 'rgb(40, 48, 70)'}} className="d-flex col-lg-4 align-items-center auth-bg px-2a p-lg-5a">
        <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2a mx-auto">
          <h2 className="card-title hello-singin fw-bolda mb-1a">Adventure starts here 🚀</h2>
          <p className="card-text mb-2a">Make your app management easy and fun!</p>
          <form className="auth-register-form mt-2a" action="index.html" method="POST">
            <div className="mb-1a">
              <label style={{ color: '#d0d2d6'}} className="form-labela" htmlFor="register-username">Username</label>
              <input style={{borderColor: '#404656', backgroundColor: '#283046'}}  className="form-controla new-input" id="register-username" type="text" name="register-username" placeholder="johndoe" aria-describedby="register-username" autofocus tabIndex={1} />
            </div>
            <div className="mb-1a">
              <label style={{ color: '#d0d2d6'}} className="form-labela" htmlFor="register-email">Email</label>
              <input style={{borderColor: '#404656', backgroundColor: '#283046'}}  className="form-controla new-input" id="register-email" type="text" name="register-email" placeholder="john@example.com" aria-describedby="register-email" tabIndex={2} />
            </div>
            <div className="mb-1a">
              <label style={{ color: '#d0d2d6'}} className="form-labela" htmlFor="register-password">Password</label>
              <div className="input-groupa input-group-merge form-password-toggle">
                <input style={{borderColor: '#404656', backgroundColor: '#283046'}} className="form-controla new-input form-control-merge" id="register-password" type="password" name="register-password" placeholder="············" aria-describedby="register-password" tabIndex={3} /><span style={{backgroundColor: '#283046', borderColor: '#3b4253', color: '#b4b7bd' }}className=" new-input input-group-texta cursor-pointer"><i data-feather="eye" /></span>
              </div>
            </div>
            <div className="mb-1a">
              <div className="form-checka">
                <input style={{borderColor: '#404656', backgroundColor: '#283046'}} className="form-check-inputa new-input" id="register-privacy-policy" type="checkbox" tabIndex={4} />
                <label className="form-check-labela" htmlFor="register-privacy-policy">I agree to<a style={{color: 'rgb(115, 103, 240)'}}  href="#">&nbsp;privacy policy &amp; terms</a></label>
              </div>
            </div>
            <button className="btna btn-primarya w-100" tabIndex={5}>Sign up</button>
          </form>
          <p className="text-center mt-2a"><span>Already have an account?</span><a href="login"><span style={{color: 'rgb(115, 103, 240)'}}  >&nbsp;Sign in instead</span></a></p>
          <div className="divider my-2a">
            <div className="divider-text">or</div>
          </div>
          <div className="auth-footer-btn d-flex justify-content-center"><a className="btna btna-facebook" href="https://www.facebook.com/PCNProtocol/"><i data-feather="facebook" /></a><a className="btna btna-twitter white" href="https://twitter.com/PcnProtocol"><i data-feather="twitter" /></a><a className="btna btna-google" href="#"><i data-feather="mail" /></a><a className="btna btna-github" href="https://github.com/PCN-Protocol"><i data-feather="github" /></a></div>
        </div>
      </div>

                  {/* /Login*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }