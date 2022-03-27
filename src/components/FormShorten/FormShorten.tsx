import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '../';

const s = require('./FormShorten.module.scss') as any;

type formInput = {
  url: string;
}

const FormShorten = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm<formInput>({
    mode: 'onSubmit',
  })

  const onSubmit: SubmitHandler<formInput> = (data) => console.log(data);

  return (
    <section className={s.section}>
      <div className='container'>
        <form
          onSubmit = { handleSubmit(onSubmit)}
          className={s.form} 
          autoComplete='off'>

          <input
            type='url'
            className={s.input}
            placeholder='Shorten a link here...'
            {...register('url', {
              required: 'Please add a link',
              pattern: {
                value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                message: 'Please enter a valid url',
              }
            }) 
            } 
          />

          <Button 
            type='submit'
            variant='square' 
          >
            Shorten it!
          </Button>

          {errors.url && (
            <p className={s.error}>
              {errors.url.message}
            </p>
          )}

        </form>
      </div>
    </section>
  );
};

export default FormShorten;
