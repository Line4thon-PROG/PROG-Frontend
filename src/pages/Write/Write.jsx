import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import back from '../../assets/images/Back.svg';
import styled from 'styled-components';
import progress from '../../assets/images/Register1.svg';
import searchIcon from '../../assets/images/Search.svg';
import checkbox from '../../assets/images/Checkbox2.svg';
import web from '../../assets/images/Web.svg';
import android from '../../assets/images/Android.svg';
import ios from '../../assets/images/IOS.svg';
import close from '../../assets/images/Close.svg';
import picture from '../../assets/images/Picture.svg';
import active from '../../assets/images/ActiveCheck.svg';
import StackiconActive from '../../assets/images/StackActive.svg';
import Genreicon from '../../assets/images/Genreicon.svg';
import Stackicon from '../../assets/images/Stackicon.svg';
import GenreiconActive from '../../assets/images/GenreActive.svg';
import { useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../../api/baseURL';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Back = styled.img`
  width: 1.8vw;
  height: 1.8vw;
  margin-top: 3vw;
  margin-bottom: 1vw;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Register = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.9vw;
  letter-spacing: -0.7px;
`;

const Share = styled.p`
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
`;

const Progress = styled.img`
  width: 10vw;
  height: 2vw;
`;

const Title = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
  margin-top: 2.8vw;
`;

const TitleInputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 4vw;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 0.8vw;
  padding-right: 3vw;
  border-radius: 0.4vw;
  border: 1px solid
    ${({ isFocused, value }) =>
      isFocused ? 'rgba(0, 193, 58, 0.5)' : value ? '#00C13A' : '#767676'};
  background: ${({ isFocused, value }) =>
    isFocused ? 'rgba(0, 193, 58, 0.1)' : value ? '#111' : '#262626'};
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  margin-top: 0.4vw;

  ::placeholder {
    color: var(--Font-05_Gray_Disabled, #999);
  }
`;

const CharCount = styled.span`
  position: absolute;
  right: 1vw;
  top: 58%;
  transform: translateY(-50%);
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
`;

const Person = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
`;

const PersonInput = styled.input`
  width: 24.4vw;
  height: 2.8vw;
  flex-shrink: 0;
  border-radius: 0.4vw;
  border: 1px solid
    ${({ isFocused, value }) =>
      isFocused ? 'rgba(0, 193, 58, 0.5)' : value ? '#00C13A' : '#767676'};
  background: ${({ isFocused, value }) =>
    isFocused ? 'rgba(0, 193, 58, 0.1)' : value ? '#111' : '#262626'};
  padding: 0.8vw;
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
  letter-spacing: -0.4px;

  ::placeholder {
    color: var(--Font-05_Gray_Disabled, #999);
  }
`;

const PersonInputContainer = styled.div`
  position: relative;
  width: 24.4vw;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 1vw;
  top: 48%;
  transform: translateY(-50%);
  width: 1.2vw;
  height: 1.2vw;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
  align-items: flex-start;
  margin-top: 0.35vw;
`;

const ListContainer = styled.div`
  display: inline-flex;
  padding: 1vw 1.6vw 1vw 1vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.6vw;
  border-radius: 0.6vw;
  border: 1px solid var(--Font-05_Gray_Disabled, #999);
  background: #262626;
  width: 24.4vw;
  height: 18vw;
`;

const Participant = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1vw;
  letter-spacing: -0.35px;
`;

const Period = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
  margin-top: 4vw;
  margin-bottom: 0.4vw;
`;

const CheckBox = styled.img`
  width: 1.6vw;
  height: 1.6vw;
`;

const Web = styled.img`
  width: 3.7vw;
  height: 1.4vw;
`;

const RowContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const SelectContainer = styled.div`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  border-radius: 0.4vw;
  border: 1px solid var(--Font-05_Gray_Disabled, #999);
  background: #111;
  padding: 1.6vw;
`;

const Genre = styled.img`
  width: 1.2vw;
  height: 1.2vw;
`;

const Circle = styled.div`
  display: flex;
  padding: 0.5vw 0.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: 5vw;
  border: 1px solid ${({ isSelected }) => (isSelected ? '#00C13A' : '#505050')};
  background: #111;
  color: ${({ isSelected }) => (isSelected ? '#00C13A' : '#999')};
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const deploymentTypes = [
  { src: web, width: '3.7vw', height: '1.4vw', label: 'WEB' },
  { src: ios, width: '3.25vw', height: '1.4vw', label: 'IOS' },
  { src: android, width: '5.3vw', height: '1.4vw', label: 'ANDROID' },
];

const SelectedContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1vw;
  align-items: center;
  border-radius: 0.4vw;
  background: #262626;
  margin-top: 1vw;
  min-height: 4.2vw;
  height: auto;
  flex-wrap: wrap;
  gap: 0.5vw;
`;

const SelectedGenre = styled.div`
  display: inline-flex;
  padding: 0.5vw 0.8vw;
  margin-right: 0.5vw;
  margin-bottom: 0.5vw;
  justify-content: center;
  align-items: center;
  border-radius: 5vw;
  border: 1px solid #00c13a;
  color: #00c13a;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
`;

const Close = styled.img`
  width: 0.8vw;
  height: 0.8vw;
  cursor: pointer;
  margin-left: 0.5vw;
`;

const PlusImage = styled.div`
  width: 24.4vw;
  height: 13.75vw;
  border-radius: 0.4vw;
  background: #7a7a7a;
  overflow: hidden;
  margin-top: 1vw;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img`
  width: ${({ isIcon }) => (isIcon ? '1.8vw' : '100%')};
  height: ${({ isIcon }) => (isIcon ? '1.8vw' : '100%')};
  object-fit: ${({ isIcon }) => (isIcon ? 'contain' : 'cover')};
`;

const Line = styled.div`
  width: 100%;
  height: 0.5vw;
  border-radius: 0.2vw;
  background: #1b1b1b;
  margin-bottom: 1.2vw;
  margin-top: 4vw;
`;

const ContentBlank = styled.textarea`
  display: flex;
  width: 100%;
  padding: 1vw;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5vw;
  border-radius: 0.4vw;
  height: 36.1vw;
  border: 1px solid
    ${({ isFocused, value }) =>
      isFocused ? 'rgba(0, 193, 58, 0.5)' : value ? '#00C13A' : '#767676'};
  background: ${({ isFocused, value }) =>
    isFocused ? 'rgba(0, 193, 58, 0.1)' : value ? '#111' : '#262626'};
  padding: 1vw;
  margin-top: 0.4vw;
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1vw;
  letter-spacing: -0.375px;
  margin-bottom: 4vw;
  resize: none;

  ::placeholder {
    color: var(--Font-05_Gray_Disabled, #999);
    font-family: Pretendard;
    font-size: 0.75vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1.1vw;
    letter-spacing: -0.375px;
  }

  &:focus {
    outline: none;
  }
`;

const ExplainImageContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  height: auto;
  padding: 1vw;
  /* justify-content: center; */
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.6vw;
  border: 1px solid #767676;
  background: #262626;
  margin-top: 1vw;
  margin-bottom: 6vw;
`;

const Btn = styled.button`
  display: flex;
  width: 30.5vw;
  padding: 0.8vw 0px;
  justify-content: center;
  align-items: center;
  border-radius: 0.4vw;
  background: ${({ allFieldsFilled }) =>
    allFieldsFilled ? '#00C13A' : '#999'};
  color: var(--Font-01_White, #fff);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  cursor: ${({ allFieldsFilled }) =>
    allFieldsFilled ? 'pointer' : 'not-allowed'};
`;

const ImageBox = styled.div`
  display: flex;
  width: 47.8vw;
  height: 6.65vw;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.4vw;
  background: #7a7a7a;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2vw;
`;

const Address = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  margin-top: 1.6vw;
  margin-bottom: 0.6vw;
`;

const AddressInput = styled.input`
  width: 100%;
  height: 2.8vw;
  flex-shrink: 0;
  border-radius: 0.4vw;
  border: 1px solid
    ${({ isFocused, value }) =>
      isFocused ? 'rgba(0, 193, 58, 0.5)' : value ? '#00C13A' : '#767676'};
  background: ${({ isFocused, value }) =>
    isFocused ? 'rgba(0, 193, 58, 0.1)' : value ? '#111' : '#262626'};
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2vw;
  letter-spacing: -0.4px;
  padding: 0.8vw;

  ::placeholder {
    color: var(--Font-05_Gray_Disabled, #999);
    font-family: Pretendard;
    font-size: 0.8vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2vw;
    letter-spacing: -0.4px;
  }

  &:focus {
    outline: none;
  }
`;

const GenreP = styled.p`
  color: var(--Font-05_Gray_Disabled, #999);
  font-family: Pretendard;
  font-size: 1vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4vw;
  letter-spacing: -0.5px;
`;

const GenreContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2vw;
`;

const FileInput = styled.input`
  display: none;
`;

const ParticipantContainer = styled.div`
  display: flex;
  padding: 0.7vw 4.1vw 0.7vw 0.7vw;
  align-items: center;
  width: 21.8vw;
  height: 2.4vw;
  margin-top: 0.6vw;
  align-self: stretch;
  border-radius: 0.4vw;
  background: #333;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1vw;
  letter-spacing: -0.35px;
`;

const SearchBoxContainer = styled.div`
  width: 24.4vw;
  height: 2.4vw;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1vw;
  padding: 0.7vw;
  border-radius: 0.4vw;
  border: 1px solid rgba(0, 193, 58, 0.5);
  letter-spacing: -0.35px;
  margin-top: 0.45vw;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddButton = styled.button`
  color: #00c13a;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1vw;
  letter-spacing: -0.35px;
`;

const RoleInput = styled.input`
  color: #fff;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 400;
  margin-left: 0.2vw;
  line-height: 1vw;
  letter-spacing: -0.35px;
`;

const ExplainImage = styled.img`
  width: 47.8vw;
  height: 26.85vw;
`;

function Write() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [person, setPerson] = useState('');
  const [period, setPeriod] = useState('');
  const [content, setContent] = useState('');
  const [webAddress, setWebAddress] = useState('');
  const [iosAddress, setIosAddress] = useState('');
  const [androidAddress, setAndroidAddress] = useState('');
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isContentFocused, setIsContentFocused] = useState(false);
  const [isPersonFocused, setIsPersonFocused] = useState(false);
  const [isPeriodFocused, setIsPeriodFocused] = useState(false);
  const [isSummaryFocused, setIsSummaryFocused] = useState(false);
  const [isWebAddressFocused, setIsWebAddressFocused] = useState(false);
  const [isIosAddressFocused, setIsIosAddressFocused] = useState(false);
  const [isAndroidAddressFocused, setIsAndroidAddressFocused] = useState(false);
  const [genreRows, setGenreRows] = useState([]);
  const [stackRows, setStackRows] = useState([]);
  const [isGenreActive, setIsGenreActive] = useState(true);
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [participantList, setParticipantList] = useState([]);
  const [stackSearch, setStackSearch] = useState('');
  const [isStackFocused, setIsStackFocused] = useState(false);
  const [stackList, setStackList] = useState([]);
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [roles, setRoles] = useState({});
  const navigate = useNavigate();

  const allFieldsFilled =
    title.trim() &&
    summary.trim() &&
    period.trim() &&
    content.trim() &&
    selectedGenres.length > 0 &&
    selectedStacks.length > 0 &&
    selectedParticipants.length > 0;

  const handleSubmit = async () => {
    const token = localStorage.getItem('access');

    // FormData 생성
    const formData = new FormData();

    // JSON 데이터 추가
    const jsonData = {
      collaborator: selectedParticipants.map((participant) => ({
        role: roles[participant.id] || '',
        is_leader: participant.id === selectedParticipants[0]?.id,
        account_id: participant.id,
        nickname: participant.nickname,
      })),
      project_platform: Object.keys(activeTypes)
        .filter((key) => activeTypes[key])
        .map((platform) => (platform === 'WEB' ? 'Web' : platform)),
      project_stack: selectedStacks,
      project_genre: selectedGenres,
      project_university: Array.from(
        new Set(selectedParticipants.map((p) => p.university))
      ),
      project_name: title,
      simple_description: summary,
      detail_description: content,
      period: period,
      ...(webAddress && activeTypes.WEB ? { web_link: webAddress } : {}),
      ...(iosAddress && activeTypes.IOS ? { ios_link: iosAddress } : {}),
      ...(androidAddress && activeTypes.Android
        ? { android_link: androidAddress }
        : {}),
    };

    formData.append('jsonData', JSON.stringify(jsonData)); // JSON 데이터를 문자열로 추가

    // 이미지 데이터 추가
    if (imageSrc) {
      formData.append('project_thumbnail', imageSrc); // 썸네일 파일 추가
    }
    imageSrcList.forEach((file) => {
      formData.append('images', file); // 다중 이미지 파일 추가
    });

    // FormData 확인
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post(`${baseURL}/api/project/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('프로젝트 전송 성공:', response.data);

      // 성공 시 페이지 이동
      navigate('/Success');
    } catch (error) {
      console.error(
        '프로젝트 전송 실패:',
        error.response?.data || error.message
      );
      alert('프로젝트 등록에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  //참여자 검색
  const searchParticipants = async () => {
    try {
      const token = localStorage.getItem('access');
      const response = await axios.post(
        `${baseURL}/api/accounts/finduser`,
        { username: person },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setParticipantList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('참여자 검색 실패:', error);
    }
  };

  // 기술 스택 검색 기능
  const searchStacks = async () => {
    try {
      const token = localStorage.getItem('access');
      const response = await axios.post(
        `${baseURL}/api/search/stack/input`,
        { stackName: stackSearch },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStackList(response.data);
      console.log('스택 검색', response.data);
    } catch (error) {
      console.error('스택 검색 실패:', error);
    }
  };

  const [activeTypes, setActiveTypes] = useState({
    WEB: false,
    IOS: false,
    Android: false,
  });

  const [imageSrcList, setImageSrcList] = useState([]);

  const handleMultipleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageSrcList((prevList) => [...prevList, ...files]); // 원본 File 객체 저장
  };

  const toggleGenre = (genre) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genre)
        ? prevSelectedGenres.filter((g) => g !== genre)
        : [...prevSelectedGenres, genre]
    );
  };

  const removeGenre = (genre) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.filter((g) => g !== genre)
    );
  };

  const handleFocus = (setFocus) => () => setFocus(true);
  const handleBlur = (setFocus) => () => setFocus(false);

  const toggleDeploymentType = (label) => {
    setActiveTypes((prevActiveTypes) => ({
      ...prevActiveTypes,
      [label]: !prevActiveTypes[label],
    }));
  };

  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSrc(file); // 원본 File 객체 저장
    } else {
      console.error('파일이 선택되지 않았습니다.');
    }
  };

  const removeStack = (stack) => {
    setSelectedStacks((prevSelectedStacks) =>
      prevSelectedStacks.filter((s) => s !== stack)
    );
  };

  const toggleStack = (stack) => {
    setSelectedStacks((prevSelectedStacks) =>
      prevSelectedStacks.includes(stack)
        ? prevSelectedStacks.filter((s) => s !== stack)
        : [...prevSelectedStacks, stack]
    );
  };

  const handleRoleChange = (participantId, role) => {
    setRoles((prevRoles) => ({
      ...prevRoles,
      [participantId]: role,
    }));
  };

  const addParticipant = () => {
    if (!selectedParticipants.some((p) => p.id === participantList.id)) {
      setSelectedParticipants([...selectedParticipants, participantList]);
    }
  };

  // 장르 및 기술 스택 가져오기
  useEffect(() => {
    const token = localStorage.getItem('access');

    const fetchGenres = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/search/genre`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const genres = response.data.genre;
        const rows = [];
        const itemsPerRow = 10;
        for (let i = 0; i < genres.length; i += itemsPerRow) {
          rows.push(genres.slice(i, i + itemsPerRow));
        }
        setGenreRows(rows);
      } catch (error) {
        console.error('장르 목록을 가져오는데 실패했습니다:', error);
      }
    };

    const fetchStacks = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/search/stack`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const stacks = response.data.stack;
        const rows = [];
        const itemsPerRow = 8;
        for (let i = 0; i < stacks.length; i += itemsPerRow) {
          rows.push(stacks.slice(i, i + itemsPerRow));
        }
        setStackRows(rows);
      } catch (error) {
        console.error('기술 스택 목록을 가져오는데 실패했습니다:', error);
      }
    };

    fetchGenres();
    fetchStacks();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Back src={back} />
        <FirstContainer>
          <Register>프로젝트 등록</Register>
          <Progress src={progress} />
        </FirstContainer>
        <Share>
          나의 프로젝트를 더 다양한 시각에서 바라볼 수 있도록 등록하여 널리
          공유해보세요!
        </Share>
        <Title>프로젝트 제목</Title>
        <TitleInputContainer>
          <TitleInput
            placeholder="프로젝트 제목을 입력해 주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isFocused={isTitleFocused}
            onFocus={handleFocus(setIsTitleFocused)}
            onBlur={handleBlur(setIsTitleFocused)}
          />

          <CharCount>{title.length}/50</CharCount>
        </TitleInputContainer>
        <Person>프로젝트 참여자</Person>
        <RowContainer>
          <ColumnContainer>
            <PersonInputContainer>
              <PersonInput
                placeholder="참여자 아이디를 입력해주세요"
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                isFocused={isPersonFocused}
                onFocus={handleFocus(setIsPersonFocused)}
                onBlur={handleBlur(setIsPersonFocused)}
              />
              <SearchIcon
                src={searchIcon}
                alt="돋보기 아이콘"
                onClick={searchParticipants}
              />
            </PersonInputContainer>
            <SearchBoxContainer>
              {participantList.nickname} | {participantList.university}
              <AddButton onClick={addParticipant}>추가</AddButton>
            </SearchBoxContainer>
          </ColumnContainer>

          <ListContainer>
            <Participant>참여자 목록</Participant>
            <ul>
              {selectedParticipants.map((participant) => (
                <ParticipantContainer key={participant.id}>
                  {participant.nickname} | {participant.university} |
                  <RoleInput
                    type="text"
                    placeholder="역할을 입력해 주세요"
                    value={roles[participant.id] || ''}
                    onChange={(e) =>
                      handleRoleChange(participant.id, e.target.value)
                    }
                  />
                </ParticipantContainer>
              ))}
            </ul>
          </ListContainer>
        </RowContainer>

        <RowContainer>
          <Container>
            <Period>프로젝트 기간</Period>
            <PersonInput
              placeholder="EX) 0000-00-00 ~ 0000-00-00"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              isFocused={isPeriodFocused}
              onFocus={handleFocus(setIsPeriodFocused)}
              onBlur={handleBlur(setIsPeriodFocused)}
            />
          </Container>

          <Container style={{ width: '100%' }}>
            <Period>배포 프로젝트 유형</Period>
            <RowContainer2 style={{ marginTop: '0.7vw', gap: '2.4vw' }}>
              {deploymentTypes.map((type, index) => (
                <RowContainer2
                  key={index}
                  style={{ alignItems: 'center', gap: '0.6vw' }}
                >
                  <CheckBox
                    src={activeTypes[type.label] ? active : checkbox}
                    alt={`${type.label} 체크박스`}
                    onClick={() => toggleDeploymentType(type.label)}
                  />
                  <Web
                    src={type.src}
                    style={{ width: type.width, height: type.height }}
                  />
                </RowContainer2>
              ))}
            </RowContainer2>

            {activeTypes['WEB'] && (
              <Container>
                <Address>프로젝트 주소 | Web</Address>
                <AddressInput
                  placeholder="Ex) 배포된 웹 사이트 주소"
                  value={webAddress}
                  isFocused={isWebAddressFocused}
                  onChange={(e) => setWebAddress(e.target.value)}
                  onFocus={() => setIsWebAddressFocused(true)}
                  onBlur={() => setIsWebAddressFocused(false)}
                />
              </Container>
            )}

            {activeTypes['IOS'] && (
              <Container>
                <Address>프로젝트 주소 | iOS</Address>
                <AddressInput
                  placeholder="Ex) APP Store 링크"
                  value={iosAddress}
                  isFocused={isIosAddressFocused}
                  onChange={(e) => setIosAddress(e.target.value)}
                  onFocus={() => setIsIosAddressFocused(true)}
                  onBlur={() => setIsIosAddressFocused(false)}
                />
              </Container>
            )}

            {activeTypes['ANDROID'] && (
              <Container>
                <Address>프로젝트 주소 | Android</Address>
                <AddressInput
                  placeholder="Ex) Google Play 링크"
                  value={androidAddress}
                  isFocused={isAndroidAddressFocused}
                  onChange={(e) => setAndroidAddress(e.target.value)}
                  onFocus={() => setIsAndroidAddressFocused(true)}
                  onBlur={() => setIsAndroidAddressFocused(false)}
                />
              </Container>
            )}
          </Container>
        </RowContainer>

        <Period>프로젝트 태그</Period>
        <SelectContainer>
          <RowContainer2 style={{ gap: '1.4vw' }}>
            <GenreContainer onClick={() => setIsGenreActive(true)}>
              <Genre src={isGenreActive ? GenreiconActive : Genreicon} />
              <GenreP style={{ color: isGenreActive ? '#00C13A' : '#999' }}>
                장르
              </GenreP>
            </GenreContainer>

            <GenreContainer onClick={() => setIsGenreActive(false)}>
              <Genre src={!isGenreActive ? StackiconActive : Stackicon} />
              <GenreP style={{ color: !isGenreActive ? '#00C13A' : '#999' }}>
                기술 스택
              </GenreP>
            </GenreContainer>
          </RowContainer2>

          {isGenreActive ? (
            // 장르 선택
            genreRows.map((row, rowIndex) => (
              <RowContainer2
                key={rowIndex}
                style={{
                  marginTop: rowIndex > 0 ? '0.4vw' : '1.6vw',
                  gap: '0.4vw',
                }}
              >
                {row.map((genre) => (
                  <Circle
                    key={genre}
                    isSelected={selectedGenres.includes(genre)}
                    onClick={() => toggleGenre(genre)}
                  >
                    {genre}
                  </Circle>
                ))}
              </RowContainer2>
            ))
          ) : (
            <>
              <PersonInputContainer style={{ marginTop: '1vw' }}>
                <PersonInput
                  placeholder="기술 스택을 검색해보세요"
                  value={stackSearch}
                  onChange={(e) => setStackSearch(e.target.value)}
                  isFocused={isStackFocused}
                  onFocus={handleFocus(setIsStackFocused)}
                  onBlur={handleBlur(setIsStackFocused)}
                />
                <SearchIcon src={searchIcon} alt="돋보기 아이콘" />
              </PersonInputContainer>

              {stackRows.map((row, rowIndex) => (
                <RowContainer2
                  key={rowIndex}
                  style={{
                    marginTop: rowIndex > 0 ? '0.4vw' : '0.9vw',
                    gap: '0.4vw',
                  }}
                >
                  {row.map((stack) => (
                    <Circle
                      key={stack}
                      isSelected={selectedStacks.includes(stack)}
                      onClick={() => toggleStack(stack)}
                    >
                      {stack}
                    </Circle>
                  ))}
                </RowContainer2>
              ))}
            </>
          )}
        </SelectContainer>

        <SelectedContainer>
          {selectedGenres.map((genre) => (
            <SelectedGenre key={genre}>
              {genre}
              <Close src={close} onClick={() => removeGenre(genre)} />
            </SelectedGenre>
          ))}
          {selectedStacks.map((stack) => (
            <SelectedGenre key={stack}>
              {stack}
              <Close src={close} onClick={() => removeStack(stack)} />
            </SelectedGenre>
          ))}
        </SelectedContainer>

        <Period>프로젝트 썸네일 등록</Period>
        <Share>썸네일 최대 해상도 : 488 X 275</Share>
        <PlusImage onClick={() => document.getElementById('fileInput').click()}>
          {imageSrc ? (
            <Picture src={imageSrc} alt="Project Thumbnail" />
          ) : (
            <Picture src={picture} alt="Placeholder" isIcon />
          )}
          <FileInput
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
          />
        </PlusImage>

        <Line />

        <Title>프로젝트 한 줄 요약</Title>
        <TitleInputContainer>
          <TitleInput
            placeholder="나의 프로젝트를 한 줄로 요약해 보세요!"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            isFocused={isSummaryFocused}
            onFocus={handleFocus(setIsSummaryFocused)}
            onBlur={handleBlur(setIsSummaryFocused)}
          />
          <CharCount>{title.length}/50</CharCount>
        </TitleInputContainer>

        <Title style={{ marginTop: '0vw' }}>프로젝트 내용 설명</Title>
        <ContentBlank
          placeholder="프로젝트에 대한 설명을 작성해 주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isFocused={isContentFocused}
          onFocus={handleFocus(setIsContentFocused)}
          onBlur={handleBlur(setIsContentFocused)}
        />

        <Title style={{ marginTop: '0vw' }}>프로젝트 설명 이미지 첨부</Title>
        <Share>이미지 최대 해상도 : 956 X 537</Share>
        <ExplainImageContainer>
          {imageSrcList.map((src, index) => (
            <ExplainImage
              key={index}
              src={src}
              alt={`Project Image ${index + 1}`}
            />
          ))}

          <ImageBox
            onClick={() => document.getElementById('multiFileInput').click()}
          >
            <img
              src={picture}
              alt="Placeholder"
              style={{ width: '1.8vw', height: '1.8vw' }}
            />
            <FileInput
              type="file"
              id="multiFileInput"
              accept="image/*"
              multiple
              onChange={handleMultipleImageChange}
            />
          </ImageBox>
        </ExplainImageContainer>

        <BtnContainer>
          <Btn
            allFieldsFilled={allFieldsFilled}
            onClick={handleSubmit}
            disabled={!allFieldsFilled}
          >
            다음
          </Btn>
        </BtnContainer>
      </Container>
    </>
  );
}

export default Write;
