/* eslint-disable quotes */
import React from 'react';

function BlogPost({ post }) {
  return (
    <section>
      {/* Post Haeder */}
      <div className="global-spacer global-bg header-setting">
        <div className="global-spacer blog-post-heading">{post.heading}</div>
      </div>

      <div className="global-container blog-post">
        <h1 className="global-heading">{post.heading}</h1>
        <div className="center-flex">
          <img src={post.img} alt="blog-img" />
        </div>
        <p className="global-paragraph">{`${post.paragraph} ${post.detail}`}</p>
      </div>
    </section>
  );
}

export default BlogPost;
