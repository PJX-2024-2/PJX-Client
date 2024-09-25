import { useState } from 'react';
import React from 'react';

interface StepProps {
  children: React.ReactNode;
  name: string;
}

interface FunnelProps {
  children: StepProps[];
}

const useFunnel = () => {
  const [currentStep, setCurrentStep] = useState('Step1');

  const Step = ({ children }: StepProps) => {
    return <>{children}</>
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children?.find(childStep => childStep.name === currentStep );
    return <>{targetStep}</> || <></>
  };
  
  Funnel.Step = Step;

  return {
    setCurrentStep,
    Funnel
  };
};

export default useFunnel;