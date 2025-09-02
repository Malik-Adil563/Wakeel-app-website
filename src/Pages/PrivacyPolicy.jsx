/* eslint-disable quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import privacylist from '../Data/privacylist';

function PrivacyPolicy() {
  return (
    <>
      <head>
        <title>Privacy Policy | Wakeel App</title>
        <meta name="description" content="This Privacy Policy explains how Wakeel App collects, uses, and protects your information." />
      </head>

      <div className="privacy-policy-container global-bg">
        <div className="global-spacer global-bg header-setting">
          <div className="global-spacer blog-post-heading">Privacy Policy</div>
        </div>

        <div className="global-container">
          <h2 className="privacy-policy-title global-heading">Privacy Policy</h2>
          <p className="privacy-paragraph global-paragraph">Effective Date: June 24, 2025</p>
          <div className="privacy-policy-content">
            {privacylist.map((item) => (
              <div className="privacy-section" key={item.id}>
                <h3 className="heading">{item.title}</h3>
                {item.id === 12 ? (
                  <p className="privacy-paragraph global-paragraph" style={{ whiteSpace: 'pre-wrap' }}>
                    {item.content}
                    <Link href="mailto:support@wakeelapp.com" className="text-blue-600 underline">
                      support@wakeelapp.com
                    </Link>
                  </p>
                ) : (
                  // eslint-disable-next-line react/no-danger
                  <p className="privacy-paragraph global-paragraph" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: item.content }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
