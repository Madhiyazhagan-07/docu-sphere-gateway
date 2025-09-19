import DocLayout from "@/components/DocLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const QuickStart = () => {
  return (
    <DocLayout>
      <article className="prose-docs">
        <h1>Quick Start Guide</h1>
        
        <p>
          Get up and running with DocSite in just a few minutes. This guide will walk you through 
          creating your first documentation site from scratch.
        </p>

        <h2>Create Your First Project</h2>
        
        <p>
          Once you have DocSite installed, you can create a new project using our CLI tool. 
          Choose your preferred method:
        </p>

        <Tabs defaultValue="npm" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="npm">NPM</TabsTrigger>
            <TabsTrigger value="yarn">Yarn</TabsTrigger>
            <TabsTrigger value="pnpm">PNPM</TabsTrigger>
          </TabsList>
          
          <TabsContent value="npm">
            <pre><code>{`# Create a new DocSite project
npx create-docsite my-documentation

# Navigate to your project
cd my-documentation

# Start the development server
npm run dev`}</code></pre>
          </TabsContent>
          
          <TabsContent value="yarn">
            <pre><code>{`# Create a new DocSite project
yarn create docsite my-documentation

# Navigate to your project
cd my-documentation

# Start the development server
yarn dev`}</code></pre>
          </TabsContent>
          
          <TabsContent value="pnpm">
            <pre><code>{`# Create a new DocSite project
pnpm create docsite my-documentation

# Navigate to your project
cd my-documentation

# Start the development server
pnpm dev`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Project Structure</h2>
        
        <p>Your new DocSite project will have the following structure:</p>
        
        <pre><code>{`my-documentation/
├── docs/                  # Your documentation content
│   ├── getting-started/
│   │   ├── introduction.md
│   │   └── installation.md
│   └── api/
│       └── reference.md
├── public/               # Static assets
├── src/                  # Custom components and styles
├── docsite.config.js     # Configuration file
└── package.json`}</code></pre>

        <h2>Writing Your First Page</h2>
        
        <p>DocSite uses Markdown for content creation. Let's create your first documentation page:</p>

        <Tabs defaultValue="markdown" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="markdown">Markdown</TabsTrigger>
            <TabsTrigger value="mdx">MDX (Advanced)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="markdown">
            <p>Create a new file <code>docs/my-first-page.md</code>:</p>
            <pre><code>{`---
title: My First Page
description: This is my first documentation page
---

# Welcome to My Documentation

This is a **bold** statement and this is *italic* text.

## Code Example

\`\`\`javascript
function hello() {
  console.log("Hello, DocSite!");
}
\`\`\`

## Lists

- Feature 1
- Feature 2
- Feature 3

1. Step one
2. Step two
3. Step three`}</code></pre>
          </TabsContent>
          
          <TabsContent value="mdx">
            <p>For advanced features, use MDX files with React components:</p>
            <pre><code>{`---
title: Advanced Page
description: Using React components in documentation
---

import { Alert } from '@/components/ui/alert'

# Advanced Documentation

<Alert>
  This is a custom React component!
</Alert>

## Interactive Examples

\`\`\`jsx live
function InteractiveButton() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
\`\`\``}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Configuration</h2>
        
        <p>Customize your documentation site by editing <code>docsite.config.js</code>:</p>
        
        <pre><code>{`module.exports = {
  title: 'My Documentation',
  description: 'Comprehensive documentation for my project',
  
  // Navigation structure
  sidebar: {
    'Getting Started': [
      'introduction',
      'installation',
      'quick-start'
    ],
    'API Reference': [
      'api/overview',
      'api/authentication',
      'api/endpoints'
    ]
  },
  
  // Theme customization
  theme: {
    primaryColor: '#3b82f6',
    logo: '/logo.png'
  },
  
  // SEO settings
  seo: {
    siteName: 'My Docs',
    twitterCard: 'summary_large_image'
  }
}`}</code></pre>

        <h2>Adding Navigation</h2>
        
        <p>DocSite automatically generates navigation based on your file structure and configuration:</p>

        <Tabs defaultValue="auto" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="auto">Auto-generated</TabsTrigger>
            <TabsTrigger value="manual">Manual Configuration</TabsTrigger>
          </TabsList>
          
          <TabsContent value="auto">
            <p>Place files in folders to create automatic navigation:</p>
            <pre><code>{`docs/
├── getting-started/
│   ├── index.md          # /getting-started
│   ├── installation.md   # /getting-started/installation
│   └── quick-start.md    # /getting-started/quick-start
└── api/
    ├── index.md          # /api
    └── reference.md      # /api/reference`}</code></pre>
          </TabsContent>
          
          <TabsContent value="manual">
            <p>Configure navigation manually in <code>docsite.config.js</code>:</p>
            <pre><code>{`module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'introduction',
        'installation',
        'quick-start'
      ]
    },
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: [
        'api/overview',
        'api/authentication'
      ]
    }
  ]
}`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Development Workflow</h2>
        
        <p>While developing your documentation:</p>
        
        <ul>
          <li><strong>Hot Reload:</strong> Changes are automatically reflected in the browser</li>
          <li><strong>Link Validation:</strong> Broken links are highlighted during development</li>
          <li><strong>Search Indexing:</strong> Search index is updated automatically</li>
          <li><strong>Asset Optimization:</strong> Images and assets are optimized on the fly</li>
        </ul>

        <h2>Building for Production</h2>
        
        <p>When you're ready to deploy your documentation:</p>
        
        <pre><code>{`# Build the static site
npm run build

# Preview the production build locally
npm run preview

# Deploy to your hosting provider
npm run deploy`}</code></pre>

        <div className="mt-12 p-6 bg-muted rounded-lg border-l-4 border-primary">
          <h4 className="font-semibold text-foreground mb-2">🎉 Congratulations!</h4>
          <p className="text-foreground-muted mb-0">
            You've successfully created your first DocSite project. Explore the 
            <a href="/docs/components/buttons" className="text-primary hover:text-primary-hover ml-1">component library</a> 
            and <a href="/docs/styling/theme" className="text-primary hover:text-primary-hover ml-1">theming system</a> 
            to customize your documentation further.
          </p>
        </div>
      </article>
    </DocLayout>
  );
};

export default QuickStart;