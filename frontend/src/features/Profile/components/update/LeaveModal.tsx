import { Button, Radio, Input, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {
  ModalBackground,
  ModalContainer,
  TitleCloseBtn,
  Title,
  Body,
  Footer,
} from 'features/Profile/styles/update/StyledLeaveModal';
import { useSelector } from 'react-redux';
import { ReducerType } from 'app/rootReducer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserApi from '../../../../common/api/UserApi';

function LeaveModal({ setShowModal }: any): any {
  const { leaveWooAhGong } = UserApi
  const [reason, setReason] = useState<number>(1);
  const navigate = useNavigate()

  const handleLeave = async () => {
    const nickname = window.localStorage.getItem('nickname')
    if (nickname !== null) {

      const result = await leaveWooAhGong(nickname)

      if (result.status === 200) {
        window.localStorage.clear()
        navigate(`/`)
      }
      else {
        toast.error(<div style={{ width: 'inherit', fontSize: '14px' }}>올바른 닉네임이 아닙니다.</div>, {
          position: toast.POSITION.TOP_CENTER,
          role: 'alert',
        });
      }
    }
  }

  return (
    <ModalBackground>
      <ModalContainer>
        <TitleCloseBtn>
          <AiOutlineClose onClick={() => setShowModal(false)} />
        </TitleCloseBtn>
        <Title>
          <h2>정말 떠나시겠어요?</h2>
        </Title>
        <Body>
          <Space direction="vertical">
            <h3>떠나시는 이유가 뭘까요?</h3>
            <Radio.Group onChange={(e) => setReason(e.target.value)} value={reason} style={{ textAlign: 'left' }}>
              <Space direction="vertical">
                <Radio value={1}>이용이 불편하고 장애가 많아요.</Radio>
                <Radio value={2}>다른 서비스가 더 좋아요.</Radio>
                <Radio value={3}>제가 원하는 장소가 없어요.</Radio>
                <Radio value={4}>기록을 삭제하고 싶어요.</Radio>
                <Radio value={5}>사용빈도가 낮아요.</Radio>
                <Radio value={6}>
                  기타
                  {reason === 6 ? <Input style={{ width: 150, marginLeft: 10 }} /> : null}
                </Radio>
              </Space>
            </Radio.Group>
          </Space>
        </Body>
        <Footer>
          <Button onClick={handleLeave}>Bye!</Button>
          <Button onClick={() => setShowModal(false)}>Re-Hi!</Button>
        </Footer>
      </ModalContainer>
    </ModalBackground>
  );
}

export default LeaveModal;
