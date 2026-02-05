import './About.css';

const Layout = () => {
  const references = [
    { name: "React Documentation", url: "https://react.dev/learn" },
    { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/" },
    { name: "MUI Component Library", url: "https://mui.com/material-ui/getting-started/" }
  ];

  return (
    <div className="about-container">
      <p className="about-description">
        This application was built to demonstrate core React concepts like Hooks, 
        State Lifting, and Component Architecture. Below are the key references that are useful for 
        learning React.
      </p>

      <ul className="reference-list">
        {references.map((ref, index) => (
          <li key={index} className="reference-item">
            <a 
              href={ref.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="reference-link"
            >
              {ref.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Layout;