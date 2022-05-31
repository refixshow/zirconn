import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  MailIcon,
  ArrowCircleDownIcon,
  MenuIcon,
} from "@heroicons/react/solid";

const Home: NextPage = () => {
  return (
    <div className="text-slate-800 bg-slate-50 overflow-hidden">
      <Head>
        <title>Zirconn PCB manufacturer</title>
      </Head>
      <nav className="flex justify-between items-center text-slate-50 bg-gray-900 py-5 px-10 border-b-4 border-brand relative z-10">
        <div className="relative w-28 aspect-video">
          <Image
            src="/assets/images/logo-full.png"
            layout="fill"
            loading="lazy"
            alt="Zirconn logo"
          />
        </div>

        <MenuIcon width={34} className="md:hidden" />

        <ul className="hidden md:flex gap-4 font-bold">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Capabilities</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <header className="flex flex-col items-center p-8 md:p-16 text-center font-bold relative">
        <h1 className="z-10 mb-4 md:m-0 md:leading-relaxed font-extrabold text-transparent text-6xl md:text-8xl bg-clip-text bg-gradient-to-r from-brand to-pink-600 drop-shadow-2xl">
          PCB EXPERT
        </h1>
        <p className="z-10 text-2xl max-w-prose drop-shadow-2xl">
          Count on use for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-pink-600 drop-shadow">
            consistent quality
          </span>
          , competitive pricing and reliable on-time delivery.
        </p>
        <div className="z-10 flex flex-col-reverse md:flex-row  gap-4 my-10 text-slate-900">
          <a
            href="#"
            className="flex justify-center items-center gap-2 bg-brand hover:bg-yellow-300 active:translate-y-1 transition-transform py-4 px-8 rounded-md border-b-4 border-slate-900 font-extrabold"
          >
            <ArrowCircleDownIcon width={18} /> Get started
          </a>
          <a
            href="#"
            className="flex justify-center items-center gap-2 hover:bg-yellow-300 active:translate-y-1 transition-transform py-4 px-8 rounded-md border-2 border-b-4 border-slate-900 font-extrabold"
          >
            <MailIcon width={18} /> Ask for quote
          </a>
        </div>

        <div className="absolute left-0 top-full -translate-x-1/2 -translate-y-1/2 w-80 h-80 select-none">
          <Image
            src={"/assets/images/dot-seamless-pattern.svg"}
            layout="fill"
            loading="lazy"
            alt="123"
          />
        </div>
        <div className="absolute right-0 top-1/3 translate-x-1/2 -translate-y-1/2 w-80 h-80 select-none">
          <Image
            src={"/assets/images/dot-seamless-pattern.svg"}
            layout="fill"
            alt="123"
          />
        </div>
      </header>

      <main>
        <section className="container mx-auto flex flex-col items-center">
          <h2>our products</h2>
          <p>
            The company's products mainly to model, small and medium volume
            based
          </p>
          <div className="flex align-middle flex-wrap justify-center w-1/2">
            <div className="w-1/3">
              <img alt="hehe" />
              <div>
                <h4>Single Layer</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>
                <a href="#">check spec</a>
              </div>
            </div>

            <div className="w-1/3">
              <img alt="hehe" />
              <div>
                <h4>Single Layer</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>
                <a href="#">check spec</a>
              </div>
            </div>

            <div className="w-1/3">
              <img alt="hehe" />
              <div>
                <h4>Single Layer</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>
                <a href="#">check spec</a>
              </div>
            </div>

            <div className="w-1/3">
              <img alt="hehe" />
              <div>
                <h4>Single Layer</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>
                <a href="#">check spec</a>
              </div>
            </div>

            <div className="w-1/3">
              <img alt="hehe" />
              <div>
                <h4>Single Layer</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>
                <a href="#">check spec</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Why should You trust us?</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div>
            <div>
              <img alt="icon" />
              <h3>High quality</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <div>
              <img alt="icon" />
              <h3>High quality</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <div>
              <img alt="icon" />
              <h3>High quality</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <div>
              <img alt="icon" />
              <h3>High quality</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <div>
              <img alt="icon" />
              <h3>High quality</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <div>
              <img alt="icon" />
              <h3>High quality</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </div>
            <a href="#">Ask for quote</a>
          </div>
        </section>
        <section>
          <h2>Trusted by many companies over the world</h2>
          <p>
            is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <div>
            <div>
              <h3>100%</h3>
              <p>Pepperoni</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Delivery</p>
            </div>
            <div>
              <h3>230K</h3>
              <p>Calories</p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="company" />
            </div>
            <div>
              <img src="" alt="company" />
            </div>
            <div>
              <img src="" alt="company" />
            </div>
            <div>
              <img src="" alt="company" />
            </div>
            <div>
              <img src="" alt="company" />
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
