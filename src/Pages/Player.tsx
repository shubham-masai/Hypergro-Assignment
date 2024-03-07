import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

interface Video {
    postId: string;
    submission: {
        mediaUrl: string;
        title: string;
        description: string;
    };
}

interface Comment {
    text: string;
    timestamp: string;
}

const Player: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const videosData: Video[] = useSelector((state: any) => state.moviesData);
    const Details: Video[] = videosData.filter((el) => el.postId === id)

    const [dislikes, setDislikes] = useState<number>(+(localStorage.getItem(`${id}_dislikes`) || 0));
    const [likes, setLikes] = useState<number>(+(localStorage.getItem(`${id}_likes`) || 0));

    const [comment, setComment] = useState<string>('');

    const [comments, setComments] = useState<Comment[]>(
        (JSON.parse(localStorage.getItem(`${id}_comments`) || "[]") as Comment[]) || []
    );

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    }

    const handleAddComment = () => {
        if (comment.trim() !== '') {
            const newComment: Comment = { text: comment, timestamp: new Date().toISOString() };
            const updatedComments: Comment[] = [...comments, newComment];
            setComments(updatedComments);
            localStorage.setItem(`${id}_comments`, JSON.stringify(updatedComments));
            setComment('');
        }
    }

    const videoDetails: Video | undefined = Details[0];
    if (!videoDetails) {
        return <div>Loading...</div>;
    }

    const handleLike = () => {
        setLikes(Number(likes) + 1);
        localStorage.setItem(`${id}_likes`, String(Number(likes) + 1));
    }

    const handleDislike = () => {
        setDislikes(Number(dislikes) + 1);
        localStorage.setItem(`${id}_dislikes`, String(Number(dislikes) + 1));
    }

    return (

        <div className="flex flex-col items-center flex-row sm:flex-col">
            <div>
                <video controls className="w-full max-w-[500px] max-h-[500px]">
                    <source src={videoDetails.submission.mediaUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:justify-space sm:item-center ss:flex-col ss:justify-center">
                <div className='flex flex-col w-full sm:w-1/2 px-10 py-12 rounded-[20px] items-center sm:mr-2'>
                    <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{videoDetails.submission.title}</h1>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{videoDetails.submission.description}</p>
                </div>

                <div className="w-full sm:w-1/2 px-10 py-12 sm:mt-0">
                    <div className='flex justify-speace'>
                        <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={handleLike}>Like ({likes})</button>
                        <button className="bg-red-500 text-white px-4 py-2 mr-2" onClick={handleDislike}>Dislike ({dislikes})</button>
                    </div>


                    <div className="mt-2">
                        <h2 className="text-xl font-semibold text-white mb-2">Comments</h2>
                        <ul className="text-white">
                            {comments.map((comment, index) => (
                                <li key={index} className="mb-2">{comment.text}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='mt-2'>
                        <textarea className="w-full h-10 bg-gray-100 p-2 text-black" placeholder="Add a comment"
                            value={comment}
                            onChange={handleCommentChange}
                        ></textarea>
                        <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded-md" onClick={handleAddComment}>Comment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;