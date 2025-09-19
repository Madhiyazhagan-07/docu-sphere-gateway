import DocLayout from "@/components/DocLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

const Performance = () => {
  return (
    <DocLayout>
      <article className="prose-docs">
        <h1>Performance Optimization</h1>
        
        <p>
          Performance is crucial for user experience and SEO. This guide covers comprehensive 
          strategies to optimize your DocSite application for speed, efficiency, and scalability.
        </p>

        <Alert>
          <Zap className="h-4 w-4" />
          <AlertTitle>Performance First</AlertTitle>
          <AlertDescription>
            Every millisecond counts. Users expect fast, responsive applications. 
            A 100ms delay can reduce conversion rates by 7%.
          </AlertDescription>
        </Alert>

        <h2>Core Web Vitals</h2>
        
        <p>Focus on Google's Core Web Vitals for optimal user experience:</p>

        <div className="grid gap-4 md:grid-cols-3 my-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                LCP
              </CardTitle>
              <CardDescription>Largest Contentful Paint</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">&lt; 2.5s</div>
              <p className="text-sm text-muted-foreground">Good performance threshold</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                FID
              </CardTitle>
              <CardDescription>First Input Delay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">&lt; 100ms</div>
              <p className="text-sm text-muted-foreground">Good performance threshold</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                CLS
              </CardTitle>
              <CardDescription>Cumulative Layout Shift</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">&lt; 0.1</div>
              <p className="text-sm text-muted-foreground">Good performance threshold</p>
            </CardContent>
          </Card>
        </div>

        <h2>Bundle Optimization</h2>
        
        <p>Reduce bundle size and improve loading times:</p>

        <Tabs defaultValue="analysis" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analysis">Bundle Analysis</TabsTrigger>
            <TabsTrigger value="splitting">Code Splitting</TabsTrigger>
            <TabsTrigger value="treeshaking">Tree Shaking</TabsTrigger>
          </TabsList>
          
          <TabsContent value="analysis">
            <pre><code>{`# Install bundle analyzer
npm install --save-dev webpack-bundle-analyzer

# Add to package.json scripts
{
  "scripts": {
    "analyze": "npm run build && npx webpack-bundle-analyzer dist/static/js/*.js"
  }
}

# Run analysis
npm run analyze

# Vite bundle analysis
npm install --save-dev rollup-plugin-visualizer

# vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ],
});`}</code></pre>
          </TabsContent>
          
          <TabsContent value="splitting">
            <pre><code>{`// Route-based code splitting
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load components
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
}

// Component-based splitting
const HeavyComponent = lazy(() => 
  import('./HeavyComponent').then(module => ({
    default: module.HeavyComponent
  }))
);

// Dynamic imports with conditions
async function loadChartLibrary() {
  if (shouldLoadCharts) {
    const { Chart } = await import('chart.js');
    return Chart;
  }
  return null;
}`}</code></pre>
          </TabsContent>
          
          <TabsContent value="treeshaking">
            <pre><code>{`// Good - Import only what you need
import { debounce } from 'lodash-es';
import { format } from 'date-fns/format';

// Bad - Imports entire library
import _ from 'lodash';
import * as dateFns from 'date-fns';

// Optimize imports in vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          utils: ['date-fns', 'clsx', 'tailwind-merge']
        }
      }
    }
  }
});

// Mark side-effect free packages in package.json
{
  "sideEffects": ["*.css", "*.scss"]
}`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Image Optimization</h2>
        
        <p>Images often account for most of a page's weight. Optimize them effectively:</p>

        <Tabs defaultValue="formats" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="formats">Modern Formats</TabsTrigger>
            <TabsTrigger value="lazy">Lazy Loading</TabsTrigger>
            <TabsTrigger value="responsive">Responsive Images</TabsTrigger>
          </TabsList>
          
          <TabsContent value="formats">
            <pre><code>{`// Modern image formats with fallbacks
<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>

// Automatic optimization with build tools
// vite.config.ts
import { defineConfig } from 'vite';
import { imageOptimize } from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    imageOptimize({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.6, 0.8] },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeDimensions', active: true }
        ]
      }
    })
  ]
});

// Next.js Image component equivalent
function OptimizedImage({ src, alt, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}`}</code></pre>
          </TabsContent>
          
          <TabsContent value="lazy">
            <pre><code>{`// Native lazy loading
<img 
  src="image.jpg" 
  alt="Description"
  loading="lazy"
  decoding="async"
/>

// Intersection Observer for custom lazy loading
import { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt, placeholder, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} {...props}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{ 
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s'
          }}
        />
      )}
      {!isLoaded && placeholder && (
        <div className="bg-muted animate-pulse" />
      )}
    </div>
  );
}`}</code></pre>
          </TabsContent>
          
          <TabsContent value="responsive">
            <pre><code>{`// Responsive images with srcset
<img
  src="image-800w.jpg"
  srcSet="
    image-400w.jpg 400w,
    image-800w.jpg 800w,
    image-1200w.jpg 1200w
  "
  sizes="
    (max-width: 400px) 100vw,
    (max-width: 800px) 50vw,
    33vw
  "
  alt="Responsive image"
/>

// CSS for responsive images
.responsive-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

// Generate responsive images in build
// Use tools like sharp for Node.js
const sharp = require('sharp');

async function generateResponsiveImages(inputPath, outputDir) {
  const sizes = [400, 800, 1200, 1600];
  
  for (const size of sizes) {
    await sharp(inputPath)
      .resize(size)
      .jpeg({ quality: 80 })
      .toFile(\`\${outputDir}/image-\${size}w.jpg\`);
      
    await sharp(inputPath)
      .resize(size)
      .webp({ quality: 80 })
      .toFile(\`\${outputDir}/image-\${size}w.webp\`);
  }
}`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Runtime Performance</h2>
        
        <p>Optimize React components and rendering performance:</p>

        <Tabs defaultValue="memoization" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="memoization">Memoization</TabsTrigger>
            <TabsTrigger value="virtualization">Virtualization</TabsTrigger>
            <TabsTrigger value="debouncing">Debouncing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="memoization">
            <pre><code>{`import { memo, useMemo, useCallback } from 'react';

// Memoize expensive components
const ExpensiveComponent = memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => {
      // Expensive computation
      return processItem(item);
    });
  }, [data]);

  const handleUpdate = useCallback((id, value) => {
    onUpdate(id, value);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => (
        <Item 
          key={item.id} 
          data={item} 
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
});

// Custom comparison for memo
const MyComponent = memo(({ user, settings }) => {
  return <div>{user.name}</div>;
}, (prevProps, nextProps) => {
  return (
    prevProps.user.id === nextProps.user.id &&
    prevProps.settings.theme === nextProps.settings.theme
  );
});

// Memoize context values
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const value = useMemo(() => ({
    theme,
    setTheme,
    toggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light')
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}`}</code></pre>
          </TabsContent>
          
          <TabsContent value="virtualization">
            <pre><code>{`// Virtual scrolling for large lists
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <ItemComponent data={items[index]} />
    </div>
  );

  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </List>
  );
}

// Custom virtualization hook
function useVirtualization(items, containerHeight, itemHeight) {
  const [scrollTop, setScrollTop] = useState(0);
  
  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    visibleStart + Math.ceil(containerHeight / itemHeight),
    items.length
  );
  
  const visibleItems = items.slice(visibleStart, visibleEnd);
  
  return {
    visibleItems,
    totalHeight: items.length * itemHeight,
    offsetY: visibleStart * itemHeight,
    onScroll: (e) => setScrollTop(e.target.scrollTop)
  };
}

// Intersection observer for infinite scrolling
function useInfiniteScroll(callback, hasMore) {
  const [isFetching, setIsFetching] = useState(false);
  
  useEffect(() => {
    if (!isFetching) return;
    fetchMoreData();
  }, [isFetching]);

  const fetchMoreData = async () => {
    await callback();
    setIsFetching(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000
        && hasMore
      ) {
        setIsFetching(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return [isFetching, setIsFetching];
}`}</code></pre>
          </TabsContent>
          
          <TabsContent value="debouncing">
            <pre><code>{`// Debounce hook for search and user input
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage in search component
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}

// Throttle for scroll events
function useThrottle(callback, delay) {
  const [lastRun, setLastRun] = useState(Date.now());

  return useCallback((...args) => {
    if (Date.now() - lastRun >= delay) {
      callback(...args);
      setLastRun(Date.now());
    }
  }, [callback, delay, lastRun]);
}

// RAF-based smooth animations
function useAnimationFrame(callback) {
  const requestRef = useRef();
  
  const animate = useCallback(() => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);
}`}</code></pre>
          </TabsContent>
        </Tabs>

        <h2>Caching Strategies</h2>
        
        <p>Implement effective caching to reduce load times:</p>

        <pre><code>{`// Service Worker for asset caching
// sw.js
const CACHE_NAME = 'docsite-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// HTTP caching headers
// For static assets (1 year)
Cache-Control: public, max-age=31536000, immutable

// For HTML files (no cache, always revalidate)
Cache-Control: no-cache, must-revalidate

// For API responses (5 minutes)
Cache-Control: public, max-age=300

// React Query for data caching
import { useQuery, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

function useUserData(userId) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    staleTime: 5 * 60 * 1000,
  });
}`}</code></pre>

        <h2>Performance Monitoring</h2>
        
        <p>Track and monitor performance metrics:</p>

        <pre><code>{`// Web Vitals measurement
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics service
  gtag('event', metric.name, {
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_category: 'Web Vitals',
    event_label: metric.id,
    non_interaction: true,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);

// Performance Observer
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'navigation') {
      console.log('DNS lookup:', entry.domainLookupEnd - entry.domainLookupStart);
      console.log('TCP connect:', entry.connectEnd - entry.connectStart);
      console.log('Request time:', entry.responseEnd - entry.requestStart);
      console.log('DOM ready:', entry.domContentLoadedEventEnd - entry.navigationStart);
    }
  }
});

observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

// Custom performance hooks
function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const measureTime = (name, fn) => {
      const start = performance.now();
      const result = fn();
      const end = performance.now();
      
      setMetrics(prev => ({
        ...prev,
        [name]: end - start
      }));
      
      return result;
    };

    return { measureTime, metrics };
  }, []);
}`}</code></pre>

        <Alert className="mt-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Performance Budget</AlertTitle>
          <AlertDescription>
            Set performance budgets: Bundle size &lt; 250KB, First paint &lt; 1s, 
            Time to interactive &lt; 3s. Monitor these metrics continuously.
          </AlertDescription>
        </Alert>

        <div className="grid gap-4 md:grid-cols-2 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Performance Checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Code splitting implemented</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Images optimized and lazy loaded</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Caching strategy in place</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Performance monitoring active</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tools & Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Lighthouse</Badge>
                <span className="text-sm">Performance auditing</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">WebPageTest</Badge>
                <span className="text-sm">Real-world testing</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Bundle Analyzer</Badge>
                <span className="text-sm">Bundle size analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">React DevTools</Badge>
                <span className="text-sm">Component profiling</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </DocLayout>
  );
};

export default Performance;