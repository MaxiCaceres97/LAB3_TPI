import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-box">
      <div className="login-logo">
        <a href="#"><b>Transporte de Mercaderia</b></a>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Inicia sesión</p>

          <form>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Contraseña" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Recuerdame</label>
                </div>
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
              </div>
            </div>
          </form>

          <p className="mb-1">
            <a href="#">Olvide mi contraseña</a>
          </p>
          <p className="mb-0">
            <a href="#" className="text-center">Registrar nuevo usuario</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
