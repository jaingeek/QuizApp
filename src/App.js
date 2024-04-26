// import { Route, Routes } from 'react-router-dom'
// import JavaQuestion from './pages/JavaQuestion'
// import PythonQuestion from './pages/PythonQuestion'
// import SQLQuestion from './pages/SQLQuestion';
import Header from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}