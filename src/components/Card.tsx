
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentPlayingVideo } from '../redux/action';
import { FaThumbsUp } from 'react-icons/fa';

interface CardProps {
  postId: string;

  creator: {
    name: string;
    handle: string;
    pic: string;
  };

 reaction: {
    count: number
  }

  submission: {
    title: string;
    thumbnail: string;
  };
}

export const Card: React.FC<CardProps> = ({ postId, submission, creator, reaction }) => {
  const { title, thumbnail } = submission;
  const { name, handle, pic } = creator;
  const { count } = reaction;
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(setCurrentPlayingVideo(postId));
  };


  return (
    <Link to={`/video/${postId}`} onClick={handleCardClick}>
      <div className='flex flex-col px-4 py-10 rounded-[20px] items-center movie-card '>
        <img src={thumbnail} style={{ width: "180px", height: "180px" }} className="rounded-full mb-4" alt="Album" />
        <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{title}</h1>

        <div className='flex'>
          <div className='flex justify-space'>
            <img src={pic} alt="creator" style={{ width: "50px", height: "50px" }} className="rounded-full mt-4" />
            <div className='mt-5 ml-4'>
              <h3 className="font-poppins font-semibold text-[15px] leading-[12px] text-white">{name ? name : "streamyx"}</h3>
              <p className="font-poppins font-normal text-[12px] text-dimWhite mt-2">{handle}</p>
            </div>
          </div>
          <div className='ml-8 mt-5'>
            <FaThumbsUp className='text-white' />
            <p className='font-poppins font-normal text-[12px] text-dimWhite'>{count} Likes</p>
          </div>
        </div>
      </div>
    </Link>
  );
};