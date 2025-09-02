/* eslint-disable quotes */
import React from 'react';
import termsAndConditionsData from '../Data/termsAndConditionsData';

function TermsAndConditions() {
  return (
    <div className="terms-container global-bg">
      <div className="global-spacer global-bg header-setting">
        <div className="global-spacer blog-post-heading">Terms and Conditions</div>
      </div>
      <div className="global-container">
        <h2 className="terms-title global-heading">Terms and Conditions</h2>
        <div className="terms-content">
          {termsAndConditionsData.map((para) => (
            <>
              <h3 className="heading">{para.title}</h3>
              <p key={para.id} className="terms-paragraph global-paragraph">
                {para.content}
              </p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
