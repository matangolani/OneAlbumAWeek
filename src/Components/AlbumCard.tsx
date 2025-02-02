import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface AlbumCardProps {
  image: string;
  title: string;
  artist: string;
  favoriteSongs: string[];
  rating: number;
}

export function AlbumCard({ image, title, artist, favoriteSongs, rating }: AlbumCardProps) {
  return (
    <Card className="w-[32rem] h-[18rem] flex flex-row items-center" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <CardHeader shadow={false} floated={false} className=" w-64 h-64 flex items-center justify-center mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <img src={image} alt="card-image" className="h-full w-full object-cover rounded-lg" />
      </CardHeader>
      <CardBody className="text-center flex-1" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <div className="">
          <Typography variant="h6" color="gray" className="uppercase underline" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Album
          </Typography>
          <Typography variant="paragraph" color="black" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            {title}
          </Typography>
        </div>
        <div className="">
          <Typography variant="h6" color="gray" className="uppercase underline" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Artist
          </Typography>
          <Typography variant="paragraph" color="black" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            {artist}
          </Typography>
        </div>
        <div className="">
          <Typography variant="h6" color="gray" className="uppercase underline" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Favourite Songs
          </Typography>
          <ul>
            {favoriteSongs.map((song, index) => (
              <li key={index} className="font-bold">
                <Typography variant="paragraph" color="black" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  {song}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <Typography variant="h6" color="gray" className="uppercase underline" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Rating
          </Typography>
          <Typography variant="paragraph" color="black" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            {rating}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}