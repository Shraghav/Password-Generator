import './App.css';
import PasswordPostResult from './templates/PassworPostResult';
import PasswordGetResult from './templates/PasswordGetResult';
import PasswordDeleteResult from './templates/PasswordDeleteResult';
import PasswordUserCreate from './templates/PasswordUserCreate';
const PasswordGenerator = () => {
  return (
    <div>
      <PasswordPostResult />
      <PasswordGetResult />
      <PasswordDeleteResult />
      <PasswordUserCreate />
    </div>
  )
};

export default PasswordGenerator;