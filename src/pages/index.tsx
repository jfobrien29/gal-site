import BaseLayout from '@/containers/BaseLayout';
import {
  AJ_DONATE_PAGE,
  GAL_DONATE_PAGE,
  JACK_DONATE_PAGE,
  LLS_URL,
  MARATHON_IPHONE_APP_URL,
  MARATHON_URL,
} from '@/utils/constants';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const GroovinLogo = () => {
  return (
    <div className="">
      <Image
        src="/gal-logo.png"
        width="100"
        height="100"
        placeholder="blue"
        priority
      />
    </div>
  );
};

interface PersonData {
  name: string;
  startingTime: string;
  bib: string;
  tshirt: string;
  shorts: string;
  hat: string;
  playlist: string;
}

const Card: React.FC<{ title: string; data?: PersonData }> = ({
  title,
  data,
}) => {
  return (
    <div className="group w-3/4 md:w-56 p-3 border-green-500 border-2 rounded-sm hover:bg-white hover:shadow-lg transform duration-500 ease-in-out hover:-translate-y-1 hover:text-purple-600 boxShadow-offset-green">
      <h2 className="font-semibold text-lg ">{title}</h2>
      <div className="grid grid-cols-2 text-sm">
        <p className="">Starting Time</p>
        <p>9:45</p>
        <p className="text-sm">Bib Number</p>
        <p>100032</p>
        <p className="text-sm">T Shirt Color</p>
        <p>TBD</p>
        <p className="text-sm">Shorts Color</p>
        <p>TBD</p>
        <p className="text-sm">Hat Color</p>
        <p>TBD</p>
        <p className="text-sm">Playlist</p>
        <p>dasd</p>
      </div>
    </div>
  );
};

export default function Landing() {
  return (
    <BaseLayout>
      <div className="w-full min-h-screen bg-gradient-to-b from-purple-600 to-purple-600">
        {/** Header */}
        <div className="w-full flex justify-center align-middle">
          <div className="flex flex-col items-center">
            <h1 className="mt-8 md:mt-16 text-5xl leading-tight monoton-font text-center">
              <Link href="/">
                <a> Grooving Against Leukemia!</a>
              </Link>
            </h1>
            <div className="flex gap-2 text-lg">
              <h2 className="">
                <Link href={MARATHON_URL}>
                  <a target="_blank">NYC Marathon 2021</a>
                </Link>
              </h2>
              <h2 className="">|</h2>
              <h2 className="">
                <Link href={LLS_URL}>
                  <a target="_blank">Leukemia & Lymphoma Society</a>
                </Link>
              </h2>
            </div>
            <h2 className="text-lg mt-2">AJ Kuhn and Jack O'Brien</h2>
          </div>
        </div>

        {/** Donate Button */}
        <div className="w-full flex justify-center gap-20 mt-10">
          <GroovinLogo />
          <div className="flex flex-col items-center gap-4 text-lg">
            <div>
              <Link href={GAL_DONATE_PAGE} passHref>
                <a
                  className="font-bold px-5 py-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:shadow-2xl"
                  target="_blank"
                >
                  Donate to the Team Now!
                </a>
              </Link>
            </div>
            <div className="text-center">
              <h3>or donate to one of the guys</h3>
              <div className="flex gap-5 justify-center">
                <Link href={AJ_DONATE_PAGE} passHref>
                  <a
                    className="font-bold px-5 py-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:shadow-2xl w-24 text-center"
                    target="_blank"
                  >
                    AJ
                  </a>
                </Link>
                <Link href={JACK_DONATE_PAGE} passHref>
                  <a
                    className="font-bold px-5 py-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:shadow-2xl w-24 text-center"
                    target="_blank"
                  >
                    Jack
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <GroovinLogo />
        </div>

        {/** Details on Party */}
        <div className="w-full flex justify-center gap-4 mt-10 text-lg">
          <div className="group w-3/4 md:w-96 h-64 p-3 border-green-500 border-2 rounded-sm">
            <h2 className="text-xl font-semibold">Post Race Celly</h2>
            <p className="text-md mt-1">
              Party with us afterwards from 3-7 at the Crompton Ale House on
              26th street between 6th and 7th avenue.
            </p>
            <div className="mt-5">
              <Link href={AJ_DONATE_PAGE} passHref>
                <a
                  className="font-bold px-5 py-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:shadow-2xl w-24 text-center"
                  target="_blank"
                >
                  Directions to Crompton Ale House
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/** How to track */}
        <div className="w-full flex flex-col items-center gap-4 mt-10 text-lg">
          <div>Track us during the race on the NYC marathon app</div>
          <div className="flex gap-4">
            <Link href={MARATHON_IPHONE_APP_URL} passHref>
              <a target="_blank">
                <img className="cursor-pointer" src="/app-store-download.svg" />
              </a>
            </Link>
          </div>
        </div>

        {/** Cards */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 mt-2 md:mt-3">
          <Card title="AJ Kuhn" />
          <Card title="Jack O'Brien" />
        </div>
      </div>
    </BaseLayout>
  );
}
