import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { AppBlock } from "~/components/AppBlock";
import { AppInfo } from "~/types";


export default async function HomePage() {
    const mainAppInfo: AppInfo[] = [
      {
        name: "CMUEats",
        description: "Find the best food on campus.",
        icon: "/assets/eats.png",
        url: "/eats",
      }, {
        name: "CMUCourses",
        description: "Find the best classes on campus",
        icon: "/assets/courses.png",
        url: "/courses",
      }, {
        name: "CMUMaps",
        description: "Find where your next class is on campus.",
        icon: "assets/maps.png",
        url: "/maps",
      }
    ]

    return (
      <main className="flex h-[95vh] flex-col items-center ">
        {/* Top bar */}
        <div className="flex flex-row justify-between text-3xl text-white font-bold bg-amber-600 w-full h-14 px-4 py-2"> 
          <div>
            {"Su" + "u".repeat(Math.floor(Math.random()*10)) + "perapp"}
          </div>
          <img src="/assets/profile.svg" alt = "Account" className="h-10 w-10 cursor-pointer" />
        </div>
        <div className="container flex flex-col gap-12 px-4 py-16 ">
          <SignedOut>
            <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
              Welcome!
            </h1>
            <SignInButton mode="modal">
              
              <button className="bg-blue-500 rounded-lg p-4 text-2xl"> Login </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex flex-row items-center gap-4 cursor-pointer">
              {
                mainAppInfo.map((app) => (
                  <AppBlock key={app.name} appInfo={app}></AppBlock>
                ))
              }
            </div> {/* Main apps carousel */}
            <div className="flex flex-row items-center gap-4"></div> {/* Secondary apps carousel */}
            <div className="flex flex-row items-center gap-4"></div> {/* Tertiary apps carousel */}

          </SignedIn>
        </div>
      </main>
    );
  }
  