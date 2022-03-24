const s = require('./CallToAction.module.scss') as any;

import { Button } from '../';

const CallToAction = () => {
  return (
    <section className={s.CallToAction}>
      <h2>Boost your links today</h2>
      <Button 
        size='large' 
        variant='square'
      >
        Get Started
      </Button>
    </section>
  );
};

export default CallToAction;
