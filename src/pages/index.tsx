import BaseLayout from '@/containers/BaseLayout';
import { GAL_DONATE_PAGE } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';

const Card: React.FC<any> = ({ title, text }) => {
  return (
    <div className="group w-3/4 md:w-56 h-64 p-3 border-green-500 border-2 rounded-sm hover:bg-white hover:shadow-lg transform duration-500 ease-in-out hover:-translate-y-1">
      <h2 className="text-white font-semibold text-lg group-hover:text-purple-600">
        {title}
      </h2>
      <p className="text-white text-sm group-hover:text-purple-600">{text}</p>
    </div>
  );
};

export default function Landing() {
  return (
    <BaseLayout>
      <div className="w-full min-h-screen bg-purple-600">
        {/** Header */}
        <div className="w-full flex justify-center align-middle">
          <div className="flex flex-col items-center">
            <h1 className="text-white mt-16 text-5xl leading-tight monoton-font">
              <Link href="/"> Grooving Against Leukemia!</Link>
            </h1>
            <h2 className="text-white">NYC Marathon 2021 to benefit LLS</h2>
            <h2 className="text-white">AJ Kuhn and Jack O'Brien</h2>
          </div>
        </div>

        {/** Logos */}
        <div className="w-full flex justify-center gap-4 mt-10 text-lg">
          <div>
            <Link href={GAL_DONATE_PAGE} passHref>
              <a className="text-white font-bold px-5 py-3 bg-green-400 rounded-full hover:shadow-2xl">
                Donate Now!
              </a>
            </Link>
          </div>
        </div>

        {/** Cards */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 mt-8 md:mt-16">
          <Card
            title="LLS"
            text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
          />
          <Card
            title="The Race"
            text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
          />
          <Card
            title="The Party"
            text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
          />
        </div>

        {/** Footer */}
        <div className="w-full flex flex-col justify-center items-center gap-2 mt-16 mb-4 pb-2">
          <h3 className="text-white text-xs">GAL 2021</h3>
          <p className="text-white text-xs">
            <Link href="/listening">
              <a>Now Playing</a>
            </Link>
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}
