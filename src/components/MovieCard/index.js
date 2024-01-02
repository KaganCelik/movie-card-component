import '../../tailwind/index.css'
import { Card, Button } from 'react-bootstrap';
import { FaPlay, FaPlus } from "react-icons/fa6";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import movieData from '../../MovieList/movieList.json';

function MovieCard() {
    return (
        <div className='flex justify-center'>
            <div className='w-[900px] max-h-[527px] mt-28 mb-28 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-400'>
                {movieData.map(movie => (
                    <Card className='flex flex-row'>
                    <Card.Img
                        key={movie.id}
                        className='w-[355px] rounded-l-3xl'
                        variant="top"
                        src={movie.pic}
                    />
                        <div key={movie.id} className='flex flex-col w-full justify-around'>
                            <Card.Body>
                                <Card.Title className='text-[32px] ml-10'>{movie.name}</Card.Title>
                                <Card.Text className='text-[12px] ml-10'>{movie.rDate}</Card.Text>
                                <Card.Text className='text-[12px] ml-10'>{movie.type}</Card.Text>
                                <Card.Text className='text-[18px] text-xl ml-10 mt-4'>{movie.summary}</Card.Text>
                                <Card.Text className='text-[18px] ml-10 mt-4'>Director: {movie.director}</Card.Text>
                                <Card.Text className='text-[18px] ml-10'>Producer: {movie.producer}</Card.Text>
                            </Card.Body>
                            <Card.Body className='flex flex-row'>
                                <Button
                                    className='mt-8 ml-10 w-[200px] h-[50px] text-[24px] text-white rounded-full flex flex-row items-center place-content-center transition ease-in-out delay-150 bg-blue-500 hover:bg-blue-400 duration-300'
                                >
                                    <FaPlay size={24} />
                                    Play
                                </Button>
                                <Button className='mt-8 ml-5 w-[50px] rounded-full flex flex-row items-center place-content-center transition ease-in-out delay-150 bg-gray-500 hover:bg-gray-400 duration-300'>
                                    <FaPlus size={24} color='white' />
                                </Button>
                                <Button className='mt-8 ml-5 w-[50px] rounded-full flex flex-row items-center place-content-center transition ease-in-out delay-150 bg-gray-500 hover:bg-gray-400 duration-300'>
                                    <AiFillLike size={24} color='white' />
                                </Button>
                                <Button className='mt-8 ml-5 w-[50px] rounded-full flex flex-row items-center place-content-center transition ease-in-out delay-150 bg-gray-500 hover:bg-gray-400 duration-300'>
                                    <AiFillDislike size={24} color='white'/>
                                </Button>
                            </Card.Body>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default MovieCard;