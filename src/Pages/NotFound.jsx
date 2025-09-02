/* eslint-disable quotes */
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-404">
      {/* Shades */}
      <div className="container">
        <div className="shade1" />
        <div className="shade2" />
      </div>

      <div className="global-container page-not-found">
        <div className="page-404-heading">
          <h1>404</h1>
          <h2>Page Not Found</h2>
        </div>
        <p>You are lost in space</p>
        <button className="global-btn" onClick={() => navigate('/')}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFound;
