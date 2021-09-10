import styled from "styled-components";

export default styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #e0f0fb;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-wrapper {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
  }
  .login-content {
    background-color: white;
    padding: 50px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    h1 {
      margin-bottom: 0;
    }
    h4 {
      color: #ADAABA;
    }
    
    label {
      font-weight: 500;
      margin-bottom: 10px;
    }
    
    input {
      width: 300px;
      border: 1px solid #DDDBE7;
      padding: 5px 15px;
      outline: none;
      border-radius: 20px;
      margin-bottom: 10px;
    }
    .login-mt {
      margin-top: 25px;
    }
    .login-mb {
      margin-bottom: 35px;
    }
    button {
      width: 300px;
      border: none;
      outline: none;
      background-color: #3490DC;
      border-radius: 20px;
      padding: 5px 15px;
      color: white;
      cursor: pointer;
    }
  }
  .login-animation-wrapper {
    padding: 50px;
    background-color: #3490DC;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`