
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-spiritual-50">
      <div className="text-center max-w-md px-6">
        <h1 className="font-display text-6xl mb-6 text-spiritual-600">404</h1>
        <p className="text-2xl font-serif mb-8 text-spiritual-800">We couldn't find the page you're looking for.</p>
        <p className="text-spiritual-700/70 mb-8">It seems the path to this page has diverged from our menu of offerings.</p>
        <Link to="/" className="btn btn-primary">
          Return to Spiritual Dining
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
