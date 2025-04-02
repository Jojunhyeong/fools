// KakaoPrank.tsx

import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  font-family: sans-serif;
`;

const Header = styled.div`
  background-color: #ffeb00;
  padding: 16px;
  font-weight: bold;
  font-size: 18px;
`;

const Body = styled.div`
  padding: 16px;
  background-color: white;
`;

const Text = styled.p`
  margin: 8px 0;
  font-size: 14px;
`;

const Button = styled.a`
  display: block;
  margin-top: 12px;
  padding: 10px;
  background-color: #f2f2f2;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    background-color: #ddd;
  }
`;

const KakaoPrank = () => {
  return (
    <Container>
      <Header>송금보내요</Header>
      <Body>
        <Text>1,000,000원을 보냈어요.</Text>
        <Text>송금 받기 전까지 보낸 분은 내역 상세화면에서 취소할 수 있어요.</Text>
        <Button href="https://sites.google.com/view/snuaprilfoolsday" target="_blank">
          송금 받기
        </Button>
      </Body>
    </Container>
  );
};

export default KakaoPrank;
