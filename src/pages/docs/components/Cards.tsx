import DocLayout from "@/components/DocLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Heart, Share2, MoreHorizontal } from "lucide-react";

const Cards = () => {
  return (
    <DocLayout>
      <article className="prose-docs">
        <h1>Card Components</h1>
        
        <p>
          Cards are versatile containers for organizing and displaying content. They're perfect 
          for presenting information in a structured, scannable format with clear visual hierarchy.
        </p>

        <h2>Basic Card Structure</h2>
        
        <p>Every card consists of optional header, content, and footer sections:</p>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview">
            <div className="grid gap-4">
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the main content area of the card. You can place any content here.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Action Button</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="code">
            <pre><code>{`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content area of the card.</p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Action Button</Button>
  </CardFooter>
</Card>`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Card Variants</h2>
        
        <p>Different card styles for various use cases:</p>

        <Tabs defaultValue="product" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="product">Product</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="article">Article</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="product">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="w-full max-w-sm">
                <CardHeader className="pb-2">
                  <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Product Image</span>
                  </div>
                  <CardTitle className="text-lg">Wireless Headphones</CardTitle>
                  <CardDescription>Premium noise-canceling headphones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(128 reviews)</span>
                  </div>
                  <div className="text-2xl font-bold">$299.99</div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1">Add to Cart</Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="profile">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="w-full max-w-sm">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>Senior Developer at TechCorp</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">1.2k</div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">850</div>
                      <div className="text-xs text-muted-foreground">Following</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">64</div>
                      <div className="text-xs text-muted-foreground">Posts</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1">Follow</Button>
                  <Button variant="outline" className="flex-1">Message</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="article">
            <div className="grid gap-4">
              <Card className="w-full max-w-2xl">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">Technology</Badge>
                    <Badge variant="outline">React</Badge>
                  </div>
                  <CardTitle className="text-xl">
                    Building Modern Web Applications with React
                  </CardTitle>
                  <CardDescription>
                    Learn how to create scalable and maintainable web applications using React, 
                    TypeScript, and modern development practices.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <span>Alice Brown</span>
                    </div>
                    <span>•</span>
                    <span>5 min read</span>
                    <span>•</span>
                    <span>Mar 15, 2024</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4 mr-1" />
                      42
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="stats">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <span className="text-2xl">💰</span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <span className="text-2xl">👥</span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <span className="text-2xl">📈</span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12.5%</div>
                  <p className="text-xs text-muted-foreground">
                    +2.1% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <h2>Interactive Cards</h2>
        
        <p>Add interactivity to cards with hover effects and actions:</p>

        <Tabs defaultValue="hover" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="hover">Hover Effects</TabsTrigger>
            <TabsTrigger value="clickable">Clickable Cards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hover">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <CardTitle>Hover Card</CardTitle>
                  <CardDescription>This card has hover effects</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Hover over this card to see the animation effect.</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-transparent hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle>Border Hover</CardTitle>
                  <CardDescription>Border changes on hover</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This card shows a colored border on hover.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="clickable">
            <pre><code>{`// Clickable card component
function ClickableCard({ onClick, children }) {
  return (
    <Card 
      className="cursor-pointer transition-colors hover:bg-muted/50"
      onClick={onClick}
    >
      {children}
    </Card>
  );
}

// Usage
<ClickableCard onClick={() => navigate('/details')}>
  <CardHeader>
    <CardTitle>Click me</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This entire card is clickable</p>
  </CardContent>
</ClickableCard>`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Card Layouts</h2>
        
        <p>Different layout patterns for organizing multiple cards:</p>

        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="grid">Grid Layout</TabsTrigger>
            <TabsTrigger value="masonry">Masonry</TabsTrigger>
            <TabsTrigger value="carousel">Carousel</TabsTrigger>
          </TabsList>
          
          <TabsContent value="grid">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Card {i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Content for card {i}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="masonry">
            <pre><code>{`// Masonry layout with CSS Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
  {cards.map((card, index) => (
    <Card key={index} className={getRandomHeight()}>
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{card.content}</p>
      </CardContent>
    </Card>
  ))}
</div>

// Helper function for varying heights
function getRandomHeight() {
  const heights = ['h-48', 'h-64', 'h-80', 'h-56'];
  return heights[Math.floor(Math.random() * heights.length)];
}`}</code></pre>
          </TabsContent>
          
          <TabsContent value="carousel">
            <pre><code>{`// Card carousel implementation
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

<Carousel className="w-full max-w-sm">
  <CarouselContent>
    {cards.map((card, index) => (
      <CarouselItem key={index}>
        <Card>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{card.content}</p>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Responsive Design</h2>
        
        <p>Cards adapt beautifully to different screen sizes:</p>

        <pre><code>{`// Responsive card grid
<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {cards.map((card) => (
    <Card key={card.id} className="w-full">
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base">{card.description}</p>
      </CardContent>
    </Card>
  ))}
</div>

// Mobile-first approach
<Card className="w-full max-w-sm mx-auto md:max-w-none md:mx-0">
  <CardHeader className="p-4 md:p-6">
    <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
  </CardHeader>
</Card>`}</code></pre>

        <h2>Accessibility</h2>
        
        <p>Ensure your cards are accessible to all users:</p>

        <ul>
          <li><strong>Semantic HTML:</strong> Use proper heading hierarchy within cards</li>
          <li><strong>Focus Management:</strong> Make interactive cards keyboard accessible</li>
          <li><strong>ARIA Labels:</strong> Provide descriptive labels for complex cards</li>
          <li><strong>Color Contrast:</strong> Ensure sufficient contrast for readability</li>
          <li><strong>Screen Readers:</strong> Structure content logically for screen readers</li>
        </ul>

        <pre><code>{`// Accessible card example
<Card 
  role="article"
  tabIndex={0}
  className="focus:ring-2 focus:ring-primary focus:outline-none"
>
  <CardHeader>
    <CardTitle role="heading" aria-level="2">
      Article Title
    </CardTitle>
    <CardDescription>
      Brief description of the article content
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main article content...</p>
  </CardContent>
  <CardFooter>
    <Button aria-label="Read full article about [topic]">
      Read More
    </Button>
  </CardFooter>
</Card>`}</code></pre>

        <div className="mt-12 p-6 bg-muted rounded-lg border-l-4 border-primary">
          <h4 className="font-semibold text-foreground mb-2">💡 Design Tips</h4>
          <p className="text-foreground-muted mb-0">
            Keep card content scannable with clear hierarchy. Use consistent spacing and 
            alignment across cards. Consider the user's reading pattern - place important 
            actions in expected locations.
          </p>
        </div>
      </article>
    </DocLayout>
  );
};

export default Cards;