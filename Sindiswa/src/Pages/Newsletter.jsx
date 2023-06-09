import React from 'react'
import Header from '../Components/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Newsletter = () => {
  return (
<div>
        <Header/>
        <h1>Newsletter</h1>
      
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div class="line-break"><span>or</span></div>
      <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=509669845852-s5kob8gfph30o7q5a6lavg6pu7g6up8o.apps.googleusercontent.com&amp;scope=openid%20email&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Fid.condenast.com%2Finteraction%2Fopenid%2Fgoogle%2Fcomplete&amp;state=oNoGSeKhMxOznLWRPjyR9" class="button--utility-pair button--sso google-sign-in-button button button--link" title="Continue with Google"><span class="button__icon-before"><svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Verso G</title><desc>Created with Sketch.</desc><defs></defs><g id="Verso-G" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect id="Rectangle" fill="#FFFFFF" fill-rule="nonzero" x="0" y="0" width="32" height="32"></rect><path d="M24.64,16.2045455 C24.64,15.5663636 24.5827273,14.9527273 24.4763636,14.3636364 L16,14.3636364 L16,17.845 L20.8436364,17.845 C20.635,18.97 20.0009091,19.9231818 19.0477273,20.5613636 L19.0477273,22.8195455 L21.9563636,22.8195455 C23.6581818,21.2527273 24.64,18.9454545 24.64,16.2045455 L24.64,16.2045455 Z" id="Google-blue" fill="#4285F4"></path><path d="M16,25 C18.43,25 20.4672727,24.1940909 21.9563636,22.8195455 L19.0477273,20.5613636 C18.2418182,21.1013636 17.2109091,21.4204545 16,21.4204545 C13.6559091,21.4204545 11.6718182,19.8372727 10.9640909,17.71 L7.95727273,17.71 L7.95727273,20.0418182 C9.43818182,22.9831818 12.4818182,25 16,25 L16,25 Z" id="Google-Green" fill="#34A853"></path><path d="M10.9640909,17.71 C10.7840909,17.17 10.6818182,16.5931818 10.6818182,16 C10.6818182,15.4068182 10.7840909,14.83 10.9640909,14.29 L10.9640909,11.9581818 L7.95727273,11.9581818 C7.34772727,13.1731818 7,14.5477273 7,16 C7,17.4522727 7.34772727,18.8268182 7.95727273,20.0418182 L10.9640909,17.71 L10.9640909,17.71 Z" id="Google-yellow" fill="#FBBC05"></path><path d="M16,10.5795455 C17.3213636,10.5795455 18.5077273,11.0336364 19.4404545,11.9254545 L22.0218182,9.34409091 C20.4631818,7.89181818 18.4259091,7 16,7 C12.4818182,7 9.43818182,9.01681818 7.95727273,11.9581818 L10.9640909,14.29 C11.6718182,12.1627273 13.6559091,10.5795455 16,10.5795455 L16,10.5795455 Z" id="Google-orange" fill="#EA4335"></path><polygon id="Shape" points="7 7 25 7 25 25 7 25"></polygon></g></svg></span><span class="button__label">Continue with Google</span></a>
      <span class="button__label"></span>
      <span class="button__icon-before"><svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Verso G</title><desc>Created with Sketch.</desc><defs></defs><g id="Verso-G" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect id="Rectangle" fill="#FFFFFF" fill-rule="nonzero" x="0" y="0" width="32" height="32"></rect><path d="M24.64,16.2045455 C24.64,15.5663636 24.5827273,14.9527273 24.4763636,14.3636364 L16,14.3636364 L16,17.845 L20.8436364,17.845 C20.635,18.97 20.0009091,19.9231818 19.0477273,20.5613636 L19.0477273,22.8195455 L21.9563636,22.8195455 C23.6581818,21.2527273 24.64,18.9454545 24.64,16.2045455 L24.64,16.2045455 Z" id="Google-blue" fill="#4285F4"></path><path d="M16,25 C18.43,25 20.4672727,24.1940909 21.9563636,22.8195455 L19.0477273,20.5613636 C18.2418182,21.1013636 17.2109091,21.4204545 16,21.4204545 C13.6559091,21.4204545 11.6718182,19.8372727 10.9640909,17.71 L7.95727273,17.71 L7.95727273,20.0418182 C9.43818182,22.9831818 12.4818182,25 16,25 L16,25 Z" id="Google-Green" fill="#34A853"></path><path d="M10.9640909,17.71 C10.7840909,17.17 10.6818182,16.5931818 10.6818182,16 C10.6818182,15.4068182 10.7840909,14.83 10.9640909,14.29 L10.9640909,11.9581818 L7.95727273,11.9581818 C7.34772727,13.1731818 7,14.5477273 7,16 C7,17.4522727 7.34772727,18.8268182 7.95727273,20.0418182 L10.9640909,17.71 L10.9640909,17.71 Z" id="Google-yellow" fill="#FBBC05"></path><path d="M16,10.5795455 C17.3213636,10.5795455 18.5077273,11.0336364 19.4404545,11.9254545 L22.0218182,9.34409091 C20.4631818,7.89181818 18.4259091,7 16,7 C12.4818182,7 9.43818182,9.01681818 7.95727273,11.9581818 L10.9640909,14.29 C11.6718182,12.1627273 13.6559091,10.5795455 16,10.5795455 L16,10.5795455 Z" id="Google-orange" fill="#EA4335"></path><polygon id="Shape" points="7 7 25 7 25 25 7 25"></polygon></g></svg></span>
      </div>
    );
  }


export default Newsletter