"use client";
import "~/styles/globals.css";

import { useEffect, useState } from "react";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { getUserPhotos } from "~/lib/api/getUserPhotos";
import { Photo } from "~/types";

function ProfileGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="w-full aspect-w-1 aspect-h-1 bg-[#DDD]">
          <img
            src={photo.url}
            alt="Uploaded"
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}

export default function ProfilePage() {
  const { user } = useUser();
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      if (user) {
        // We know this is safe because we check if the user is signed in
        const userPhotos = await getUserPhotos(user.emailAddresses[0]?.emailAddress as string);
        setPhotos(userPhotos);
      }
    };

    loadPhotos();
  }, [user]);

  return (
    <div className="p-4 font-sans">
      <div className="flex items-center mb-4">
        <img
          src= {user?.imageUrl}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <div className="ml-4">
          <h1 className="text-2xl text-white font-bold">{user?.fullName}</h1>
          <p className="text-gray-500">{photos.length} posts</p>
        </div>
        <div className="ml-auto">
          <SignOutButton>
            <button
              className="px-4 py-2 bg-gray-200 text-black font-bold rounded-lg hover:bg-gray-300"
            >
              Logout
            </button>
          </SignOutButton>
        </div>
      </div>
      <div className="mt-8">
        <ProfileGrid photos={photos} />
      </div>
    </div>
  );
}

