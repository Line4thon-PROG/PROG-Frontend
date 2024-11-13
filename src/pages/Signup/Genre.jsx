import SignupHeader from '../../components/Signup/SignupHeader';
import second from '../../assets/images/Second.svg';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../api/baseURL';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const ChoiceP = styled.p`
  color: var(--Font-01_White, #fff);
  font-family: Pretendard;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.9vw;
  letter-spacing: -0.7px;
`;

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15vw;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1.2vw;
  gap: 0.4vw;
`;

const Circle = styled.div`
  display: flex;
  padding: 0.5vw 0.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 5vw;
  border: 1px solid
    ${({ isSelected }) =>
      isSelected ? '#00c13a' : 'var(--Font-03_Gray, #505050)'};
  background: #111;
  color: ${({ isSelected }) =>
    isSelected ? '#00c13a' : 'var(--Font-05_Gray_Disabled, #999)'};
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  width: 21.8vw;
  padding: 0.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 0.3vw;
  background: ${({ isActive }) =>
    isActive ? '#00c13a' : 'var(--Font-05_Gray_Disabled, #999)'};
  color: var(--Font-01_White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
`;

function Genre() {
  const genreRows = [
    ['장르1', '장르2', '음식', '음악', '친구'],
    ['가족', '여행', '교육', '건강', '패션', '쇼핑'],
    ['부동산', '환경', '비즈니스', '자기개발', '동물/펫'],
    ['요리/베이킹', '코딩', '힐링', '금융/투자'],
  ];

  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state;

  const toggleGenre = (genre) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genre)
        ? prevSelectedGenres.filter((g) => g !== genre)
        : [...prevSelectedGenres, genre]
    );
  };

  const goNext = async () => {
    if (selectedGenres.length > 0) {
      const requestBody = {
        ...userData,
        favorite_genre: selectedGenres,
      };

      console.log('보낼 데이터:', requestBody);

      try {
        const response = await axios.post(
          `${baseURL}/api/accounts/signup/`,
          requestBody,
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );
        console.log('회원가입 성공:', response.data);
        navigate('/Complete');
      } catch (error) {
        console.error('응답 데이터:', error.response?.data);
      }
    } else {
      alert('최소 하나의 장르를 선택해주세요.');
    }
  };

  return (
    <Container>
      <SignupHeader step={second} />
      <ChoiceContainer>
        <ChoiceP>선호하는 장르를 선택해 주세요</ChoiceP>
        {genreRows.map((row, rowIndex) => (
          <RowContainer key={rowIndex}>
            {row.map((genre, index) => (
              <Circle
                key={index}
                isSelected={selectedGenres.includes(genre)}
                onClick={() => toggleGenre(genre)}
              >
                {genre}
              </Circle>
            ))}
          </RowContainer>
        ))}
      </ChoiceContainer>
      <Button isActive={selectedGenres.length > 0} onClick={goNext}>
        완료하기
      </Button>
    </Container>
  );
}

export default Genre;
