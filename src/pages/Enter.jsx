import Header from '../layouts/Header/Header.jsx';
import Title from '../components/Title/Title.jsx';
import EnterForm from '../components/EnterForm/EnterForm.jsx';

const Enter = () => {
  return (
    <>
      <Header />;
      <Title text={'Вход'} />
      <EnterForm />
    </>
  );
};

export default Enter;
