import './App.css';
import PasswordPostResult from './templates/PassworPostResult';
import PasswordGetResult from './templates/PasswordGetResult';
const PasswordGenerator = () => {
  return (
    <div style={{ display: 'flex' }}>
      <PasswordPostResult />
      <PasswordGetResult />
    </div>
  )
};

export default PasswordGenerator;