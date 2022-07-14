import React from 'react'

import './styles/community.css';

export const Community = () => {
  return (

    <body>
      <div className="container">
      <div className="post">
        <div className="profile">
          <img src="profile_icon.png" alt="profile"/>
          <p className="name">홍길동</p>
        </div>
        <div className="post_img">
          <img src="post_img.png" alt="게시물 이미지"/>
        </div>
        <div className="post_bottom">
          <img src="post_bottom_heart.png" alt="좋아요"/>
          <img src="post_bottom_comment.png" alt="댓글"/>
          <p className="post_bottom_txt">부산소마고, bssm님이 좋아요를 눌렀습니다.</p>
        </div>
      </div>
      <div className="post">
        <div className="profile">
          <img src="profile_icon.png" alt="profile"/>
          <p className="name">홍길동</p>
        </div>
        <div className="post_img">
          <img src="post_img.png" alt="게시물 이미지"/>
        </div>
        <div className="post_bottom">
          <img src="post_bottom_heart.png" alt="좋아요"/>
          <img src="post_bottom_comment.png" alt="댓글"/>
          <p className="post_bottom_txt">부산소마고, bssm님이 좋아요를 눌렀습니다.</p>
        </div>
      </div>
      </div>
    </body>
  )
}
