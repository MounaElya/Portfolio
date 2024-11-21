import { Header } from "@/sections/Header";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="relative">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/oUXEuTJFaPif2KGA/scene.splinecode" />
      </div>

      {/* Header */}
      <Header />
      <div className="hero min-h-screen justify-start">
        <div className="hero-content  ">
          {" "}
          {/* Align content to the left */}
          <div className="text-left ml-6">
            {" "}
            {/* Ensures text aligns left */}
            <h1 className="text-5xl font-bold ">
              Mouna <br />
              LAKBAKBI
              <br /> EL YAAGOUBI
            </h1>
            <p className="py-6 flex-1">
              <b>Welcome to My Digital Space!</b>
              <br />
              Feel free to explore my portfolio, discover my work,
              <br /> and get in touch
            </p>
            <button className="btn glass border-red-900/15 bg-red-950/20">
              Discover More!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
