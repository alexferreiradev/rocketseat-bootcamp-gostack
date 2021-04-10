import styled from 'styled-components';

export const Container = styled.div`
  min-height: 64px;
  max-height: 100px;
  background: #fff;
  padding: 0 30px;
  @media screen and (max-width: 430px) {
    padding: 0 4px;
  }
`;
export const Content = styled.div`
  min-height: 64px;
  max-height: 100px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 430px) {
    flex-direction: column;
    max-height: 400px;
    justify-content: space-around;
  }
  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      border-left: 1px solid #eee;
      padding-left: 8px;
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;
export const Profile = styled.div`
  display: flex;
  margin: 20px;
  padding: 4px 20px;
  border-right: 1px solid #eee;
  min-height: 50px;

  @media screen and (max-width: 430px) {
    margin-top: 8px;
    border-right: 1px solid #eee;
    border-left: none;
    margin-left: 0px;
    padding-left: 0px;
    margin-right: 8px;
    padding-right: 8px;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
