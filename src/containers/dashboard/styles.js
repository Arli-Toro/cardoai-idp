import styled from "styled-components";

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > div {
    width: 24%;
    .ant-card {
      width: 100% !important;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,.1);
    }
    .card-content {
      display: flex;
      justify-content: center;
      align-items: center;
      > div {
        margin: 0 50px 0 0 !important;
      }
    }
  }
`