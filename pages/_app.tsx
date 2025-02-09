import "../styles/globals.css";
import "../styles/detail.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    notifyChangeLog();
  }, []);
  const notifyChangeLog = () =>
    toast(`2021년 8월 6일 : 일부 교양 및 전공 데이터가 업데이트되었습니다.`);

  return (
    <div className="bg-blue-50">
      {/* <Header /> */}
      <Component />
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default MyApp;
