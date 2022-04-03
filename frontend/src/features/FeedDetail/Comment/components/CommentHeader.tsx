import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { useAppSelector } from 'app/store';
import { UserOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { typeState } from 'features/FeedDetail/components/Feedfooter';
import { HeaderContainer, NicknameContainer, ContentText, CustomText } from '../styles/styledCommentHeader';

// 리덕스로 전역처리해서 데이터 가져오면 될듯,,

interface locState {
  myState: typeState;
}

function CommentHeader() {
  const [userImage, setuserImage] = useState<string>();
  const [userNickname, setuserNickname] = useState<string>();
  const [updateContent, setupdateContent] = useState<string>();
  const [CreateDate, setCreateDate] = useState<string>();
  const { updateConttent } = useAppSelector((state) => state.feeddetail);
  const { userImages } = useAppSelector((state) => state.feeddetail);
  const { userNicknames } = useAppSelector((state) => state.feeddetail);
  const { CreateDates } = useAppSelector((state) => state.feeddetail);

  // const location = useLocation();
  // const state = location?.state as locState;
  // console.log(state);
  // const { myState } = state;

  // window.localStorage.setItem('userImage', myState.userImage);
  // window.localStorage.setItem('userNickname', myState.nickname);
  // window.localStorage.setItem('updateContent', myState.content);
  // window.localStorage.setItem('CreateDate', myState.createDate);

  // useEffect(() => {
  //   const iamge = window.localStorage.getItem('userImage');
  //   const name = window.localStorage.getItem('userNickname');
  //   const content = window.localStorage.getItem('updateContent');
  //   const date = window.localStorage.getItem('CreateDate');
  //   if (iamge !== null) {
  //     setuserImage(iamge);
  //   }
  //   if (name !== null) {
  //     setuserNickname(name);
  //   }
  //   if (content !== null) {
  //     setupdateContent(content);
  //   }
  //   if (date !== null) {
  //     setCreateDate(date);
  //   }
  // }, [myState.content, myState.createDate, myState.nickname, myState.userImage]);
  return (
    <>
      <HeaderContainer>
        <div style={{ marginRight: '25px', width: '20px' }}>
          <Avatar size={64} src={userImages} icon={<UserOutlined />} />
        </div>
        <NicknameContainer>{userNicknames}</NicknameContainer>
      </HeaderContainer>
      <ContentText>
        <CustomText>{updateConttent}</CustomText>
      </ContentText>
      <div style={{ marginLeft: '20px', fontFamily: 'NotoSansKR' }}>
        <p>{CreateDates}</p>
      </div>
    </>
  );
}

export default CommentHeader;