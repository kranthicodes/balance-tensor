import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      {children}
    </div>
  );
}
