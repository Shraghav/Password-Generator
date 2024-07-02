import './App.css';
import PasswordPostResult from './templates/PassworPostResult';
import PasswordGetResult from './templates/PasswordGetResult';
import PasswordDeleteResult from './templates/PasswordDeleteResult';
const PasswordGenerator = () => {
  return (
    <div style={{ display: 'flex' }}>
      <PasswordPostResult />
      <PasswordGetResult />
      <PasswordDeleteResult />
    </div>
  )
};

export default PasswordGenerator;