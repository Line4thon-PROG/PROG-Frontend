import React, { useState } from "react";
import * as S from "./discussBoxStyled";
import ProjectInfoBox from "./projectInfoBox";
import DefaultThumbnail from "../../assets/images/default_discussThumbnail.svg";
import FeedbackIcon from "../../assets/images/feedback_icon.svg";
import { useProjectDiscussion } from "../../hooks/useProjectDiscussion"; // Import the custom hook
import ArrowLeft from "../../assets/images/arrow_left.svg";
import ArrowRight from "../../assets/images/arrow_right.svg";

const DiscussBox = ({ project_id }) => {
    const { discussions, error } = useProjectDiscussion(project_id); // Fetch discussions
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image index for slideshow

    if (error) {
        console.log("discussion box error fetching data");
    }

    return (
        <S.Container>
            {(discussions && discussions.length > 0 ? discussions : [{ 
                id: 48484848,
                images: [{ image: DefaultThumbnail }, { image: DefaultThumbnail },{ image: DefaultThumbnail },],
                discussion_writer: { nickname: "Default User", role: "Human", university: "LikeLionUNIV" },
                title: "Default Title",
                description: "등록된 데이터가 없습니다. 움하하 움하핫"
            }]).map((discussion) => {
                const { id, images, discussion_writer, title, description } = discussion;
                const currentImage = images.length > 0 ? images[currentImageIndex]?.image : DefaultThumbnail;

                return (
                    <S.ContentWrapper key={id}>
                        <S.ContentThumbnail>
                            <img className="thumb" src={currentImage} alt="Discussion Thumbnail" />
                            {images.length > 1 && (
                                <>
                                    <button className="arrow_left" onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}>
                                        <img src={ArrowLeft} alt="Previous" />
                                    </button>
                                    <button className="arrow_right" onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}>
                                        <img src={ArrowRight} alt="Next" />
                                    </button>
                                </>
                            )}
                        </S.ContentThumbnail>
                        
                        {/* Discussion Text Content */}
                        <S.ContentText>
                            <S.Content_Who>{`${discussion_writer.nickname} | ${discussion_writer.role}`}</S.Content_Who> {/* Writer details */}
                            <S.Content_Title>{title}</S.Content_Title> {/* Title of the discussion */}
                            <S.Content_What>
                                {description}
                            </S.Content_What> {/* Description */}
                        </S.ContentText>
                    </S.ContentWrapper>
                );
            })}

            {/* Feedback Section */}
            <S.FeedbackBlock>
                <S.GoFeedBack>
                    <img src={FeedbackIcon} alt="Feedback Icon" />피드백 확인하기
                </S.GoFeedBack>
                피드백을 확인해보고 직접 남겨보며, 포인트도 얻어가세요!
            </S.FeedbackBlock>
        </S.Container>
    );
};

export default DiscussBox;
