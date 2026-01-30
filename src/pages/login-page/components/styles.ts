import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 100%; 
  height: auto;
  
  padding: 20px;
  box-sizing: border-box; 
  
`;

export const LogoImage = styled.img`
  width: 250px;
  margin-bottom: 25px; 
  display: block; 
  
  @media (max-height: 700px) {
    width: 180px;
    margin-bottom: 15px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  
  padding: 20px; 
  box-sizing: border-box;

`;

export const CardContainer = styled.div`
  background-color: #000;
  padding: 50px 40px;
  border-radius: 25px;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);

  @media (max-height: 700px) {
    padding: 30px 20px;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  text-align: left;
`;

export const InputGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 14px;
  padding-right: 45px;
  border-radius: 10px;
  border: 1px solid #333;
  background-color: #f5f5f5;
  color: #000;
  font-size: 16px;
  box-sizing: border-box;
  margin-top: 8px;
  outline: none;
  font-family: inherit;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: #e50914;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 12px;
  top: 55%; 
  transform: translateY(-50%);
  
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  padding: 0;
  z-index: 10;

  &:hover {
    color: #000;
    opacity: 0.8;
  }
`;
