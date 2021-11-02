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
import ReactAudioPlayer from 'react-audio-player';

const GroovinLogo = ({ dimension = `100` }) => (
  <div>
    <Image src="/gal-logo.png" width={dimension} height={dimension} priority />
  </div>
);

interface PersonData {
  name: string;
  startingTime: string;
  bib: string;
  tshirt: string;
  shorts: string;
  hat: string;
}

const PERSON_DATA = [
  {
    name: `AJ Kuhn`,
    startingTime: `9:55 AM`,
    bib: `10333`,
    tshirt: `TBD`,
    shorts: `TBD`,
    hat: `TBD`,
  },
  {
    name: `Jack O'Brien`,
    startingTime: `10:40 AM`,
    bib: `21058`,
    tshirt: `TBD`,
    shorts: `TBD`,
    hat: `TBD`,
  },
];

const Card: React.FC<{ data: PersonData }> = ({ data }) => (
  <div className="group w-3/4 md:w-56 p-3 border-green-500 border-2 rounded-sm hover:shadow-lg transform duration-500 ease-in-out boxShadow-offset-green">
    <h2 className="font-semibold text-lg ">{data.name}</h2>
    <div className="grid grid-cols-2 text-sm">
      <p>Starting Time</p>
      <p>{data.startingTime}</p>
      <p>Bib Number</p>
      <p>{data.bib}</p>
      <p>T Shirt Color</p>
      <p>{data.tshirt}</p>
      <p>Shorts Color</p>
      <p>{data.shorts}</p>
      <p>Hat Color</p>
      <p>{data.hat}</p>
    </div>
  </div>
);

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
            <div className="flex gap-1 md:gap-2 text-lg flex-col md:flex-row items-center font-semibold">
              <h2 className="">
                <Link href={LLS_URL}>
                  <a target="_blank">Leukemia & Lymphoma Society</a>
                </Link>
              </h2>
              <h2 className="hidden md:inline">|</h2>
              <h2 className="">
                <Link href={MARATHON_URL}>
                  <a target="_blank">NYC Marathon 2021</a>
                </Link>
              </h2>
            </div>
            <h2 className="text-lg mt-2">AJ Kuhn and Jack O'Brien</h2>
          </div>
        </div>

        {/** Donate Button */}
        <div className="w-full flex justify-center gap-28 mt-10">
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
              <div className="flex gap-5 justify-center mt-1">
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
          <div className="group w-3/4 md:w-96 p-3 border-green-500 border-2 rounded-sm">
            <h2 className="text-xl font-semibold">Post Race 🍺🏅</h2>
            <p className="text-md mt-1">
              Party with us after the run from 3-7 at the Crompton Ale House on
              26th street between 6th and 7th avenue.
            </p>
            <div className="mt-2 flex justify-center">
              <iframe
                className="border-0 w-11/12 h-52"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7369554553047!2d-73.99549058540212!3d40.74581324348466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a569a16963%3A0xf663cbfcb3905f12!2sCrompton%20Ale%20House!5e0!3m2!1sen!2sus!4v1635741398443!5m2!1sen!2sus"
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/** How to track */}
        <div className="w-full flex flex-col items-center gap-2 mt-10 text-lg">
          <div>Track us during the run on the NYC marathon app</div>
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
          {PERSON_DATA.map((person: PersonData) => {
            return <Card key={`person-${person.name}`} data={person} />;
          })}
        </div>

        <div className="w-full flex flex-row justify-center mt-10">
          <ReactAudioPlayer
            src="bee_gees_stayin_alive.mp3"
            autoPlay
            controls
            loop
          />
        </div>
      </div>
    </BaseLayout>
  );
}
