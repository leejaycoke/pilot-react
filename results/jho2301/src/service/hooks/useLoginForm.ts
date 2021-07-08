import { useState } from 'react';

import { LoginForm } from './../../types';

const useLoginForm = () => {
  const [form, setForm] = useState<LoginForm>({ account: '', password: '' });
  const [willTokenStored, setWillTokenStored] = useState(false);

  const setAccount = (account: string) => setForm({ ...form, account });

  const setPassword = (password: string) => setForm({ ...form, password });

  return { form, willTokenStored, setAccount, setPassword, setWillTokenStored };
};

export default useLoginForm;
