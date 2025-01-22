import {Avatar} from "@nextui-org/react";

export default function picture() {
  return (
    <div className="flex gap-4 items-center">
      
      <Avatar
        className="w-40 h-40 text-large" isBordered color="default"
        src="/picture.jpg"
      />
    </div>
      
    
  );
}


