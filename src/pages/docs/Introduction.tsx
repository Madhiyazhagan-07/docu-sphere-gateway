import DocLayout from "@/components/DocLayout";

const Introduction = () => {
  return (
    <DocLayout>
      <article className="prose-docs">
        <h1>Introduction to DocSite</h1>
        
        <p>
          Welcome to DocSite, your comprehensive documentation platform. This guide will help you 
          get started quickly and make the most of all available features.
        </p>

        <h2>What is DocSite?</h2>
        
        <p>
          DocSite is a modern documentation platform designed to help developers and teams create, 
          maintain, and share knowledge effectively. Built with React, TypeScript, and modern web 
          technologies, it provides a seamless experience for both content creators and readers.
        </p>

        <h3>Key Features</h3>
        
        <ul>
          <li><strong>Fast Search:</strong> Instantly find the information you need</li>
          <li><strong>Responsive Design:</strong> Works perfectly on all devices</li>
          <li><strong>Modern UI:</strong> Clean, professional interface</li>
          <li><strong>User Authentication:</strong> Secure access to premium content</li>
          <li><strong>Multi-topic Support:</strong> Organize content by categories</li>
          <li><strong>Code Highlighting:</strong> Beautiful syntax highlighting for code examples</li>
        </ul>

        <h2>Getting Started</h2>
        
        <p>
          To begin your journey with DocSite, we recommend starting with the 
          <a href="/docs/installation" className="text-primary hover:text-primary-hover">Installation Guide</a>. 
          This will walk you through setting up your environment and getting your first project running.
        </p>

        <h3>Prerequisites</h3>
        
        <p>Before you begin, make sure you have:</p>
        
        <ul>
          <li>Basic knowledge of web development</li>
          <li>A modern web browser</li>
          <li>An active internet connection</li>
        </ul>

        <h2>Quick Start</h2>
        
        <p>
          If you're eager to dive in, here's a quick overview of what you can do:
        </p>

        <pre><code>{`// Example: Basic usage
import { DocSite } from 'docsite';

const app = new DocSite({
  title: 'My Documentation',
  theme: 'modern'
});

app.render();`}</code></pre>

        <h2>What's Next?</h2>
        
        <p>
          Now that you understand the basics, explore these sections:
        </p>
        
        <ul>
          <li><a href="/docs/installation" className="text-primary hover:text-primary-hover">Installation</a> - Set up your environment</li>
          <li><a href="/docs/quick-start" className="text-primary hover:text-primary-hover">Quick Start</a> - Build your first page</li>
          <li><a href="/docs/components/buttons" className="text-primary hover:text-primary-hover">Components</a> - Learn about UI components</li>
          <li><a href="/docs/advanced/performance" className="text-primary hover:text-primary-hover">Advanced Topics</a> - Optimize your documentation</li>
        </ul>

        <div className="mt-12 p-6 bg-muted rounded-lg border-l-4 border-primary">
          <h4 className="font-semibold text-foreground mb-2">💡 Pro Tip</h4>
          <p className="text-foreground-muted mb-0">
            Use the search function in the header to quickly find specific topics. 
            You can also bookmark frequently used pages for easy access.
          </p>
        </div>
      </article>
    </DocLayout>
  );
};

export default Introduction;