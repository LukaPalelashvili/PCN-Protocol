import { ReactComponent as LoginDark } from '../../images/login-v2-dark.svg'
import './css/dark-layout.css'
import './css/comp.css'
import './css/aut.css'
import './css/bost.css'


export const Login = () => {
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
                 
                  {/* /Brand logo*/}
                  {/* Left Text*/}
                  <div style={{backgroundColor: '#161d31'}} className="d-none d-lg-flex col-lg-8 align-items-center p-5a">
                    <div className="w-100 d-lg-flex align-items-center justify-content-center px-5a">
                      <LoginDark className="img-fluid"/>
                      </div>
                  </div>
                  {/* /Left Text*/}
                  {/* Login*/}
                  <div style={{backgroundColor: 'rgb(40, 48, 70)'}} className="d-flex col-lg-4 align-items-center auth-bg px-2a p-lg-5a">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2a mx-auto">
                      <h2 style={{fontSize: '23.996px', color: '#d0d2d6'}} className="card-title hello-singin fw-bolda mb-1a">Welcome to PCNP! 👋</h2>
                      <p className="card-text mb-2a">Please sign-in to your account and start the adventure</p>
                      <form className="auth-login-form mt-2a" action="index.html" method="POST">
                        <div className="mb-1a">
                          <label style={{ color: '#d0d2d6'}} className="form-labela" htmlFor="login-email">Email</label>
                          <input style={{borderColor: '#404656', backgroundColor: '#283046'}} className="form-controla new-input" id="login-email" type="text" name="login-email" placeholder="john@example.com" aria-describedby="login-email" autofocus tabIndex={1} />
                        </div>
                        <div className="mb-1a">
                          <div className="d-flex justify-content-between">
                            <label style={{ color: '#d0d2d6'}} className="form-labela" htmlFor="login-password">Password</label><a className='login-buttonA' href="reset"><small className='small-pasFo'>Forgot Password?</small></a>
                          </div>
                          <div className="input-groupa new-input input-group-merge form-password-toggle">
                            <input  style={{borderColor: '#404656', backgroundColor: '#283046'}} className="form-controla new-input form-control-merge" id="login-password" type="password" name="login-password" placeholder="············" aria-describedby="login-password" tabIndex={2} /><span style={{backgroundColor: '#283046', borderColor: '#3b4253', color: '#b4b7bd' }} className="new-input input-group-texta cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
                          </div>
                        </div>
                        <div className="mb-1a">
                          <div className="form-checka">
                            <input style={{borderColor: '#404656', backgroundColor: '#283046'}}  className="form-check-inputa new-input" id="remember-me" type="checkbox" tabIndex={3} />
                            <label className="form-check-labela" htmlFor="remember-me"> Remember Me</label>
                          </div>
                        </div>
                        <button className="btna btn-primarya w-100" tabIndex={4}>Sign in</button>
                      </form>
                      <p className="text-center mt-2a"><span>New on our platform?</span><a href="/registration" style={{color: '7367f0'}} ><span style={{color: '#7367f0'}} >&nbsp;Create an account</span></a></p>
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
  