import { Button } from "@material-tailwind/react";
 
interface ButtonDefaultProps {
  sign: string;
  onClick: () => void;
}

export function ButtonDefault({ sign, onClick } : ButtonDefaultProps ){
  return <Button onClick={onClick} className="m-5"  variant="gradient" color="white" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>{sign}</Button>;
}