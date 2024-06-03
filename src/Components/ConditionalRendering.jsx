import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel";
let content;
let isLoggedIn = true;

if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

function ConditionalRendering() {
  return <div className="divContent">{content}</div>;
}

export default ConditionalRendering;
