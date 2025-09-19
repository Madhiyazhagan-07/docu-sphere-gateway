import DocLayout from "@/components/DocLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Forms = () => {
  return (
    <DocLayout>
      <article className="prose-docs">
        <h1>Form Components</h1>
        
        <p>
          DocSite provides a comprehensive set of form components that are accessible, 
          customizable, and follow modern design patterns. All components are built with 
          React Hook Form integration in mind.
        </p>

        <h2>Input Components</h2>
        
        <p>The foundation of any form is the input component. DocSite offers various input types and states:</p>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview">
            <div className="space-y-4 p-6 border rounded-lg bg-background">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Enter your password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" placeholder="This input is disabled" disabled />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="code">
            <pre><code>{`import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Enter your email" />
</div>

<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <Input type="password" id="password" placeholder="Enter your password" />
</div>

<div className="space-y-2">
  <Label htmlFor="disabled">Disabled Input</Label>
  <Input id="disabled" placeholder="This input is disabled" disabled />
</div>`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Textarea Component</h2>
        
        <p>For longer text inputs, use the textarea component:</p>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview">
            <div className="space-y-4 p-6 border rounded-lg bg-background">
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message here..." />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="code">
            <pre><code>{`import { Textarea } from "@/components/ui/textarea";

<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Enter your message here..." />
</div>`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Selection Components</h2>
        
        <p>Choose from various selection patterns based on your needs:</p>

        <Tabs defaultValue="select" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="select">Select</TabsTrigger>
            <TabsTrigger value="radio">Radio Group</TabsTrigger>
            <TabsTrigger value="checkbox">Checkboxes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="select">
            <div className="space-y-4 p-6 border rounded-lg bg-background">
              <div className="space-y-2">
                <Label>Select Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="radio">
            <div className="space-y-4 p-6 border rounded-lg bg-background">
              <div className="space-y-3">
                <Label>Subscription Plan</Label>
                <RadioGroup defaultValue="pro">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="free" id="free" />
                    <Label htmlFor="free">Free Plan</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pro" id="pro" />
                    <Label htmlFor="pro">Pro Plan</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enterprise" id="enterprise" />
                    <Label htmlFor="enterprise">Enterprise Plan</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="checkbox">
            <div className="space-y-4 p-6 border rounded-lg bg-background">
              <div className="space-y-3">
                <Label>Features</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="analytics" />
                    <Label htmlFor="analytics">Analytics Dashboard</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications" />
                    <Label htmlFor="notifications">Email Notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="api" />
                    <Label htmlFor="api">API Access</Label>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <h2>Form Validation</h2>
        
        <p>DocSite forms integrate seamlessly with validation libraries:</p>

        <Tabs defaultValue="hookform" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="hookform">React Hook Form</TabsTrigger>
            <TabsTrigger value="zod">With Zod Schema</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hookform">
            <pre><code>{`import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      
      <Button type="submit">Submit</Button>
    </form>
  );
}`}</code></pre>
          </TabsContent>
          
          <TabsContent value="zod">
            <pre><code>{`import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  age: z.number().min(18, "Must be at least 18 years old"),
});

type FormData = z.infer<typeof formSchema>;

export function ValidatedForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      age: 0,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...form.register("name")}
        />
        {form.formState.errors.name && (
          <p className="text-sm text-destructive">
            {form.formState.errors.name.message}
          </p>
        )}
      </div>
      
      <Button type="submit">Submit</Button>
    </form>
  );
}`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Complete Form Example</h2>
        
        <p>Here's a comprehensive form example showcasing various components:</p>

        <div className="p-6 border rounded-lg bg-background space-y-6">
          <h3 className="text-lg font-semibold">User Registration</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" id="email" placeholder="john@example.com" />
          </div>
          
          <div className="space-y-2">
            <Label>Account Type</Label>
            <RadioGroup defaultValue="personal">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal" id="personal" />
                <Label htmlFor="personal">Personal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business">Business</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself..." />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">I agree to the terms and conditions</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <Label htmlFor="newsletter">Subscribe to newsletter</Label>
          </div>
          
          <Button className="w-full">Create Account</Button>
        </div>

        <h2>Accessibility</h2>
        
        <p>All form components are built with accessibility in mind:</p>
        
        <ul>
          <li><strong>ARIA Labels:</strong> Proper labeling for screen readers</li>
          <li><strong>Keyboard Navigation:</strong> Full keyboard support</li>
          <li><strong>Focus Management:</strong> Logical focus order</li>
          <li><strong>Error Announcements:</strong> Validation errors are announced</li>
          <li><strong>Color Contrast:</strong> Meets WCAG 2.1 AA standards</li>
        </ul>

        <div className="mt-12 p-6 bg-muted rounded-lg border-l-4 border-primary">
          <h4 className="font-semibold text-foreground mb-2">💡 Best Practices</h4>
          <p className="text-foreground-muted mb-0">
            Always provide clear labels, helpful placeholder text, and immediate feedback 
            for form validation. Consider using progressive disclosure for complex forms.
          </p>
        </div>
      </article>
    </DocLayout>
  );
};

export default Forms;