
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentPlayingVideo } from '../redux/action';

interface CardProps {
  postId: string;
  creator: {
    name: string;
    id: string;
    handle: string;
    pic: string;
  };
  submission: {
    title: string;
    description: string;
    mediaUrl: string;
    thumbnail: string;
  };
}

export const Card: React.FC<CardProps> = ({ postId,submission }) => {
  const { title, description, thumbnail } = submission;

  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(setCurrentPlayingVideo(postId));
  };

  
  return (
    <Link to={`/video/${postId}`} onClick={handleCardClick}>
      <div className='flex flex-col px-10 py-12 rounded-[20px] items-center movie-card '>
        <img src={thumbnail} style={{ width: "200px", height: "200px" }} className="rounded-full mb-4" alt="Album" />
        <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{title}</h1>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};