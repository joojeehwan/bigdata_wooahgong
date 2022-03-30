/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react';
import { HeartOutlined, HeartTwoTone, CommentOutlined } from '@ant-design/icons';
import FeedDetailApi from 'common/api/FeedDetailApi';
import { CustomText } from '../styles/styledFeedfooter';

let value = 0;
function Feedfooter({ amILike, likesCnt, commentsCnt, feedSeq }: any) {
  const [islike, setLike] = useState(amILike);
  // const [value, setValue] = useState(0);

  const { postFeedLike } = FeedDetailApi;
  console.log('렌더링 확인용');

  const onClickLike = useCallback(async () => {
    const result = await postFeedLike(feedSeq);
    console.log(result.data);
    value = 1;
    setLike(result.data);
  }, []);

  const onClickDisLike = useCallback(async () => {
    const result = await postFeedLike(feedSeq);
    console.log(result.data);
    value = -1;
    setLike(result.data);
  }, []);

  return (
    <div style={{ display: 'flex', marginLeft: '20px' }}>
      {islike ? (
        <div onClick={onClickDisLike}>
          <HeartTwoTone twoToneColor="#9088F3" style={{ fontSize: '32px' }} />
        </div>
      ) : (
        <div onClick={onClickLike}>
          <HeartOutlined style={{ fontSize: '32px' }} />
        </div>
      )}
      <CustomText>{likesCnt + value}</CustomText>
      <div>
        <CommentOutlined style={{ fontSize: '32px', marginLeft: '20px' }} />
      </div>
      <CustomText>{commentsCnt}</CustomText>
    </div>
  );
}

export default Feedfooter;
