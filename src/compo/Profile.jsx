import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Credit_Movie from './Credit_Movie';

const apiKey = process.env.REACT_APP_API_KEY;

function Profile() {
    const { id } = useParams();
    const [profileData, setProfile] = useState();
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`).then((res) => {
            setProfile(res.data);
            console.log(res.data);
        }).catch(error => {
            console.error("Error fetching profile data: ", error);
        });
    }, [id]);

    const splitBiography = (biography) => {
        return biography.split(/(?<=\.)\s+/); // Split by period followed by a space
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='h-full mx-4 w-full bg-black text-white'>
            {
                profileData ? (
                    <div className='flex flex-col'>
                        <div className='flex justify-center '>
                            <div className='max-w-screen-2xl'>
                                <div className='flex justify-center'>
                                    <div className='md:h-[35vh] m-2 min-w-64 bg-cover bg-center'>
                                        <img className='rounded-xl h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original${profileData.profile_path}`} alt={profileData.name} />
                                    </div>
                                    <div className='ml-10 flex flex-col m-2'>
                                        <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light'>{profileData.name}</span>
                                        <span className='text-2xl sm:text-base lg:text-xl mt-6 mb-3'>Biography</span>
                                        <div className={`text-xs sm:text-sm md:text-base ${isExpanded ? 'max-h-none' : 'max-h-[25vh] overflow-hidden text-ellipsis'}`}>
                                            {splitBiography(profileData.biography).map((sentence, index) => (
                                                <p key={index} className='mb-2 leading-5'>{sentence}</p>
                                            ))}
                                        </div>
                                        <div className='w-full flex justify-end	 '>
                                            <a href='#' onClick={toggleExpand} className='text-right text-blue-500'>
                                            {isExpanded ? 'Read Less' : 'Read More'}
                                        </a>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center w-full '>
                            <div className='max-w-screen-2xl w-full'>
                                <div className='text-left'>
                                        <Credit_Movie creditid = {id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    );
}

export default Profile;
