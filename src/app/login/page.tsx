import NavBar from "~/components/NavBar";

export default function LoginPage() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Login page
          </h1>
          <NavBar></NavBar>
        </div>
      </main>
    );
  }
  