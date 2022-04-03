/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { Tabs, Menu, Dropdown, Button } from 'antd';
import { useAppDispatch } from 'app/store';
import Forme from './Forme';
import Trends from './Trends';
import { ReactComponent as Adjustment } from '../../../assets/distance_adjust.svg';
import { setRadius } from '../mainSlice';

const { TabPane } = Tabs;

function FormeAndTrends() {
  const [value, setValue] = useState<number>(15000);
  const [distance, setDistance] = useState('1.5km');
  const dispatch = useAppDispatch();

  const setFormeAndTrends = (key: string) => {
    switch (key) {
      case '1':
        break;
      case '2':
        break;
      case '3':
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          console.log();
          setValue(5000);
          dispatch(setRadius(500));
          setDistance('500m');
        }}
        key="1"
      >
        500m
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setValue(10000);
          dispatch(setRadius(1000));
          setDistance('1km');
        }}
        key="2"
      >
        1km
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setValue(15000);
          dispatch(setRadius(1500));

          setDistance('1.5km');
        }}
        key="3"
      >
        1.5km
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setValue(20000);
          dispatch(setRadius(2000));

          setDistance('2km');
        }}
        key="4"
      >
        2km
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setValue(25000);
          dispatch(setRadius(2500));
          setDistance('2.5km');
        }}
        key="5"
      >
        2.5km
      </Menu.Item>
    </Menu>
  );
  console.log(value);

  return (
    <div style={{ marginTop: '1rem', padding: '20px' }}>
      <div
        onClick={() => {
          console.log('여기');
        }}
        style={{ position: 'absolute', right: '10px', marginRight: '60px', marginTop: '20px', zIndex: 1 }}
      >
        <Dropdown.Button overlay={menu} placement="bottom" icon={<Adjustment />} style={{ border: 'none' }} />
        {/* <Adjustment /> */}
      </div>
      <div
        style={{
          position: 'absolute',
          right: '10px',
          marginTop: '20px',
          marginRight: '10px',
          fontFamily: 'NotoSansKR',
          fontSize: '15px',
        }}
      >
        {distance}
      </div>
      <Tabs defaultActiveKey="1" onChange={setFormeAndTrends}>
        <TabPane tab={<span style={{ fontFamily: 'NotoSansKR', fontSize: '18px' }}>&nbsp;For me</span>} key="1">
          <Forme />
        </TabPane>
        <TabPane tab={<span style={{ fontFamily: 'NotoSansKR', fontSize: '18px' }}>&nbsp;Trend</span>} key="2">
          <Trends />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default FormeAndTrends;
