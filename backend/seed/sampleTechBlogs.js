export const sampleTechBlogs = [
  {
    title: "Getting Started with React 18: New Features and Best Practices",
    subtitle: "Explore the latest features in React 18 and how to implement them in your projects",
    description: `
      <h2>Introduction to React 18</h2>
      <p>React 18 introduces several groundbreaking features that enhance performance and user experience. In this comprehensive guide, we'll explore the most important updates including Concurrent Features, Automatic Batching, and the new Suspense improvements.</p>
      
      <h3>Concurrent Features</h3>
      <p>The biggest addition in React 18 is concurrent rendering, which allows React to prepare multiple versions of your UI at the same time. This means React can interrupt a long-running render to handle a more urgent update.</p>
      
      <pre><code>
// Using startTransition for non-urgent updates
import { startTransition } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setQuery(value); // Urgent update
    startTransition(() => {
      setResults(searchData(value)); // Non-urgent update
    });
  };
}
      </code></pre>

      <h3>Automatic Batching</h3>
      <p>React 18 automatically batches multiple state updates into a single re-render for better performance, even in promises, timeouts, and native event handlers.</p>

      <h3>Suspense Improvements</h3>
      <p>Suspense now works seamlessly with server-side rendering and has better support for code splitting and data fetching.</p>

      <p>These features make React applications more responsive and provide better user experiences. Start experimenting with these features in your next project!</p>
    `,
    category: "React",
    isPublished: true
  },
  {
    title: "Building RESTful APIs with Node.js and Express: Complete Guide",
    subtitle: "Learn how to create robust and scalable REST APIs using Node.js and Express framework",
    description: `
      <h2>Introduction to REST API Development</h2>
      <p>REST (Representational State Transfer) is an architectural style for designing networked applications. In this guide, we'll build a complete REST API using Node.js and Express.</p>
      
      <h3>Setting Up the Project</h3>
      <p>First, let's initialize our Node.js project and install the necessary dependencies:</p>
      
      <pre><code>
npm init -y
npm install express mongoose cors helmet morgan
npm install -D nodemon
      </code></pre>

      <h3>Creating the Express Server</h3>
      <pre><code>
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
      </code></pre>

      <h3>Database Integration with MongoDB</h3>
      <p>We'll use MongoDB with Mongoose for data persistence. Here's how to set up the connection:</p>

      <pre><code>
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};
      </code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Use proper HTTP status codes</li>
        <li>Implement input validation</li>
        <li>Add rate limiting</li>
        <li>Use environment variables for configuration</li>
        <li>Implement proper error handling</li>
      </ul>

      <p>Following these practices will help you build maintainable and secure APIs that can handle production workloads.</p>
    `,
    category: "Node.js",
    isPublished: true
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which Layout Method",
    subtitle: "Understanding the differences between CSS Grid and Flexbox and choosing the right tool for your layout needs",
    description: `
      <h2>Understanding Modern CSS Layout</h2>
      <p>CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. Let's explore when to use each one effectively.</p>
      
      <h3>CSS Flexbox: One-Dimensional Layouts</h3>
      <p>Flexbox is designed for one-dimensional layouts - either rows or columns. It's perfect for:</p>
      <ul>
        <li>Navigation bars</li>
        <li>Centering content</li>
        <li>Distributing space between items</li>
        <li>Card layouts in a single row/column</li>
      </ul>

      <pre><code>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
      </code></pre>

      <h3>CSS Grid: Two-Dimensional Layouts</h3>
      <p>CSS Grid excels at two-dimensional layouts where you need to control both rows and columns simultaneously:</p>

      <pre><code>
.dashboard {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 250px 1fr 1fr;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
      </code></pre>

      <h3>Practical Examples</h3>
      <p><strong>Use Flexbox for:</strong></p>
      <ul>
        <li>Component-level layouts</li>
        <li>Aligning items in a single direction</li>
        <li>When content should determine the layout</li>
      </ul>

      <p><strong>Use Grid for:</strong></p>
      <ul>
        <li>Page-level layouts</li>
        <li>Complex two-dimensional designs</li>
        <li>When you need precise control over rows and columns</li>
      </ul>

      <h3>Can They Work Together?</h3>
      <p>Absolutely! You can use Grid for the overall page structure and Flexbox for component layouts within grid areas.</p>

      <p>Understanding both tools and their strengths will make you a more versatile frontend developer!</p>
    `,
    category: "CSS",
    isPublished: true
  },
  {
    title: "JavaScript ES2023 Features: What's New and Exciting",
    subtitle: "Discover the latest JavaScript features that are changing how we write modern applications",
    description: `
      <h2>JavaScript ES2023 Overview</h2>
      <p>ES2023 (ECMAScript 2023) brings several exciting features that improve developer productivity and code readability. Let's explore the most impactful additions.</p>
      
      <h3>Array Methods: findLast() and findLastIndex()</h3>
      <p>These new methods help you search arrays from the end, which is useful for finding the most recent items:</p>
      
      <pre><code>
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true }
];

// Find the last active user
const lastActiveUser = users.findLast(user => user.active);
console.log(lastActiveUser); // { id: 3, name: 'Charlie', active: true }

// Get the index of the last active user
const lastActiveIndex = users.findLastIndex(user => user.active);
console.log(lastActiveIndex); // 2
      </code></pre>

      <h3>Hashbang Grammar</h3>
      <p>JavaScript now officially supports hashbang comments for executable scripts:</p>

      <pre><code>
#!/usr/bin/env node
console.log('This script can be executed directly!');
      </code></pre>

      <h3>Symbols as WeakMap Keys</h3>
      <p>You can now use symbols as keys in WeakMaps, providing better encapsulation:</p>

      <pre><code>
const sym = Symbol('mySymbol');
const weakMap = new WeakMap();

weakMap.set(sym, 'symbol value');
console.log(weakMap.get(sym)); // 'symbol value'
      </code></pre>

      <h3>Array.prototype.toReversed()</h3>
      <p>A new non-mutating method that returns a reversed copy of the array:</p>

      <pre><code>
const original = [1, 2, 3, 4, 5];
const reversed = original.toReversed();

console.log(original); // [1, 2, 3, 4, 5] (unchanged)
console.log(reversed); // [5, 4, 3, 2, 1]
      </code></pre>

      <h3>Performance Benefits</h3>
      <p>These features not only improve code readability but also provide performance benefits by reducing the need for complex workarounds.</p>

      <p>Start incorporating these features into your projects to write more expressive and efficient JavaScript code!</p>
    `,
    category: "JavaScript",
    isPublished: true
  },
  {
    title: "TypeScript Best Practices: Writing Better Type-Safe Code",
    subtitle: "Advanced TypeScript techniques and patterns for building robust applications",
    description: `
      <h2>Mastering TypeScript Development</h2>
      <p>TypeScript has become essential for large-scale JavaScript applications. Let's explore advanced patterns and best practices that will improve your TypeScript skills.</p>
      
      <h3>Utility Types for Better Code Reuse</h3>
      <p>TypeScript provides powerful utility types that can transform existing types:</p>
      
      <pre><code>
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Create a type without sensitive fields
type PublicUser = Omit<User, 'password'>;

// Create a partial type for updates
type UserUpdate = Partial<Pick<User, 'name' | 'email'>>;

// Create a required subset
type LoginRequest = Required<Pick<User, 'email' | 'password'>>;
      </code></pre>

      <h3>Generic Constraints and Conditional Types</h3>
      <p>Use generic constraints to create more flexible and type-safe functions:</p>

      <pre><code>
// Generic constraint example
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Conditional type example
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

function handleResponse<T>(response: ApiResponse<T>): void {
  if ('message' in response) {
    console.log(response.message);
  } else {
    console.log(response.data);
  }
}
      </code></pre>

      <h3>Advanced Pattern: Discriminated Unions</h3>
      <p>Use discriminated unions for handling different states safely:</p>

      <pre><code>
type LoadingState = {
  status: 'loading';
};

type SuccessState = {
  status: 'success';
  data: any[];
};

type ErrorState = {
  status: 'error';
  error: string;
};

type AsyncState = LoadingState | SuccessState | ErrorState;

function handleState(state: AsyncState) {
  switch (state.status) {
    case 'loading':
      return 'Loading...';
    case 'success':
      return \`Loaded \${state.data.length} items\`;
    case 'error':
      return \`Error: \${state.error}\`;
  }
}
      </code></pre>

      <h3>Configuration Best Practices</h3>
      <ul>
        <li>Enable strict mode in tsconfig.json</li>
        <li>Use exactOptionalPropertyTypes for better precision</li>
        <li>Enable noImplicitReturns and noImplicitOverride</li>
        <li>Use path mapping for cleaner imports</li>
      </ul>

      <pre><code>
{
  "compilerOptions": {
    "strict": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"]
    }
  }
}
      </code></pre>

      <p>These patterns will help you write more maintainable and error-free TypeScript code. The key is to leverage TypeScript's type system to catch errors at compile time rather than runtime.</p>
    `,
    category: "TypeScript",
    isPublished: true
  },
  {
    title: "Docker for Developers: Containerizing Your Applications",
    subtitle: "Learn how to use Docker to create portable, scalable application environments",
    description: `
      <h2>Getting Started with Docker</h2>
      <p>Docker revolutionizes how we develop, deploy, and run applications. Let's learn how to containerize your applications effectively.</p>
      
      <h3>Understanding Docker Concepts</h3>
      <p>Before diving into commands, let's understand the key concepts:</p>
      <ul>
        <li><strong>Image:</strong> A read-only template with instructions for creating containers</li>
        <li><strong>Container:</strong> A runnable instance of an image</li>
        <li><strong>Dockerfile:</strong> A text file with instructions to build an image</li>
        <li><strong>Registry:</strong> A storage and distribution system for Docker images</li>
      </ul>

      <h3>Creating Your First Dockerfile</h3>
      <p>Let's containerize a Node.js application:</p>
      
      <pre><code>
# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Start the application
CMD ["npm", "start"]
      </code></pre>

      <h3>Docker Compose for Multi-Service Applications</h3>
      <p>Use Docker Compose to manage multiple containers:</p>

      <pre><code>
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=mongodb://mongo:27017/myapp
    depends_on:
      - mongo
      - redis

  mongo:
    image: mongo:5.0
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  mongo_data:
      </code></pre>

      <h3>Best Practices for Production</h3>
      <ul>
        <li>Use multi-stage builds to reduce image size</li>
        <li>Leverage .dockerignore to exclude unnecessary files</li>
        <li>Run containers as non-root users</li>
        <li>Use specific version tags, not 'latest'</li>
        <li>Implement health checks</li>
      </ul>

      <pre><code>
# Multi-stage build example
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
EXPOSE 3000
CMD ["npm", "start"]
      </code></pre>

      <h3>Development Workflow</h3>
      <p>Common Docker commands for development:</p>

      <pre><code>
# Build image
docker build -t myapp .

# Run container
docker run -p 3000:3000 myapp

# Run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs app

# Execute commands in running container
docker exec -it container_name sh
      </code></pre>

      <p>Docker simplifies deployment and ensures consistency across different environments. Start containerizing your applications to improve your development workflow!</p>
    `,
    category: "DevOps",
    isPublished: true
  }
];
