'use client';
import React, { useEffect, useState } from 'react';
import { BasicInfo } from '@/components/company-form/basic-info';
import { LanguageSelectForm } from '@/components/company-form/language-select-form';
import { ModuleSelectForm } from '@/components/company-form/module-select-form';
import Step from '@/components/company-form/step';

import { Button } from '@/components/ui/button';

export const Form = () => {
  //------------------------------STATES------------------------------
  const [stepNumber, setStepNumber] = useState(1);
  const [goBackVisible, setGoBackVisible] = useState('invisible');
  const [steps, setSteps] = useState([
    { id: 1, title: 'Add Company', active: true },
    { id: 2, title: 'Select Language', active: false },
    { id: 3, title: 'Select Module', active: false },
  ]);

  //------------------------------SIDE EFFECTS------------------------------
  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true };
        } else {
          return { ...step, active: false };
        }
      });
      return updatedSteps;
    });
    if (stepNumber > 1) {
      setGoBackVisible('visible');
    } else {
      setGoBackVisible('invisible');
    }
  }, [stepNumber]);

  //------------------------------FUNCTIONS------------------------------
  const nextStep = () => {
    setStepNumber((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };

  return (
    <div className=' w-full rounded-xl p-4 pr-8 flex justify-between items-center'>
      <div className='w-1/4 p-8 flex flex-col m-8 gap-12 rounded-2xl bg-slate-200'>
        {steps.map((step) => (
          <Step
            key={step.id}
            number={step.id}
            title={step.title}
            active={step.active}
          />
        ))}
      </div>
      <div className='flex flex-col justify-between w-3/4 rounded-2xl  bg-white'>
        <div>
          {(stepNumber === 1 && <BasicInfo />) ||
            (stepNumber === 2 && <LanguageSelectForm />) ||
            (stepNumber === 3 && <ModuleSelectForm />)}
        </div>
        <div className='flex justify-between w-full my-4'>
          <Button
            variant='outline'
            onClick={prevStep}
            className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
          >
            Go back
          </Button>
          {stepNumber === 3 ? (
            <Button
              variant='primary'
              className='font-medium bg-[#473dff] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90'
            >
              Submit
            </Button>
          ) : (
            <Button
              variant='secondary'
              onClick={nextStep}
              className='font-medium bg-[#02295a] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90'
            >
              Next Step
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
