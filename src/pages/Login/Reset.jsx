import { ReactComponent as ResetDark } from '../../images/reset-password-v2-dark.svg'
import './css/dark-layout.css'
import './css/comp.css'
import './css/aut.css'
import './css/bost.css'

export const Reset = () => {
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
               
                  <div style={{backgroundColor: '#161d31'}} className="d-none d-lg-flex col-lg-8 align-items-center p-5a">
                    <div className="w-100 d-lg-flex align-items-center justify-content-center px-5a">
                      <ResetDark className="img-fluid"/>
                      </div>
                  </div>
                  {/* /Left Text*/}
                  {/* Login*/}
                <div style={{backgroundColor: 'rgb(40, 48, 70)'}} className="d-flex col-lg-4 align-items-center auth-bg px-2a p-lg-5a">
        <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2a mx-auto">
          <h2 style={{fontSize: '23.996px', color: '#d0d2d6'}} className="card-title hello-singin fw-bolda mb-1a">Reset Password 🔒</h2>
          <p className="card-text mb-2a">Your new password must be different from previously used passwords</p>
          <form className="auth-reset-password-form mt-2a" action="auth-login-cover.html" method="POST">
            <div className="mb-1a">
              <div className="d-flex justify-content-between">
                <label style={{ color: '#d0d2d6'}} className="form-labela" htmlFor="reset-password-new">New Password</label>
              </div>
              <div className="input-groupa input-group-merge form-password-toggle">
                <input style={{borderColor: '#404656', backgroundColor: '#283046'}}  className="form-controla new-input form-control-merge" id="reset-password-new" type="password" name="reset-password-new" placeholder="············" aria-describedby="reset-password-new" autofocus tabIndex={1} /><span style={{backgroundColor: '#283046', borderColor: '#3b4253', color: '#b4b7bd' }}className="input-group-texta cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></span>
              </div>
            </div>
            <div className="mb-1a">
              <div className="d-flex justify-content-between">
                <label style={{ color: '#d0d2d6'}} className="form-labela" htmlFor="reset-password-confirm">Confirm Password</label>
              </div>
              <div className="input-groupa input-group-merge form-password-toggle">
                <input style={{borderColor: '#404656', backgroundColor: '#283046'}} className="form-controla new-input form-control-merge" id="reset-password-confirm" type="password" name="reset-password-confirm" placeholder="············" aria-describedby="reset-password-confirm" tabIndex={2} /><span style={{backgroundColor: '#283046', borderColor: '#3b4253', color: '#b4b7bd' }} className="input-group-texta cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></span>
              </div>
            </div>
            <button className="btna btn-primarya w-100 waves-effect waves-float waves-light" tabIndex={3}>Set New Password</button>
          </form>
          <p className="text-center mt-2a"><a style={{color: 'rgb(115, 103, 240)'}} href="login"><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6" /></svg> Back to login</a></p>
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