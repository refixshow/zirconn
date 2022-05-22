import type { NextPage } from "next";
import Head from "next/head";
import hero from "../src/assets/work-in-progress.png";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen md:h-auto md:min-h-screen overflow-hidden py-10 px-5">
      <Head>
        <title>Zirconn PCB manufacturer</title>
      </Head>

      <main className="flex flex-col items-center justify-between h-full text-center">
        <div>
          <svg
            className="absolute -z-10 opacity-80 right-full transform translate-y-2/4 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
          <div>
            <Image src={hero} alt="work-in-progress image" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">
              Our website is in development state,
            </h1>
            <p className="text-lg mt-5 md:mt-3 text-slate-700 font-semibold">
              but there is nothing holding back to contact with us!
            </p>
          </div>
          <div className="flex gap-5 justify-center my-10">
            <p className="text-slate-700">
              email:{" "}
              <a
                href="mailto:office@zirconnpcb.com"
                className="hover:underline"
              >
                office@zirconnpcb.com
              </a>
            </p>
          </div>
        </div>
        <div>&copy; Zirconn 2022</div>
      </main>
    </div>
  );
};

export default Home;
