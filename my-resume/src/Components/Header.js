export const Header = () => {
  return (
    <div className="py-8">
      <header className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Kishan Rajput</h1>
        <p className="text-lg mb-4">Software Engineer</p>
        <p className="text-sm mb-4">
          kishan9rajput@gmail.com | +91 8347223811
          <span>
            {" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/kishan-rajput-6b7ab3179/"
              className="text-blue-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/kishan04rajput"
              className="text-blue-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://kishan-rajput.netlify.app/"
              className="text-blue-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </span>
        </p>
      </header>
    </div>
  );
};
