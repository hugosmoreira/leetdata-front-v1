import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is LeetData" text="We are in private beta, and delighted to serve the best data and product teams on the market." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Made for the real world" text="LeetData works with noisy real-world data, long-tailed product data and the constant flow of new products, users and brands." />
      <Feature title="Serverless" text="e take care of all the infrastructure, the servers, the models, and the automation. You get the results, the API endpoints, and one less thing on your shoulders." />
      <Feature title="No Code" text="no-code tool tackles the recommendation challenges an enterprise has" />
    </div>
  </div>
);

export default WhatGPT3;
