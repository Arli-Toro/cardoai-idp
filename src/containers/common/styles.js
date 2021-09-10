import styled from "styled-components";

export default styled.div`
  .app-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .topbar-wrraper {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #faf9f8;
    .topbar-title {
      display: flex;
      align-items: center;
      img {
        margin-right: 20px;
      }
      h1 {
        margin: 0;
      }
    }
    .topbar-search {
      display: flex;
      align-items: center;
      border-radius: 5px;
      background-color: #e1dfdd;
      padding: 5px 15px;
      svg {
        margin-right: 15px;
        fill: #71cfe6;
      }
      input {
        border: none;
        outline: none;
        background-color: transparent;
        min-width: 300px;
      }
    }
    .topbar-actions {
      display: flex;
      svg {
        margin-left: 20px;
        width: 20px;
        height: 20px;
      }
    }
  }
  .sidebar-wrapper {
    display: flex;
    flex-direction: column;
    width: 250px;
    position: fixed;
    left: 0;
    top: 80px;
    z-index: 10;
    > div {
      width: 65px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 0 5px 5px 0;
      div {
        transition: .2s;
        img {
          width: 25px;
          height: 25px;
        }
      }
      div:hover {
        background-color: #edebe9;
      }
    }
  }
  .app-content {
    width: calc(100% - 250px);
    height: calc(100vh - 150px);
    position: relative;
    padding: 0 20px 0 0;
    left: 250px;
    top: 100px;
  }
`