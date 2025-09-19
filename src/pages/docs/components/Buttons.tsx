import DocLayout from "@/components/DocLayout";
import { Button } from "@/components/ui/button";

const Buttons = () => {
  return (
    <DocLayout>
      <article className="prose-docs">
        <h1>Button Components</h1>
        
        <p>
          Buttons are one of the most important interactive elements in your documentation. 
          DocSite provides a comprehensive button system with multiple variants, sizes, and states.
        </p>

        <h2>Basic Usage</h2>
        
        <p>
          The simplest way to create a button is using the <code>Button</code> component:
        </p>

        <pre><code>{`import { Button } from '@/components/ui/button';

function MyComponent() {
  return (
    <Button>Click me</Button>
  );
}`}</code></pre>

        <div className="my-6 p-6 bg-surface rounded-lg border">
          <div className="flex gap-4 flex-wrap">
            <Button>Default Button</Button>
          </div>
        </div>

        <h2>Button Variants</h2>
        
        <p>DocSite provides several button variants to match different use cases:</p>

        <h3>Primary Variant</h3>
        <p>Used for main actions and call-to-action elements:</p>
        
        <pre><code>{`<Button variant="default">Primary Button</Button>`}</code></pre>

        <div className="my-6 p-6 bg-surface rounded-lg border">
          <div className="flex gap-4 flex-wrap">
            <Button variant="default">Primary Button</Button>
          </div>
        </div>

        <h3>Secondary Variant</h3>
        <p>Used for secondary actions:</p>
        
        <pre><code>{`<Button variant="secondary">Secondary Button</Button>`}</code></pre>

        <div className="my-6 p-6 bg-surface rounded-lg border">
          <div className="flex gap-4 flex-wrap">
            <Button variant="secondary">Secondary Button</Button>
          </div>
        </div>

        <h3>Outline Variant</h3>
        <p>Used for less prominent actions:</p>
        
        <pre><code>{`<Button variant="outline">Outline Button</Button>`}</code></pre>

        <div className="my-6 p-6 bg-surface rounded-lg border">
          <div className="flex gap-4 flex-wrap">
            <Button variant="outline">Outline Button</Button>
          </div>
        </div>

        <h3>Ghost Variant</h3>
        <p>Used for subtle actions that shouldn't draw too much attention:</p>
        
        <pre><code>{`<Button variant="ghost">Ghost Button</Button>`}</code></pre>

        <div className="my-6 p-6 bg-surface rounded-lg border">
          <div className="flex gap-4 flex-wrap">
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </div>

        <h3>Destructive Variant</h3>
        <p>Used for dangerous or destructive actions:</p>
        
        <pre><code>{`<Button variant="destructive">Delete Item</Button>`}</code></pre>

        <div className="my-6 p-6 bg-surface rounded-lg border">
          <div className="flex gap-4 flex-wrap">
            <Button variant="destructive">Delete Item</Button>
          </div>
        </div>

        <h2>Button Sizes</h2>
        
        <p>Buttons come in multiple sizes to fit different contexts:</p>

        <pre><code>{`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}</code></pre>

        <div className="my-6 p-6 bg-surface rounded-lg border">
          <div className="flex gap-4 flex-wrap items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <h2>Button States</h2>
        
        <h3>Disabled State</h3>
        <p>Buttons can be disabled to prevent user interaction:</p>
        
        <pre><code>{`<Button disabled>Disabled Button</Button>`}</code></pre>

        <div className="my-6 p-6 bg-surface rounded-lg border">
          <div className="flex gap-4 flex-wrap">
            <Button disabled>Disabled Button</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
          </div>
        </div>

        <h3>Loading State</h3>
        <p>Show loading state for async operations:</p>
        
        <pre><code>{`import { Loader2 } from "lucide-react";

<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}</code></pre>

        <h2>Complete Example</h2>
        
        <p>Here's a comprehensive example showing all button variants and sizes:</p>

        <pre><code>{`import { Button } from '@/components/ui/button';
import { Download, Mail, Trash2 } from 'lucide-react';

function ButtonShowcase() {
  return (
    <div className="space-y-4">
      {/* Variants */}
      <div className="flex gap-2 flex-wrap">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      
      {/* Sizes */}
      <div className="flex gap-2 flex-wrap items-center">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
      </div>
      
      {/* With icons */}
      <div className="flex gap-2 flex-wrap">
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
        <Button variant="outline">
          <Mail className="mr-2 h-4 w-4" />
          Email
        </Button>
        <Button variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </div>
    </div>
  );
}`}</code></pre>

        <div className="my-8 p-6 bg-surface rounded-lg border">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">All Variants</h4>
              <div className="flex gap-2 flex-wrap">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">All Sizes</h4>
              <div className="flex gap-2 flex-wrap items-center">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </div>
        </div>

        <h2>Best Practices</h2>
        
        <ul>
          <li><strong>Use descriptive text:</strong> Button labels should clearly indicate what action will be performed</li>
          <li><strong>Choose appropriate variants:</strong> Use primary buttons for main actions, secondary for supporting actions</li>
          <li><strong>Consider context:</strong> Destructive buttons should be used sparingly and only for truly destructive actions</li>
          <li><strong>Maintain consistency:</strong> Use the same button styles throughout your application</li>
          <li><strong>Add loading states:</strong> Always provide feedback for async operations</li>
        </ul>

        <div className="mt-12 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
          <h4 className="font-semibold text-foreground mb-2">🎨 Customization</h4>
          <p className="text-foreground-muted mb-0">
            All button styles can be customized through the design system. Check out the 
            <a href="/docs/styling/theme" className="text-primary hover:text-primary-hover ml-1">theming guide</a> 
            to learn how to modify colors, spacing, and other design tokens.
          </p>
        </div>
      </article>
    </DocLayout>
  );
};

export default Buttons;