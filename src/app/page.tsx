import { Hand, Heart } from "lucide-react";

export default function Home() {
  return (
    <div>
      <h1>
        Welcome to Task Master <Heart size={24} color="red" className="inline" />
      </h1>
      <p className="text-gray-500 mt-2">
        Start add some tasks and manage your workflow effectively
      </p>
    </div>
  );
}
