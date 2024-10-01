import * as S from './Onboarding.style';
import React from 'react';
import Step1 from '../../components/OnboardingSteps/Step1/Step1';
import Step3 from '../../components/OnboardingSteps/Step3/Step3';
import Step2 from '../../components/OnboardingSteps/Step2/Step2';
import useFunnel from '../../hooks/common/useFunnel';

function Onboarding (){
  const {currentStep, setCurrentStep, Funnel, Step} = useFunnel();

  const steps = [
    {
      name: 'step1',
      component: <Step1 />,
    },
    {
      name: 'step2',
      component: <Step2 />,
    },
    {
      name: 'step3',
      component: <Step3 />,
    },
  ];

  const handleNextStep = () => {
  };

  return(
    <S.OnboardingWrapper>
      <Funnel>
        {steps.map(step => (
          <Step key={step.name} name={step.name}>
            {step.component}
          </Step>
        ))}
      </Funnel>
    </S.OnboardingWrapper>
  );
}

export default Onboarding;