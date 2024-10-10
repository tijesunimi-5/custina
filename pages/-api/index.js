import Button from '@/layout/Button';
import React from 'react'

const index = () => {
  return (
    <div className="w-[996px] mt-64">
      <div className="text-center">
        <h1>Automate (almost) everything.</h1>
        <p className="mt-10">
          Make payments, reporting, and more work like magic with the Custina
          API and no-code platforms.
        </p>
      </div>

      <div className="text-center mt-44">
        <h1>More flow, less work.</h1>
        <p className="mt-10">
          Empower your developers to create custom workflows and power internal
          tools. Make your data work harder for you.
        </p>
        <div className="mt-10">
          <Button>View the docs</Button>
        </div>
      </div>

      <div className="text-center mt-44">
        <h1>No code? No problem.</h1>
        <p className="mt-10">
          Code-free templates let anyone work on top of Custina API to automate
          payments, virtual cards, reporting, and more.
        </p>
        <div className="mt-10">
          <Button>Learn more</Button>
        </div>
      </div>
    </div>
  );
}

export default index
