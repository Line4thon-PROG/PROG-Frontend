import SignupHeader from '../../components/Signup/SignupHeader';
import second from '../../assets/images/Second.svg';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../api/baseURL';
import { useEffect } from 'react';

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
  const [genreRows, setGenreRows] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state;

  //장르 목록 불러오기
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/search/genre`);
        console.log('데이터:', response.data);
        const genres = response.data.genre;

        if (Array.isArray(genres) && genres.length > 0) {
          const rows = [];
          const itemsPerRow = 4;
          for (let i = 0; i < genres.length; i += itemsPerRow) {
            rows.push(genres.slice(i, i + itemsPerRow));
          }
          setGenreRows(rows);
          console.log('장르 목록:', rows);
        } else {
          console.error('예상치 못한 데이터 형식:', genres);
        }
      } catch (error) {
        console.error('장르 목록을 가져오는데 실패했습니다:', error);
      }
    };

    fetchGenres();
  }, []);

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
        {genreRows.length > 0 ? (
          genreRows.map((row, rowIndex) => (
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
          ))
        ) : (
          <p>로딩 중...</p>
        )}
      </ChoiceContainer>
      <Button isActive={selectedGenres.length > 0} onClick={goNext}>
        완료하기
      </Button>
    </Container>
  );
}

export default Genre;
