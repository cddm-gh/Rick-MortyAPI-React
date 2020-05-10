import styled from 'styled-components';

export const Container = styled.div`
  width: 22%;
  word-wrap: break-word;
  background-color: #333333;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  margin: 0.5rem;

  @media (max-width: 768px){
    width: 30%
  }
  @media (max-width: 600px) {
    width: 40%;
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;
export const Header = styled.div`
  position: relative;
  width: 100%;
`;
export const Title = styled.div`
  width: 100%;
  opacity: 0.8;
  position: absolute;
  bottom: 0px;
  background: rgb(32, 35, 41);
  padding: 0.625rem;
  & h2 {
    color: rgb(245, 245, 245);
    font-size: 1.625rem;
    font-weight: 400;
    font-stretch: expanded;
    margin: 0px;
  }
  & p {
    color: rgb(187, 187, 187);
    font-size: 0.875rem;
    margin: 0px;
  }
`;
export const Body = styled.div`
  padding: 1rem;
`;
export const Text = styled.p`
  line-height: 25px;
  color: #fff;
`;
export const Image = styled.img`
  width: 100%
`;
export const CharacteristicsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Characteristic = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 0 6px 0;
  :not(:last-of-type) {
    border-bottom: 1px solid rgb(68, 68, 68);
  }
`;
export const CharacteristicTitle = styled.span`
  text-transform: uppercase;
  text-align: left;
`;
export const CharacteristicValue = styled.span`
  text-transform: capitalize;
  color: rgb(255, 152, 0);
  text-align: right;
`;