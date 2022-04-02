import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import FeedDetailApi from 'common/api/FeedDetailApi';

// Componetets
import Feedcontent from './components/Feedcontent';
import Feedfooter from './components/Feedfooter';
import Feedimages from './components/Feedimages';
import Feedheader from './components/Feedheader';

const CustomSpin = styled.div`
  margin-left: 45%;
  margin-top: 100%;
`;

function FeedDetail() {
  const [FeedDetails, setFeedDetails] = useState<any>();
  const { getFeedDetail } = FeedDetailApi;
  const { feedSeq } = useParams();

  const [loadingFinsh, setLoadingFinsh] = useState(false);
  async function getAndFeedDetail() {
    if (feedSeq !== undefined) {
      const result = await getFeedDetail(feedSeq);
      console.log(result.data);
      setFeedDetails(result.data);
    } else {
      console.log('error');
      // 여기 토스트 메세지 써줘야 할듯 => ok
    }
  }

  // 정리.. 신의 한수,,,

  // 요청 -> 밑에 return 아래 값없으면 에러! => 따라서 로딩으로 일단 막고! => 값 이제 들어오면

  // 인자 값 렌더링 시키기

  // 문제 상황, return 이후에서 하위 컴포넌트들에 값을 props로 보내는데

  // return 문은 마운트 되기 전에 실행됨.. 당연히 값이 없으니 오류가 난다!

  // 따라서 값이 없을때는 spin을 통해서 없는 값이 렌더링 되지 않도록 함!

  // 로딩 창 이후에 return 문 위로 실행될때! 값을 받은 다음에 loadingFinsh를

  // true로 바꾸어서 원래 내가 렌더링 하려던 것을 렌더링 시킨다!

  // => 부모 컴포넌트에서 api통신으로 전부 데이터를 받고 이것을 자식으로 넘길떄 생기는

  // 렌더링 오류를 해결,,,

  useEffect(() => {
    getAndFeedDetail().then(() => {
      setLoadingFinsh(true);
    });
  }, [loadingFinsh]);

  console.log(feedSeq);
  console.log(FeedDetails);
  return (
    // <>hi</>
    <div>
      {loadingFinsh ? (
        <div key={FeedDetails.feedSeq} style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <Feedheader
              nickname={FeedDetails.nickname}
              userImage={FeedDetails.userImage}
              feedSeq={FeedDetails.feedSeq}
              placeName={FeedDetails.placeName}
              address={FeedDetails.address}
              amIOwner={FeedDetails.amIOwner}
              placeSeq={FeedDetails.placeSeq}
            />
          </div>
          <div>
            <Feedimages images={FeedDetails.images} />
          </div>
          <div>
            <Feedcontent
              ratings={FeedDetails.ratings}
              content={FeedDetails.content}
              createDate={FeedDetails.createDate}
              moods={FeedDetails.moods}
              feedSeq={FeedDetails.feedSeq}
              placeSeq={FeedDetails.placeSeq}
            />
          </div>
          <div>
            <Feedfooter
              amILike={FeedDetails.amILike}
              likesCnt={FeedDetails.likesCnt}
              commentsCnt={FeedDetails.commentsCnt}
              feedSeq={FeedDetails.feedSeq}
              placeSeq={FeedDetails.placeSeq}
              content={FeedDetails.content}
              userImage={FeedDetails.userImage}
              nickname={FeedDetails.nickname}
              createDate={FeedDetails.createDate}
            />
          </div>
        </div>
      ) : (
        <CustomSpin>
          <Spin size="large" />
        </CustomSpin>
      )}
    </div>
  );
}

export default FeedDetail;
