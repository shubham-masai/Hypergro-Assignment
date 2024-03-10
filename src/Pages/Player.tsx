import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { Comment, MovieData } from '../types';


const Player: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const videosData: MovieData[] = useSelector((state: any) => state.moviesData);
    const Details: MovieData[] = videosData.filter((el) => el.postId === id);
    const videoDetails: MovieData | undefined = Details[0];

    const storedLiked = localStorage.getItem(`${id}_liked`);
    const [disliked, setDisliked] = useState<boolean>(false);
    const [liked, setLiked] = useState<boolean>(storedLiked ? JSON.parse(storedLiked) : false);

    const [comment, setComment] = useState<string>('');

    const [comments, setComments] = useState<Comment[]>(
        (JSON.parse(localStorage.getItem(`${id}_comments`) || '[]') as Comment[]) || []
    );

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const handleAddComment = () => {
        if (comment.trim() !== '') {
            const newComment: Comment = { text: comment, timestamp: new Date().toISOString() };
            const updatedComments: Comment[] = [...comments, newComment];
            setComments(updatedComments);
            localStorage.setItem(`${id}_comments`, JSON.stringify(updatedComments));
            setComment('');
        }
    };

    if (!videoDetails) {
        return <div>Loading...</div>;
    }

    const handleLike = () => {
        setLiked(!liked);
        localStorage.setItem(`${id}_liked`, JSON.stringify(!liked));
        if (disliked) {
            setDisliked(false);
        }
    };

    const handleDislike = () => {
        setDisliked(!disliked);
        if (liked) {
            setLiked(false);
        }
    };

    return (
        <div className="flex flex-col items-center flex-row sm:flex-col">
            <div>
                <video controls className="w-full max-w-[500px] max-h-[500px]">
                    <source src={videoDetails.submission.mediaUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:justify-space sm:item-center ss:flex-col ss:justify-center">
                <div className="flex flex-col w-full sm:w-1/2 px-10 py-12 rounded-[20px] sm:mr-2">
                    <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                        {videoDetails.submission.title}
                    </h1>
                    <div className="flex items-center">
                        <img
                            src={videoDetails.creator.pic}
                            alt="Creator"
                            className="w-12 h-12 rounded-full mr-6 mt-2 mb-2"
                        />
                        <p className="font-poppins font-normal text-[20px] leading-[24px] text-white">
                            {videoDetails.creator.name}
                        </p>
                    </div>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                        {videoDetails.submission.description}
                    </p>
                </div>

                <div className="w-full sm:w-1/2 px-10 py-12 sm:mt-0">
                    <div className="flex justify-space">
                        <FaThumbsUp
                            className="cursor-pointer mr-2"
                            onClick={handleLike}
                            style={{ color: liked ? 'green' : 'white' }}
                        />
                        <FaThumbsDown
                            className="cursor-pointer ml-4 mr-2"
                            onClick={handleDislike}
                            style={{ color: disliked ? 'red' : 'white' }}
                        />
                    </div>

                    <div className="mt-2">
                        <h2 className="text-xl font-semibold text-white mb-2">Comments</h2>
                        <ul className="text-white">
                            {comments.map((comment, index) => (
                                <li key={index} className="mb-2">
                                    {comment.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-2">
                        <textarea
                            className="w-full h-10 bg-gray-100 p-2 text-black"
                            placeholder="Add a comment"
                            value={comment}
                            onChange={handleCommentChange}
                        ></textarea>
                        <button
                            className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md"
                            onClick={handleAddComment}
                        >
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;