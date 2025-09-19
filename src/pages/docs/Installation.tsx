import DocLayout from "@/components/DocLayout";

const Installation = () => {
  return (
    <DocLayout>
      <article className="prose-docs">
        <h1>Installation Guide</h1>
        
        <p>
          This guide will walk you through the process of installing and setting up DocSite 
          for your project. Follow these steps to get started quickly.
        </p>

        <h2>System Requirements</h2>
        
        <p>Before installing DocSite, ensure your system meets these requirements:</p>
        
        <ul>
          <li><strong>Node.js:</strong> Version 16.0 or higher</li>
          <li><strong>npm:</strong> Version 7.0 or higher (or yarn 1.22+)</li>
          <li><strong>Operating System:</strong> Windows, macOS, or Linux</li>
          <li><strong>Memory:</strong> At least 4GB RAM recommended</li>
        </ul>

        <h2>Installation Methods</h2>

        <h3>Method 1: Using npm (Recommended)</h3>
        
        <p>The easiest way to install DocSite is using npm:</p>

        <pre><code>{`# Install DocSite globally
npm install -g docsite

# Or install locally in your project
npm install docsite --save`}</code></pre>

        <h3>Method 2: Using Yarn</h3>
        
        <p>If you prefer Yarn as your package manager:</p>

        <pre><code>{`# Install DocSite globally
yarn global add docsite

# Or install locally in your project
yarn add docsite`}</code></pre>

        <h3>Method 3: Clone from Repository</h3>
        
        <p>For development or customization purposes:</p>

        <pre><code>{`# Clone the repository
git clone https://github.com/docsite/docsite.git

# Navigate to the directory
cd docsite

# Install dependencies
npm install

# Build the project
npm run build`}</code></pre>

        <h2>Verification</h2>
        
        <p>To verify that DocSite was installed correctly, run:</p>

        <pre><code>{`docsite --version`}</code></pre>

        <p>
          You should see the version number displayed. If you encounter any errors, 
          please check the <a href="#troubleshooting" className="text-primary hover:text-primary-hover">troubleshooting section</a> below.
        </p>

        <h2>Initial Setup</h2>
        
        <p>After installation, create your first documentation site:</p>

        <pre><code>{`# Create a new documentation site
docsite init my-docs

# Navigate to the project directory
cd my-docs

# Start the development server
docsite serve`}</code></pre>

        <p>
          Your documentation site will be available at <code>http://localhost:3000</code>.
        </p>

        <h2>Configuration</h2>
        
        <p>
          DocSite uses a configuration file called <code>docsite.config.js</code> to customize 
          your documentation site. Here's a basic example:
        </p>

        <pre><code>{`module.exports = {
  title: 'My Documentation',
  description: 'Comprehensive guide for my project',
  theme: {
    primaryColor: '#3b82f6',
    logo: './assets/logo.png'
  },
  navigation: [
    {
      text: 'Getting Started',
      link: '/getting-started'
    },
    {
      text: 'API Reference',
      link: '/api'
    }
  ]
};`}</code></pre>

        <h2 id="troubleshooting">Troubleshooting</h2>
        
        <h3>Common Issues</h3>
        
        <div className="space-y-6">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Permission Errors</h4>
            <p className="text-foreground-muted mb-2">
              If you encounter permission errors during installation:
            </p>
            <pre><code>{`# Use sudo on macOS/Linux
sudo npm install -g docsite

# Or configure npm to use a different directory
npm config set prefix ~/.npm-global`}</code></pre>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Version Conflicts</h4>
            <p className="text-foreground-muted mb-2">
              If you have version conflicts with existing packages:
            </p>
            <pre><code>{`# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install`}</code></pre>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Port Already in Use</h4>
            <p className="text-foreground-muted mb-2">
              If port 3000 is already in use:
            </p>
            <pre><code>{`# Start on a different port
docsite serve --port 3001`}</code></pre>
          </div>
        </div>

        <h2>Next Steps</h2>
        
        <p>
          Now that you have DocSite installed, you're ready to start building your documentation:
        </p>
        
        <ul>
          <li><a href="/docs/quick-start" className="text-primary hover:text-primary-hover">Quick Start Guide</a> - Create your first pages</li>
          <li><a href="/docs/components/buttons" className="text-primary hover:text-primary-hover">Components</a> - Learn about available UI components</li>
          <li><a href="/docs/styling/theme" className="text-primary hover:text-primary-hover">Theming</a> - Customize the appearance</li>
        </ul>

        <div className="mt-12 p-6 bg-success/10 rounded-lg border-l-4 border-success">
          <h4 className="font-semibold text-foreground mb-2">✅ Installation Complete</h4>
          <p className="text-foreground-muted mb-0">
            Congratulations! You've successfully installed DocSite. You're now ready to 
            create amazing documentation for your projects.
          </p>
        </div>
      </article>
    </DocLayout>
  );
};

export default Installation;